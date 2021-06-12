import React from 'react';
import Layout from '../components/Layout';

const NotFound = () => {

    const center = {
        textAlign: 'center'
    }

    return (
        <Layout>
        <div style={center}>
        <h1>Błąd 404</h1>
    <p>Bardzo nam przykro nie ma takiej strony</p>
    </div>
    </Layout>
);
}

export default NotFound;