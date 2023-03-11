// Track what user types
import { useState } from 'react';

const GuestList: React.FC = () => {
  // type inference is string
  const [name, setName] = useState('');

  // type inferences is never ([])
  // TS makes it forever-empty
  // <> adds a way to tell TS type
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    // take current value of name and add to guests
    setGuests([...guests, name]);
    // take all strings out of guests array and add it to a new array
    // empty after clicking add
  };

  return (
    <div>
      <h2>Guest list</h2>

      <ul>
        {guests.map(guest => <li key={guest}>{guest}</li>)}
      </ul>
      <form onSubmit={e => e.preventDefault()}>
        {/* Track what user enters via state */}
        <input 
          placeholder="Guest name" 
          value={name}  
          onChange={(e) => setName(e.target.value)}
          />
        <button onClick={onClick}>Add Guest</button>
      </form>
    </div>
  )
};

export default GuestList;