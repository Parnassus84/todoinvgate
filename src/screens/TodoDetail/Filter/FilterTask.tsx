import React, { ComponentProps, FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { FilterBy } from '../todo-detail.enum';

interface Props extends ComponentProps<any> {
  filterBy: (filter: FilterBy) => void;
}

export const FilterTask: FC<Props> = ({ filterBy, ...restProps }) => {
  return (
    <div {...restProps}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue={FilterBy.ALL}
          name="row-radio-buttons-group"
          onChange={(event) => filterBy(event.target.value as FilterBy)}
        >
          <FormControlLabel value={FilterBy.ALL} control={<Radio />} label="Todos" />
          <FormControlLabel
            value={FilterBy.COMPLETED}
            control={<Radio />}
            label="Completadas"
          />
          <FormControlLabel
            value={FilterBy.PENDING}
            control={<Radio />}
            label="Pendientes"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
