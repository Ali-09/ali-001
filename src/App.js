import Header from '@ly/Header'
import Main from '@ly/Main'
import State from '@ctx/State'

function App() {
  return (
    <State>
      <div className="main">
        <Header/>
        <Main/>
      </div>
    </State>
  );
}

export default App;
