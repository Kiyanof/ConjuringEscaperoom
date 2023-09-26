/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        // Primary Spectrum
      'primary-50': '#F2F0F7',
      'primary-100': '#E6E2F0',
      'primary-200': '#CDC6E2',
      'primary-300': '#B3AAE0',
      'primary-400': '#9A8EE1',
      'primary-500': '#8370E1',
      'primary-600': '#775ECB',
      'primary-700': '#604A9B',
      'primary-800': '#4C3686',
      'primary-900': '#2F1F5C',
      'primary-950': '#17122F',

      // Secondary Spectrum
      'secondary-50': '#F0F8FB',
      'secondary-100': '#E0F0F7',
      'secondary-200': '#B4DBEC',
      'secondary-300': '#88C6E1',
      'secondary-400': '#5CADD6',
      'secondary-500': '#2F94CB',
      'secondary-600': '#2886B4',
      'secondary-700': '#1F6C8A',
      'secondary-800': '#155462',
      'secondary-900': '#0F3745',
      'secondary-950': '#071B22',

      // Info Spectrum
      'info-50': '#FEF7FA',
      'info-100': '#FDF0F5',
      'info-200': '#FAE0EB',
      'info-300': '#F8C9E2',
      'info-400': '#F6B1D9',
      'info-500': '#F49ACF',
      'info-600': '#E282B6',
      'info-700': '#BE6790',
      'info-800': '#9C4D6C',
      'info-900': '#682C44',
      'info-950': '#34161F',

      success: '#3CB371', // Medium Sea Green
        'success-50': '#EDF5ED',
        'success-100': '#D0E8D0',
        'success-200': '#B3DBB3',
        'success-300': '#96Ce96',
        'success-400': '#79C179',
        'success-500': '#5CC45C', // Core Color
        'success-600': '#4EAB4E',
        'success-700': '#3F8C3F',
        'success-800': '#316D31',
        'success-900': '#235E23',
        'success-950': '#0D3D0D',

        warning: '#FFE569', // Pale Goldenrod (Updated Core Color)
        'warning-50': '#FFFCE5',
        'warning-100': '#FFF9B2',
        'warning-200': '#FFF47D',
        'warning-300': '#FFEF49',
        'warning-400': '#FFE914',
        'warning-500': '#FFE569', // Core Color
        'warning-600': '#FFDF38',
        'warning-700': '#FFD50F',
        'warning-800': '#FFCA00',
        'warning-900': '#E1B500',
        'warning-950': '#B38F00',

        danger: '#FF6347', // Tomato
        'danger-50': '#FFF5F5',
        'danger-100': '#FFEBEB',
        'danger-200': '#FFD1D1',
        'danger-300': '#FFB8B8',
        'danger-400': '#FF9E9E',
        'danger-500': '#FF7E7E', // Core Color
        'danger-600': '#FF5E5E',
        'danger-700': '#FF3F3F',
        'danger-800': '#FF1F1F',
        'danger-900': '#E30000',
        'danger-950': '#B30000',
      }, 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'border': 'border-radius',
        'height': 'height'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
