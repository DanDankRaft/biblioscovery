import Header from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Document from '../components/document-card';
import Link from 'next/link';
import SearchBox from '../components/search-box';
import Title from '../components/title';

function NavBar(props) {
  return (
    <div className='search-navbar'>
      <Link href='/'>
        <a>
          <Title className='search-navbar-title'/>
        </a>
      </Link>
      <SearchBox router={props.router} value={props.value}/>
    </div>
  );
}

function ResultItems(props) {
    const jsonGetFetcher = (url) => fetch(url).then(res => res.json());
    let {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_ADDRESS}:${process.env.NEXT_PUBLIC_API_PORT}/search?q=${props.content}`, jsonGetFetcher);
    let searchResults;
    if(error)
      searchResults = <div>{error.message}</div>;
    else if(!data)
      searchResults = "...";
    else if(!Array.isArray(data) || data.length == 0)
      searchResults = "no results!";
    else
      searchResults = (
          <>
            {data.map(val => <Document key={val["id"]} doc={val} />)}
          </>
      );

    return (
    <div className='results'>
      {searchResults}
    </div>);
  }

export default function search(props) {
    const router = useRouter();
    return (
        <>
            <Header>
                <title>{router.query.q} | Bibliscovery</title>
            </Header>
            <div>
                <NavBar router={router} value={router.query.q} />
                <ResultItems content={router.query.q} />
            </div>
        </>
    );
}