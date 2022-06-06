import Header from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Document, {testInfo} from '../components/document-card';
import Link from 'next/link';

function ResultItems(props) {
    const jsonGetFetcher = (url) => fetch(url).then(res => res.json());
    let {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_ADDRESS}:${process.env.NEXT_PUBLIC_API_PORT}/search?q=${props.content}`, jsonGetFetcher);
    let searchResults;
    if(!data)
      searchResults = (<div>...</div>);
    else
      searchResults = (
          <div>
            {data.map(val => <Document key={val["id"]} doc={val} />)}
          </div>
      );

    return (
    <>
      {searchResults}
    </>);
  }

export default function search(props) {
    const { query } = useRouter();
    return (
        <>
            <Header>
                <title>{query.q} | Bibliscovery</title>
            </Header>
            <div>
                <ResultItems content={query.q} />
            </div>
        </>
    );
}