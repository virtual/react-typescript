// Track what user types
import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Guest list</h2>

      <form>
        {/* Track what user enters via state */}
        <input 
          placeholder="Guest name" 
          value={name}  
          onChange={(e) => setName(e.target.value)}
          />
        <button>Add Guest</button>
      </form>
    </div>
  )
};

export default GuestList;