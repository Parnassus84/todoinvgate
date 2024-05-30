import React, { ComponentProps, FC } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface Props extends ComponentProps<any> {
  filterBy: (filter: string) => void;
}


export const FilterTask: FC<Props> = ({ filterBy, ...restProps }) => {

  return (
    <div {...restProps}>
      <FormControl>        
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          defaultValue="all"
          name="row-radio-buttons-group"
          onChange={(event) => filterBy(event.target.value) }
        >
          <FormControlLabel value="all" control={<Radio />} label="Todos" />
          <FormControlLabel value="completed" control={<Radio />} label="Completadas" />
          <FormControlLabel value="pending" control={<Radio />} label="Pendientes" />         
        </RadioGroup>
      </FormControl>
    </div>
  );
};
