import { defaultTheme } from 'vanilla-components';

import themes from './src/themes';

const overrideProps = (ctx): any => {
  const defaultTheme = themes['default'];
  const clientTheme = ctx.theme; // eg 'burgerhaus'
  const currentTheme = themes[clientTheme] ? themes[clientTheme] : defaultTheme;

  return {
    cssToGenerate: themes,
    theme: currentTheme,
    // Define global overrides here (can affect all themes, or be used for non-theme data)
  };
};
export default overrideProps;
