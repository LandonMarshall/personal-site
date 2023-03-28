import { AppProps } from "next/app";
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <ThemeProvider theme={theme}>
      <AnyComponent {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
