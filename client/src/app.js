import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../server/src/components/Layout'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { BrowserRouter } from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);

ReactDOM.hydrate(<App />, document.getElementById('app'));