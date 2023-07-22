import 'styles/globals.css'
import State from '@ctx/State'
import { CoreTemplate } from 'components'

function MyApp({ Component, pageProps }) {
  return (
      <State>
        <CoreTemplate>
          <Component {...pageProps} />
        </CoreTemplate>
      </State>
  )
}

export default MyApp
