import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class NewsComponent extends Component {
  static defaultProps = {
  country:'in',
  pageSize:6,
  category:'general'  
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  articles=[]
   constructor(){
    super()
    this.state={
    articles:this.articles,
    loading:false,
    page:1
    }
  }
  async updateNews(){
    this.setState({loading:true})
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    let data=await fetch(url)
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
    loading:false})
  }
  async componentDidMount(){
    this.updateNews()
  }
  handlePrev = async()=>
  {
    this.setState({page:this.state.page-1 })
    this.updateNews()
  }
  handleNext = async () => {
    this.setState({page:this.state.page+1 })
    this.updateNews()
}
  render() {
    return (
      <>
      <div className="text-center my-4">
        <h2> News - Top Headlines</h2>
       <div className='text-items-center'>
          {this.state.loading&&<Spinner/>}
        </div>
      </div>
      <hr/>
      <div className="container">
      <div className='row g-4'>
        {!this.state.loading&&this.state.articles.map((e)=> {
        return <div className='col-md-4' key={e.url}>
           <NewsItem title={e.title} description ={e.description} imgUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
          </div>
         })}
      </div>
      </div>
      <hr/>
      <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
       <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </>
    )
  }
}

export default NewsComponent