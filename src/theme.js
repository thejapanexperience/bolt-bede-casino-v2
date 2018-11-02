const colors = {
  primary: '#e21455',
  secondary: '#999',
  tertiary: '#63152d',
  white: '#fff',
  black: '#3e3135',
  blue: '#9ccaff',
  blueDark: '#3c4466',
  blueLight: '#ecf3fc',
  blueLight2: '#c9e2ff',
  blueMid: '#62aafc',
  cream: '#f3ecec',
  green: '#56e165',
  greenDark: '#2ab23a',
  greenLight: '#7cf488',
  grey: '#7c7f8c',
  greyDark: '#333',
  greyLight: '#f9f9f9',
  logoColor: '#db0e17',
  closeColor: '#bfcbd4',
  primaryGradientFrom: '#ff345f',
  primaryGradientTo: '#ff9268',
  transparentWhite: 'rgba(255, 255, 255, 0.95)',
};

const fontSize = {
  root: '10px',
  // font scale
  small: '1rem',
  normal: '1.4rem',
  large: '1.8rem',
};

const boxShadows = {
  header: '0 0.2rem 1.2rem rgba(22, 20, 20, 0.1)',
  normal: '0 0.4rem 1rem rgba(22, 20, 20, 0.1)',
  lighter: '0 0.4rem 1rem rgba(22, 20, 20, 0.05)',
  hover: '0 0.8rem 2rem rgba(22, 20, 20, 0.1)',
};

const mediaQueries = {
  xSmall: 'min-width: 320px',
  small: 'min-width: 460px',
  medium: 'min-width: 960px',
  large: 'min-width: 1280px',
  xLarge: 'min-width: 1280px',
  xxLarge: 'min-width: 1500px',
};

const theme = {
  boxShadows,
  colors,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, ' +
    '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', // emoji fonts
  fontSize,
  mediaQueries,
};

export default theme;
