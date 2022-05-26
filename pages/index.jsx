import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import useSWR from 'swr';


class Home extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      searchQuery: "",
      searchBoxContent: ""
    };
    
    this.thisItem = <Item content={""} />;

    this.searchInputHandler = this.searchInputHandler.bind(this);
    
    this.searchSubmitHandler = this.searchSubmitHandler.bind(this);

  }

  searchInputHandler(e)
  {
    this.setState({searchBoxContent: e.target.value});
  }

  searchSubmitHandler(e)
  {
    e.preventDefault();
    let searchQuery = this.state.searchBoxContent;
    this.setState({searchQuery: searchQuery, searchBoxContent: ""});
    this.thisItem = <Item content={searchQuery} />;
  }

  render()
  {
    return (
      <div className={"flex flex-col min-h-screen min-w-screen justify-center items-center"}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className="title">
          <h1>BIBLISC<span className={'magicO'}>O</span>VERY</h1>
        </div>
        <div className="subtitle">
          <h2>Discover your sources. Discover the world.</h2>
        </div>
        <SearchBox content={this.state.searchBoxContent} onInput={this.searchInputHandler} onSubmit={this.searchSubmitHandler}/>
        <div>
          {this.thisItem}
        </div>
      </div>
    );
  }
}

class SearchBox extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {searchcontent: ""};

  }

  render()
  {
    return (
    <form className='searchbox' action="." onSubmit={this.props.onSubmit}>
      <input type='search' placeholder='Start your journey...' value={this.props.content} onInput={this.props.onInput}></input>
      <button type='submit'><FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass}/><span className='searchtext'>Search</span></button>
    </form>);
  }
}

function Item(props) {
  const jsonGetFetcher = (url) => fetch(url).then(res => res.json());
  let {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_ADDRESS}:${process.env.NEXT_PUBLIC_API_PORT}/search?q=${props.content}`, jsonGetFetcher);
  if(!data)
    return (<div>...</div>);
  else
    return (
      data.map((val, i) =>{
        return (<div key={val["title"]}>{val["title"]}</div>);
      })
    );
}

export default Home;