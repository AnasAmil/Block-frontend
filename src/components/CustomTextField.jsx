import { TextField } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

export const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#FF5C36',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF5C36',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#FF5C36',
      },
    },
});
