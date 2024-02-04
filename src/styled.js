import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

const grayBase = '#1b1b1b';
const grayMain = alpha(grayBase, 0.7);

export const gray = createTheme({
  palette: {
    gray: {
      main: grayMain,
      light: alpha(grayBase, 0.5),
      dark: alpha(grayBase, 0.9),
      contrastText: getContrastRatio(grayMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});
