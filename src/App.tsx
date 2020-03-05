import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux';
import { RootComponent, LoadingView } from './components';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b13735',
        },
        secondary: {
            main: '#555',
        },
    },
    typography: {
        fontFamily: 'Cairo',
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <PersistGate loading={<LoadingView />} persistor={persistor}>
                <RootComponent />
            </PersistGate>
        </Provider>
    </ThemeProvider>
);

export default App;
