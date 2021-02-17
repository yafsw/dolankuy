import React, { memo, StrictMode } from 'react';
import Home from '../page/Home';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <StrictMode>
            <Router>
                <Home />
            </Router>
        </StrictMode>
    );
};

export default memo(App);