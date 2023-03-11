import ReactDOM from 'react-dom';
// import Parent from './props/Parent';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <h1>Partytime</h1>
      {/* <Parent /> */}
      <UserSearch />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));