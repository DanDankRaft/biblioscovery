import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function newHome(props) {

  let [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Biblioscovery</title>
      </Head>
      <div className={"flex flex-col min-h-screen min-w-screen justify-center items-center"}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div className="title">
          <h1>BIBLISC<span className={'magicO'}>O</span>VERY</h1>
        </div>
        <div className="subtitle">
          <h2>Discover your sources. Discover the world.</h2>
        </div>
        <SearchBox onSubmit={(e) => {e.preventDefault(); router.push(`/search?q=${e.target.query.value}`)}}/>
      </div>
    </>
  );
}

class SearchBox extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
    <form className='searchbox' action="." onSubmit={this.props.onSubmit}>
      <input type='search' name="query" placeholder='Start your journey...'></input>
      <button type='submit'><FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass}/><span className='searchtext'>Search</span></button>
    </form>);
  }
}