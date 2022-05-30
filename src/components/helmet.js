import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

const Meta = ( props ) =>{
    
    return(
        <Helmet>
            <meta charSet="utf-8" />
                <title> {props.title} </title>
                <meta name='description' content={props.description}/>
                <link rel='canonical' href={props.siteurl}/>
        </Helmet>
    )
}
export default Meta;

