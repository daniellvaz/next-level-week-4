import { ChallengeProvider } from "../contexts/ChallengeContext";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
