import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
function NewsList(props) {
    const { pagesize,category } = props;
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetchdata();
    }, [])
    const fetchdata = async () => {
        const url = `https://newsapi.org/v2/top-headlines?from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&category=${category}&pageSize=${pagesize}&page=${page}`;
        console.log(url);
         let data = await fetch(url);
         let parsedata = await data.json();
        console.log(parsedata);
        setArticles(parsedata.articles);
        setTotalResults(parsedata.totalResults)
        setLoading(false);
        props.setProgress(100);
    }

    // const handleNextClick = async () => {
    //     setPage(page + 1);
    //     const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&pageSize=${pagesize}&page=${page + 1}`;
    //     fetchMoreData(url);

    // }
    // const handlePrevClick = async () => {
    //     setPage(page -1);
    //     const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&pageSize=${pagesize}&page=${page -1}`;
    //     fetchMoreData(url);
    // }
    const fetchMoreData = async()=>{
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?from=2022-08-27&sortBy=publishedAt&apiKey=252be91ed12c4442b9279cc4826cbd8f&category=${category}&pageSize=${pagesize}&page=${page + 1}`;
         let data = await fetch(url);
         let parsedata = await data.json();
        setArticles(articles.concat( parsedata.articles));
        setTotalResults(parsedata.totalResults);
         console.log(url);
        setLoading(false);
    }
    return (
        <>
        {loading && <Spinner />}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}  >
        <div className='container'>
            <h3 className='text-center my-3'>News API</h3>
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <News title={element.title} description={element.description} url={element.url} author={element.author} publishedAt={element.publishedAt} urlToImage={element.urlToImage} />
                    </div>
                })}
            </div>
        </div>
        </InfiniteScroll>
        
        </>
    )
}
NewsList.prototype ={
    category:PropTypes.string,
}
NewsList.defaultProps ={
    category:'general',
}

export default NewsList