import ReactDOM from 'react-dom';
// import Parent from './props/Parent';
// import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      <h1>Partytime</h1>
      {/* <Parent /> */}
      {/* <UserSearch /> */}
      <EventComponent />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));