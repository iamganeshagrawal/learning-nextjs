import Head from 'next/head';
import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TitlePage = (props) => {
    const {product: productName} = props.params;
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get('/api/links')
        .then(res => {
            setData(res.data);
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [])
    return (
        <>
        <Head>
            <title>{productName} - ECommerce</title>
        </Head>
        <div>
            {productName}
            <br />
            <ul>
            {
                data.map(link => {
                    return(
                    <li key={link._id}><a href={link.url}>{link.title}</a></li>
                    )
                })
            }
            </ul>
        </div>
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    return {
        props: {
            query: ctx.query,
            params: ctx.params        }
    }
}

export default TitlePage
