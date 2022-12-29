// When receiving props the child component should
// have an interface to define which props the child
// should receive
interface ChildProps {
  color: string;
}

// There are 3-4 ways to implement props into the component

// 0. Default (no props)
// export const Child = () => {
//   return <div>Hey there</div>
// };


// 1. Pass props arg, but this might pull more than we need
// Typescript doesn't know we are defining a React component
// React component default props (displayName) are invalid
// export const Child = (props: ChildProps) => {
//   return <div>Hey there</div>
// };


// 1. Pass props, but destructure props so we only pass
// the props we want
export const ChildAsProps = ({ color }: ChildProps) => {
  return <div>Hey there, {color}</div>
};

// 2. Tells Typescript this is a React Component
export const Child: React.FC<ChildProps> = ({ color }) => {
  return <div>Hey there, {color}!</div>
};