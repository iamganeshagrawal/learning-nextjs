import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link'

const categoriesList = "business entertainment general health science sports technology".split(" ");

const CategoryNews = ({category, articals, query, params}) => {
    useEffect(()=>{
        console.log(category)
        console.log(params)
        console.log(query)
        console.log(articals)
        console.log(categoriesList)
    },[])
    return (
        <>
        <Head>
            <title>Top {category} News</title>
        </Head>
        <div>
            {
                categoriesList.map(cat => {
                    return (
                    <span key={cat} style={{
                            textTransform: 'capitalize',
                            margin: "0.5rem 1rem",
                            border: "1px solid blue",
                            color: 'blue',
                            padding: "0.5rem 1rem",
                            textDecoration: "none !important"
                        }}
                    >
                        <Link href="/category/[category]" as={`/category/${cat}`}>
                            {cat}
                        </Link>
                    </span>
                    )
                })
            }
        </div>
        <div>
            {
                articals.length > 0 &&
                <ol>
                    {
                        articals.map(({title}) => <li key={title}>{title}</li>)
                    }
                </ol>
            }
        </div>
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const {params} = ctx;
    const {category} = params;
    let data = {}
    let articals = []
    try{

        const responce = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.NEWS_API_KEY}`)
        const responceJson = await responce.json()
        data = responceJson
        if(data.status === "ok" && data.totalResults > 0){
            articals = data.articles
        }
    }
    catch{
        ctx.res.statusCode = 404;
        ctx.res.end('Not Found')
        return
    }
    return {
        props: {
            query: ctx.query,
            params: ctx.params,
            category,
            articals
        }
    }
}

export default CategoryNews