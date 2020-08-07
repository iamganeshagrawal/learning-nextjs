import React, { Component } from 'react'
import Head from 'next/head'

class Author extends Component {
    constructor(props){
        super(props);
        this.productName = props.params.author;
        this.state = {
            data: []
        }
    }
    render() {
        const {productName} = this;
        return (
            <>
        <Head>
            <title>{productName} - ECommerce</title>
        </Head>
        <div>
            {productName}
            <br />
            <ul>
            {/* {
                data.map(link => {
                    return(
                    <li key={link._id}><a href={link.url}>{link.title}</a></li>
                    )
                })
            } */}
            </ul>
        </div>
        </>
        )
    }
}

export default Author;
export const getServerSideProps = async (ctx) =>{
    return {
        props: {
            query: ctx.query,
            params: ctx.params        
        }
    }
}