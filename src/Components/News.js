import React from 'react'
import PropTypes from 'prop-types'
function News(props) {
    let {urlToImage,title,description,url,author,publishedAt} =props
    return (
        <>
            <div className="card" >
                <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={url} className="btn btn-primary">read more</a>
                    </div>
            </div>
        </>
    )
}
News.prototype ={
    urlToImage:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    url:PropTypes.string,
    author:PropTypes.string,
    publishedAt:PropTypes.string
}
News.defaultProps ={
    urlToImage:'https://image.stern.de/32762162/t/IX/v1/w1440/r1.7778/-/27--artikel26858bild01jpg---f6ba38cbdb8e845d.jpg',
    title:'title',
    description:'description here',
    url: "https://www.stern.de/auto/auto-international--was-steckt-hinter-der-edlen-geely-tochter-zeekr--auf-teslas-spuren-32762160.html",
    author: "unknows",
    publishedAt: "2022-09-27T04:34:44Z",
}
export default News