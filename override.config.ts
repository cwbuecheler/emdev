// Ultimately the Theme type and default theme will come from vanilla components
import themes, { Theme } from './src/themes';
import { mergician } from 'mergician';

const overrideProps = (ctx): any => {
  const { default: defaultTheme } = themes;
  const clientTheme: string = ctx.theme; // eg 'github'
  const currentTheme = themes[clientTheme] ? themes[clientTheme] : defaultTheme;
  const finalTheme = mergician(defaultTheme, currentTheme);

  return {
    cssToGenerate: themes,
    theme: finalTheme,
    // Define global overrides here (can affect all themes, or be used for non-theme data)
  };
};
export default overrideProps;
