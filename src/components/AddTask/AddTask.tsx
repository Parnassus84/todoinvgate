import React, { ComponentProps, FC, useRef } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema';

interface Props extends ComponentProps<any> {
  addTask: (task: string) => void;
}

interface IForm {
  name: string;
}

export const AddTask: FC<Props> = ({ addTask, ...restProps }) => {
  const refName = useRef<any>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const watchValue = watch();

  const onSubmit = ({ name }: IForm) => {
    addTask(name);
    refName && (refName.current.value = '');
  };

  return (
    <div {...restProps}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <TextField
          {...register('name')}
          inputRef={refName}
          label="Agrega una tarea"
          error={!!watchValue.name && !!errors.name}
          helperText={errors.name?.message}
          size="small"
          fullWidth
        />
      </form>
    </div>
  );
};
