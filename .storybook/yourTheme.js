import { create } from '@storybook/theming/create';
//import logo from "../src/assets/APLogo.png";
export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'rgb(29, 43, 90)',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'silver',
  barBg: 'rgb(60, 60, 60)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'silver',
  inputBorderRadius: 4,

  brandTitle: 'Concerto Web Editor',
  brandUrl: 'https://hopeful-kare-8ad63f.netlify.com/',
  brandImage: 'logo'
});