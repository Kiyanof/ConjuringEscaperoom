// pages/_app.tsx
import { Provider } from 'react-redux';
import { AppProps } from 'next/app'; // Import AppProps from Next.js
import store from '../redux';
import "../styles/globals.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
