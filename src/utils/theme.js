import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#00D1B2';
const lightShades = '#F5F5F5';
const darkAccent = '#3173DC';
const darkShades = '#0A0A0A';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: '#351b14',
  secondaryColor: '#b68834',
  colorWhite: '#ffffff',
  darkBlack: '#222222',
  lighterBlack: '#000',
  textGray: '#777777',
  // backgroundInputColor: lightShades,
  // backgroundInputColorDark: darkShades,
  // textColor: darkShades, // '#0A0B11',
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    font-family: sans-serif;
  }
  input {
    border: 1px solid #b68834 !important;
  }
  textarea {
    border: 1px solid #b68834 !important;
  }
  .card {
    background-color: ${theme.colorWhite}!important;
    box-shadow: ${theme.boxShadow};
  }
  i {
    color: ${theme.colorWhite}!important;
  }
  a {
    color: ${theme.colorWhite}!important;
  }
  .text-yellow-900 {
    color: ${theme.secondaryColor}!important;
  }
  .bg-yellow-900 {
    background-color: ${theme.secondaryColor}!important;
  }
  .grey {
    color: ${theme.textGray}!important;
  }
  .white {
    color: ${theme.colorWhite}!important;
  }
`;

export default GlobalStyle;
