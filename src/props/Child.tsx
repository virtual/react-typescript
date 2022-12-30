// When receiving props the child component should
// have an interface to define which props the child
// should receive
interface ChildProps {
  color: string;
  
  // Define a fx but don't expect a return value
  onClick: () => void; 

  // Required in React 18, note below
  children?: React.ReactNode;
}

// There are 3-4 ways to implement props into the component

// 0. Default (no props)
// export const Child = () => {
//   return <div>Hey there</div>
// };


// 1a. Pass props arg, but this might pull more than we need
// Typescript doesn't know we are defining a React component
// React component default props (displayName) are invalid
// export const Child = (props: ChildProps) => {
//   return <div>Hey there</div>
// };

// 1b. Pass props, but destructure props so we only pass
// the props we want
export const ChildAsProps = ({ color, onClick }: ChildProps) => {
  return (
    <div>Hey there, {color}
    <button onClick={onClick}>Click</button>
  </div>
  );
};


// 2. Tells Typescript this is a React Component
export const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>Hey there, {color}!
    <button onClick={onClick}>Click</button>
  </div>
  );
};

// Allows you to access default properties with autocomplete
// eg Child.displayName
// Also can receive a children prop <Child>prop</Child> (React 17)

/*
React 18 introduces a breaking change with the removal 
of implicit children in React.FunctionComponent types.

To fix this, we now must include the children in the 
interface along with our other props:

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}
*/