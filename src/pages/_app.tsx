import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
// import { useStore } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';

import { wrapper } from '../store/store';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

