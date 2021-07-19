import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '500': '#FFBA08',
    },
    gray: {
      '800': '#47585B',
      '500': '#999999',
      '200': '#DADADA',
      '100': '#F5F8FA',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.800',
      },
    },
  },
});
