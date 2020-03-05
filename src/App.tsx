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
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
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
