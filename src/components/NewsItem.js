import React, { Component } from 'react'
import img from "../assets/noimg.jpg"
import "../style/NewsItem.css"

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source}=this.props;
    return ( 
      <>
          <div className="card" style={{paddingLeft: "5px", paddingRight: "5px", height: "400px",width:"280px"}}>
          <img src={imgUrl?imgUrl:img} className="card-img-top my-2" alt="/" style={{height:"150px"}}/>
          <div className="card-body" >
            <h5 className="card-title">{title?title.slice(0,35).concat("..."):("")}</h5>
            <p className="card-text">{description?description.slice(0,40).concat("..."):(" ")}</p>
            <p className="card-text"><small className="text-muted">-By {author?author:"unknown"} at {new Date(date).toGMTString()}</small></p>
           <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"91%",zIndex:'1'}}>
            {source}
            </span>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem