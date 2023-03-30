import { AppProps } from "next/app";
import theme from 'theme';
import { ThemeProvider } from '@mui/material/styles';

import 'public/fonts/style.css';

const App = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <ThemeProvider theme={theme}>
      <AnyComponent {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
