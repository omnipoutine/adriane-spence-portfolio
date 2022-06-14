import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
//Component for metadata of site
//props
//title - title of website
//description - short description of website
//url - url of website
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

