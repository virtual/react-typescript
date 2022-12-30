import ReactDOM from 'react-dom';
// import Parent from './props/Parent';
import GuestList from './state/GuestList';

const App = () => {
  return (
    <div>
      <h1>Partytime</h1>
      {/* <Parent /> */}
      <GuestList />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));