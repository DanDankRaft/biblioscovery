import Header from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';

function ResultItems(props) {
    const jsonGetFetcher = (url) => fetch(url).then(res => res.json());
    let {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_ADDRESS}:${process.env.NEXT_PUBLIC_API_PORT}/search?q=${props.content}`, jsonGetFetcher);
    if(!data)
      return (<div>...</div>);
    else
      return (
        <div>
        {data.map((val, i) =>{
          return (<div key={val["title"]}>{val["title"]}</div>);
        })}
        </div>
      );
  }

function Item(props) {
    
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