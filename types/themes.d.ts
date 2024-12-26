export type Theme = {
  borders?: ThemeBorders;
  colors?: ThemeColors;
  radius?: ThemeRadius;
  space?: ThemeSpace;
  chartJS?: {
    [key: string]: any;
  };
  mui?: {
    [key: string]: any;
  };
  amCharts?: {
    [key: string]: any;
  };
  // Allow for extensibility
  [key: string]: any;
};

export type ThemeBorders = {
  xsmall?: string;
  small?: string;
  medium?: string;
};

export type ThemeColors = {
  brand?: ThemeColorsBrand;
  category?: ThemeColorsCategory;
  chart?: ThemeColorsChart;
  error?: ThemeColorsError;
  neutral?: ThemeColorsNeutral;
};

export type ThemeColorsBrand = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  1000?: string;
  1100?: string;
  1200?: string;
};

export type ThemeColorsCategory = {
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
};

export type ThemeColorsChart = string[];

export type ThemeColorsError = {
  100?: string;
};

export type ThemeColorsNeutral = {
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  1000?: string;
  1100?: string;
  1200?: string;
};

export type ThemeRadius = {
  0?: string;
  25?: string;
  50?: string;
  75?: string;
  100?: string;
  150?: string;
  4500?: string;
};

export type ThemeSpace = {
  0?: string;
  25?: string;
  50?: string;
  75?: string;
  100?: string;
  150?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  800?: string;
  1000?: string;
};
