import { Child } from './Child';

const Parent = () => {
  // return <Child color="red" onClick={() => { console.log('clicked')}} />
  return (
    <Child color="red" onClick={() => { console.log('clicked')}} >
      myprop
    </Child>
  )
};

export default Parent;