import 'styles/globals.css'
import Header from '@ly/Header'
import State from '@ctx/State'
import Main from '@ly/Main'

function MyApp({ Component, pageProps }) {
  return (
      <State>
        <div className="main">
          <Header/>
          <Main>
            <Component {...pageProps} />
          </Main>
        </div>
      </State>
  )
}

export default MyApp
