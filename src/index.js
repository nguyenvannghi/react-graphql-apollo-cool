import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import store from './app/stores';
import Routes from './app/routes';
import LoadingApp from './app/components/loadingApp';
import Toast from './app/components/toast';

import './styles/index.scss';

const theme = {
    global: {
        colors: {
            error: '#FF4040',
            success: '#00C781',
            warning: '#FFAA15',
            info: '#7D4CDB',
            white: '#fff',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store()}>
            <Grommet theme={theme} full>
                {/* <ResponsiveContext.Consumer> */}
                <Toast />
                <LoadingApp />
                <Routes />
                {/* </ResponsiveContext.Consumer> */}
            </Grommet>
        </Provider>
    </ApolloProvider>,

    document.getElementById('root'),
);
