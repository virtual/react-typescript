import ReactDOM from 'react-dom';
import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      <Parent />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));