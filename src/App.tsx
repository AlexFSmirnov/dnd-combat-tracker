import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux';
import { RootComponent, LoadingView } from './components';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
            <RootComponent />
        </PersistGate>
    </Provider>
);

export default App;
