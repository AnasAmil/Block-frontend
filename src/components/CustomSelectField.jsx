import {FormControl, Select} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomSelectField = styled(FormControl)({
    '& .Mui-focused > fieldset': {
        borderColor: '#FF5C36 !important',
      },

      '& .Mui-focused': {
        color: '#FF5C36 !important',
      },

});