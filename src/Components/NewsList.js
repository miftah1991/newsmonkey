import React, { useState, useEffect } from 'react'
import News from './News'

function NewsList(props) {
    const { pagesize } = props;
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);



    useEffect(() => {
        fetchdata();
    }, [])
    const fetchdata = async () => {
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&pageSize=${pagesize}&page=${page}`;
        console.log(url);
         let data = await fetch(url);
         let parsedata = await data.json();
        console.log(parsedata);
        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults)
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&pageSize=${pagesize}&page=${page + 1}`;
        fetchMoreData(url);

    }
    const handlePrevClick = async () => {
        setPage(page -1);
        const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&pageSize=${pagesize}&page=${page -1}`;
        fetchMoreData(url);
    }
    const fetchMoreData = async(url)=>{
       
        let data = await fetch(url);
         let parsedata = await data.json();
        console.log(parsedata);
        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults)
    }
    return (
        <div className='container'>
            <h3 className='text-center my-3'>News API</h3>
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <News title={element.title} description={element.description} url={element.url} author={element.author} publishedAt={element.publishedAt} urlToImage={element.urlToImage} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
    )
}

export default NewsList