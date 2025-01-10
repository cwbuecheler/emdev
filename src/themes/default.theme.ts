import { Theme } from './index';

const theme: Theme = {
  'brand-color-primary': '#6778DE',
  'brand-color-secondary': '#FF997C',
  chartColors: [
    '#6778DE',
    '#FF997C',
    '#9EA4F4',
    '#B8B8D1',
    '#FF6B6C',
    '#FFC145',
    '#9DC7FF',
    '#FF805B',
    '#CD9FFF',
    '#E6DEDE',
    '#FFA6A6',
    '#FFD98D',
  ],
  chartFont: {
    color: '#888',
    family:
      '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    size: 14,
  },
  chartOptions: {
    toolTipEnabled: true,
  },
  dateFormats: {
    year: 'yyyy',
    quarter: 'MMM yy',
    month: 'MMM yy',
    day: 'd MMM',
    week: 'd MMM',
    hour: 'eee HH:mm',
    minute: 'eee HH:mm',
    second: 'HH:mm:ss',
  },
};

export default theme;
