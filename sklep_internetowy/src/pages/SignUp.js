import React from 'react';
import Layout from '../components/signup.component'

const SignUp = () => {

    return (
        <Layout title="Rejestracja konta" description="Formularz rejestracji" >
            <div className="text-center mt-5">
                <h1>Rejestracja konta</h1>
                <p>Sklep internetowy - <strong>Inżynieria Oprogramowania.</strong> wykonany w React.</p>

            </div>
        </Layout>

    );
}

export default SignUp;