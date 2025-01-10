// Ultimately the Theme type and default theme will come from vanilla components
import themes, { Theme } from './src/themes';

const overrideProps = (ctx): any => {
  const { default: defaultTheme } = themes;
  const clientTheme: string = ctx.theme; // eg 'github'
  const currentTheme = themes[clientTheme] ? themes[clientTheme] : defaultTheme;

  return {
    cssToGenerate: themes,
    theme: {
      // This gives us all the theme data
      ...defaultTheme,
      // This gives us specific overrides for the current theme
      ...currentTheme,
    },
    // Define global overrides here (can affect all themes, or be used for non-theme data)
  };
};
export default overrideProps;
