import Header from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Document, {testInfo} from '../components/document-card';


function ResultItems(props) {
    const jsonGetFetcher = (url) => fetch(url).then(res => res.json());
    let {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_ADDRESS}:${process.env.NEXT_PUBLIC_API_PORT}/search?q=${props.content}`, jsonGetFetcher);
    let searchResults;
    if(!data)
      searchResults = (<div>...</div>);
    else
      searchResults = (
          <div>
            {data.map((val, i) =>{
              return (<div key={val["title"]}>{val["title"]}</div>);
            })}
          </div>
      );

    return (
    <>
      {searchResults}
      <div>
        {Document(testInfo[0])}
        {Document(testInfo[1])}
      </div>
    </>);
  }

export default function search(props) {
    const { query } = useRouter();
    return (
        <>
            <Header>
                <title>{query.q} | Biblioscovery</title>
            </Header>
            <div>
                <ResultItems content={query.q} />
            </div>
        </>
    );
}