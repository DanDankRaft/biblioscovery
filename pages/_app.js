import '../styles/globals.css';
import '../styles/document-card.css';
import '../styles/search.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
