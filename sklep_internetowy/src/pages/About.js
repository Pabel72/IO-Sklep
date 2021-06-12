import React from 'react';
import Layout from '../components/Layout'

const About = () => {

    return (
        <Layout title="O nas" description="Strona o projekcie" >
            <div className="text-center mt-5">
                <h1>O nas</h1>
                <p>Sklep internetowy - <strong>Inżynieria Oprogramowania.</strong> wykonany w React.</p>

            </div>
        </Layout>

    );
}

export default About;