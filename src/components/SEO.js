import React from 'react';
import Helmet from "react-helmet";

const SEO = ( props ) => {
    return(
        <>
            <Helmet 
                htmlAttributes={{
                    lang: 'ja'
                }}
                title = {props.title}
                meta = {[
                    {
                        name: 'description',
                        content: props.description
                    }
                ]}
            />
        </>
    );
}

export default SEO;
