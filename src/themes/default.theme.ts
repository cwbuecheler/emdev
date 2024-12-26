import { Theme } from '../../types/themes';

const defaultTheme: Theme = {
  colors: {
    brand: {
      100: '#ffffff',
      1000: '#303038',
      1100: '#191922',
      1200: '#000000',
      200: '#f3f3f4',
      300: '#e8e8e9',
      400: '#d1d1d3',
      500: '#bababd',
      600: '#a3a3a7',
      700: '#8c8c90',
      800: '#75757a',
      900: '#47474e',
    },
    chart: ['#6778de', '#ff997c', '#9ea4f4', '#b8b8d1', '#ff6b6c', '#ffc145'],
    category: {
      1: '#3350f7',
      2: '#fc7e5c',
      3: '#6e79fb',
      4: '#9999c8',
      5: '#fb4e4d',
    },
    error: {
      100: '#ef4444',
    },
    neutral: {
      100: '#ffffff',
      1000: '#303038',
      1100: '#191922',
      1200: '#000000',
      200: '#f3f3f4',
      300: '#e8e8e9',
      400: '#d1d1d3',
      500: '#bababd',
      600: '#a3a3a7',
      700: '#8c8c90',
      800: '#75757a',
      900: '#47474e',
    },
  },
  borders: {
    xsmall: '0.0625rem',
    small: '0.125rem',
    medium: '0.25rem',
  },
  radius: {
    0: '0rem',
    25: '0.125rem',
    50: '0.25rem',
    75: '0.375rem',
    100: '0.5rem',
    150: '0.75rem',
    4500: '22.5rem',
  },
  space: {
    0: '0rem',
    25: '0.125rem',
    50: '0.25rem',
    75: '0.375rem',
    100: '0.5rem',
    150: '0.75rem',
    200: '1rem',
    300: '1.5rem',
    400: '2rem',
    500: '2.5rem',
    600: '3rem',
    800: '4rem',
    1000: '5rem',
  },
  chartJs: {
    showGrid: false,
  },
  mui: {
    showGrid: false,
  },
  amCharts: {
    showGrid: false,
  },
};

export default defaultTheme;
