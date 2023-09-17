// pages/_app.tsx
import { Provider, useDispatch } from 'react-redux';
import { AppProps } from 'next/app'; // Import AppProps from Next.js
import store from '../redux';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import "../styles/globals.css";
import { useEffect } from 'react';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
