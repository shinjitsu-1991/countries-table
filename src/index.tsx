import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import TableContainer from "./components/TableContainer/TableContainer";
import {client} from "./box/hooks";
import {ApolloProvider} from "@apollo/client";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <TableContainer/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
