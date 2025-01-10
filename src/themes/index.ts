import celticsTheme from './celtics.theme';
import defaultTheme from './default.theme';

// This will be imported from vanilla components eventually
export type Theme = {
  'brand-color-primary'?: string;
  'brand-color-secondary'?: string;
  chartColors?: string[];
  chartFont?: {
    color?: string;
    family?: string;
    size?: number;
  };
  chartOptions?: {
    toolTipEnabled?: boolean;
  };
  dateFormats?: {
    year?: string;
    quarter?: string;
    month?: string;
    day?: string;
    week?: string;
    hour?: string;
    minute?: string;
    second?: string;
  };
};

export default {
  celtics: celticsTheme,
  default: defaultTheme,
};
