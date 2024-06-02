import React, { useEffect } from 'react';
import { Box, Dialog, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchema } from './schema';
import { IForm } from '../models';
import { ITodo } from '../../../models';

interface Props {
  showModal: boolean;
  todo?: ITodo;
  submit: (form: IForm) => void;
  handleClose: () => void;
}

export const ModalTodo = ({ showModal, handleClose, submit, todo }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });

  const watchValue = watch();

  const onSubmit = (form: IForm) => {
    submit(form);
    setValue('name', '');
  };

  useEffect(() => {
    todo?.name ? setValue('name', todo.name) : setValue('name', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);


  return (
    <Dialog open={showModal} onClose={handleClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {todo?.name ? `Editar TO-DO ${todo.name}` : 'Nuevo TO-DO'}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box component="div" sx={{ p: 2, width: '400px', minHeight: '120px' }}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <TextField
            {...register('name')}
            label="Nombre"
            error={!!watchValue.name && !!errors.name}
            helperText={errors.name?.message}
            size="small"
            fullWidth
          />
        </form>
      </Box>
    </Dialog>
  );
};
