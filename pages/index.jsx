import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Title from '../components/title'

export default function newHome(props) {

  let [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Biblioscovery</title>
      </Head>
      <div className={"main-page"}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Title className="title-mainpage"/>
        <div className="subtitle">
          <h2>Discover your sources. Discover the world.</h2>
        </div>
        <SearchBox router={router}/>
      </div>
    </>
  );
}

class SearchBox extends React.Component {
  constructor(props)
  {
    super(props);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch(e)
  {
    e.preventDefault();
    let query = e.target.query.value;
    if(query != "")
      this.props.router.push(`/search?q=${e.target.query.value}`);
  }

  render()
  {
    return (
    <form className='searchbox' action="." onSubmit={this.onSubmitSearch}>
      <input type='search' name="query" placeholder='Start your journey...'></input>
      <button type='submit'><FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass}/><span className='searchtext'>Search</span></button>
    </form>);
  }
}