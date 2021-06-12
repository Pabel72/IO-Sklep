import React from 'react';
import Layout from '../components/login.component'

const Login = () => {

    return (
        <Layout title="Logowanie" description="Formularz logowania" >
            <div className="text-center mt-5">
                <h1>Logowanie do sklepu</h1>
                <p>Sklep internetowy - <strong>Inżynieria Oprogramowania.</strong> wykonany w React.</p>

            </div>
        </Layout>

    );
}

export default Login;