import React from 'react';
import Head from 'next/head';
import Proptypes from "prop-types";
import AppLayout from '../components/AppLayout';

//Component는 next에서 넣어주는 props
const Nodebird = ({ Component }) => {
    return (<>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        </Head>
        <AppLayout>
            <Component />
        </AppLayout>
    </>
    );
};
Nodebird.proptypes={
    Component:Proptypes.elementType
}

export default Nodebird;