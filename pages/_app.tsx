import 'styles/globals.css'
import State from '@ctx/State'
import { CoreTemplate } from 'components'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <State>
        <CoreTemplate>
          <Component {...pageProps} />
        </CoreTemplate>
      </State>
  )
}

export default MyApp
