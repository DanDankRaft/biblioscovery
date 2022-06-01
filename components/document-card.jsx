import { useRouter } from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines} from '@fortawesome/free-regular-svg-icons';
import {faBan} from '@fortawesome/free-solid-svg-icons';

let accessTypes = {
  "text-not-available": <><span className='fa-layers'><FontAwesomeIcon icon={faFileLines} transform='shrink-6'/><FontAwesomeIcon icon={faBan} className='text-red-700'/></span>  text not available</>
}

export let testInfo = [
  {
    id: "0",
    name: "The Rise and Fall of the Third Reich",
    imageURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2Fl6azc6nnpe501.jpg%3Fauto%3Dwebp%26s%3D56347383125aca79950b609edbab861aaf607181&f=1&nofb=1",
    summary: "The famed foreign correspondent and historian William L. Shirer, who had watched and reported on the Nazis since 1925, spent five and a half years sifting through this massive documentation. The result is a monumental study that has been widely acclaimed as the definitive record of one of the most frightening chapters in the history of mankind.",
    tags: ["Politics", "Germany", "Holocaust", "Military History", "World War II"],
    subject: "History",
    url: "https://www.goodreads.com/book/show/767171.The_Rise_and_Fall_of_the_Third_Reich",
    authors: ["William L. Shirer", {type: "Editor", name: "Judith Butler"}],
    toc: null,
    type: "Book",
    sourceIco: "https://www.goodreads.com/favicon.ico",
    accessType: "text-not-available"
  },
  {
    id: "1",
    name: "The Rise and Fall of the Third Reich",
    imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1331223772i/767171.jpg",
    summary: "The famed foreign correspondent and historian William L. Shirer, who had watched and reported on the Nazis since 1925, spent five and a half years sifting through this massive documentation. The result is a monumental study that has been widely acclaimed as the definitive record of one of the most frightening chapters in the history of mankind.",
    tags: ["Politics", "Germany", "Holocaust", "Military History", "World War II"],
    subject: "History",
    url: "https://www.goodreads.com/book/show/767171.The_Rise_and_Fall_of_the_Third_Reich",
    authors: ["William L. Shirer", {type: "Editor", name: "Judith Butler"}],
    toc: null,
    type: "Book",
    sourceIco: "https://www.goodreads.com/favicon.ico",
    accessType: "text-not-available"
  }
  ];


function authorsToStringSummary(authors) {
  let output;
  if(authors[0].type)
    output = authors[0].name;
  else
    output = authors[0];
  if(authors.length > 1)
    output += ` +${authors.length - 1} more...`;
  return output;
}

function authorsToString(authors) {
  let output = "";
  authors.forEach((element, index) => {
    if(element.type)
    {
      output += `${element.type}: ${element.name}`;
    }
    else
    {
      output += `${element}`;
    }

    if(index != (authors.length - 1))
    {
      output += ", "
    }
  });
  return output;
}

function Tags(tags) {
  return (
    <>
      {tags.map((element, index) => (
        <div className='doc-tag' key={index}>{element}</div>
      ))}
    </>
  );
}

export default function Document(doc) {
  const router = useRouter();
  const onClick = (e) => {router.push(doc.url)};

  return (
    <div className='document-card'>
        <p className='url-bar' onClick={onClick}>{doc.url}</p>
        <div className='doc-inner-content'>
          <div className='doc-image-container'>
            <img className='doc-image' src={doc.imageURL}/>
          </div>
          <div className='doc-text-body'>
            <h1 className='doc-title'>
              {doc.name}
              {" "}
              <span className='doc-authors'>{authorsToStringSummary(doc.authors)}</span>
            </h1>
            <div className='doc-availability'>
              <img src={doc.sourceIco} className='doc-src-icon'/>
              {" "}
              {accessTypes[doc.accessType]}
            </div>
            <div className='doc-lables'>
              {`${doc.type} | ${doc.subject}: `}
              {Tags(doc.tags)}
            </div>
            <p className='doc-summary'>{doc.summary}</p>
          </div>
        </div>
    </div>
  );
}