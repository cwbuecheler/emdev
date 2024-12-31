import themes from './src/themes';

const overrideProps = (ctx): any => {
  const defaultTheme = themes['default'];
  const clientTheme = ctx.theme; // eg 'celtics'
  const currentTheme = themes[clientTheme] ? themes[clientTheme] : defaultTheme;

  return {
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
