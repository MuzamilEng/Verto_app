import { AppProvider } from '../api/AppContext'
import "../../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
