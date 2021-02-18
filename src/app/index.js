import React, { memo, StrictMode } from 'react';
import Home from '../page/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context';

const App = () => {
    return (
        <StrictMode>
            <AppProvider>
                <Router>
                    <Home />
                </Router>
            </AppProvider>
        </StrictMode>
    );
};

export default memo(App);