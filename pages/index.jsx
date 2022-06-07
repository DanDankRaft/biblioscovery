import Head from 'next/head'
import React, {useState} from 'react';
import { useRouter } from 'next/router';
import Title from '../components/title';
import SearchBox from '../components/search-box';

export default function Index(props) {

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