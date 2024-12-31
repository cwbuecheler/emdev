import { Theme } from '../../types/themes';

/*
 * This is the default theme that will be used if no theme is specified.
 * It is also used as a base to override with other themes.
 *
 * We understand that this is a little overwhelming, but don't worry! Other
 * themes do not need to specify all the variables, only the ones they want to
 * override.
 */
const defaultTheme: Theme = {
  /* Colors - Brand Main */
  'color-brand-100': '#ffffff',
  'color-brand-1000': '#303038',
  'color-brand-1100': '#191922',
  'color-brand-1200': '#000000',
  'color-brand-200': '#f3f3f4',
  'color-brand-300': '#e8e8e9',
  'color-brand-400': '#d1d1d3',
  'color-brand-500': '#bababd',
  'color-brand-600': '#a3a3a7',
  'color-brand-700': '#8c8c90',
  'color-brand-800': '#75757a',
  'color-brand-900': '#47474e',

  /* Colors - Category */
  'color-category-1': '#3350f7',
  'color-category-2': '#fc7e5c',
  'color-category-3': '#6e79fb',
  'color-category-4': '#9999c8',
  'color-category-5': '#fb4e4d',

  /* Colors - Charts */
  'color-charts': [
    '#6778de',
    '#ff997c',
    '#9ea4f4',
    '#b8b8d1',
    '#ff6b6c',
    '#ffc145',
  ],

  /* Colors - Status */
  'color-error-100': '#ef4444',
  'color-neutral-100': '#ffffff',
  'color-neutral-1000': '#303038',
  'color-neutral-1100': '#191922',
  'color-neutral-1200': '#000000',
  'color-neutral-200': '#f3f3f4',
  'color-neutral-300': '#e8e8e9',
  'color-neutral-400': '#d1d1d3',
  'color-neutral-500': '#bababd',
  'color-neutral-600': '#a3a3a7',
  'color-neutral-700': '#8c8c90',
  'color-neutral-800': '#75757a',
  'color-neutral-900': '#47474e',

  /* Borders */
  'border-xsmall': '0.0625rem',
  'border-small': '0.125rem',
  'border-medium': '0.25rem',

  /* Spacing */
  'radius-0': '0rem',
  'radius-25': '0.125rem',
  'radius-50': '0.25rem',
  'radius-75': '0.375rem',
  'radius-100': '0.5rem',
  'radius-150': '0.75rem',
  'radius-4500': '22.5rem',
  'space-0': '0rem',
  'space-25': '0.125rem',
  'space-50': '0.25rem',
  'space-75': '0.375rem',
  'space-100': '0.5rem',
  'space-150': '0.75rem',
  'space-200': '1rem',
  'space-300': '1.5rem',
  'space-400': '2rem',
  'space-500': '2.5rem',
  'space-600': '3rem',
  'space-800': '4rem',
  'space-1000': '5rem',

  /* Typography */
  'font-embeddable':
    '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  'font-custom': '',
  'font-small': '12px',
  'font-regular': '14px',
  'font-large': '32px',
  'font-color-lightest': '#888',
  'font-color-light': '#333942',

  /* Date */
  'date-display-formats': {
    year: 'yyyy',
    quarter: 'MMM yy',
    month: 'MMM yy',
    day: 'd MMM',
    week: 'd MMM',
    hour: 'eee HH:mm',
    minute: 'eee HH:mm',
    second: 'HH:mm:ss',
  },

  /* ChartJS Specific */
  'chartjs-show-grid': false,
  'chartjs-tooltip-enabled': true,

  /* MUI Specific */
  'mui-showGrid': false,

  /* AmCharts Specific */
  'amCharts-showGrid': false,

  /* Add additional theme variables here */
};

export default defaultTheme;
