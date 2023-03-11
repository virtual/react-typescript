import { useState } from 'react';

const users = 
[
    {
      "_id": "640d083053cf7af1a7a52a8e",
      "age": 26,
      "name": "Bender Lott"
    },
    {
      "_id": "640d08307a2f272274e576a6",
      "age": 34,
      "name": "Barnett Patton"
    },
    {
      "_id": "640d083083950a0020ce4079",
      "age": 35,
      "name": "Williams Bowen"
    },
    {
      "_id": "640d0830ad4b06e5d2e0f8dc",
      "age": 30,
      "name": "Strickland Gross"
    },
    {
      "_id": "640d0830ecc91a3bb0bf0ec8",
      "age": 27,
      "name": "Duran Trujillo"
    },
    {
      "_id": "640d0830a55dcc73f094c064",
      "age": 36,
      "name": "Chambers Edwards"
    }
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    // Save found user to state to output data
    // Types: undefined or and object
    const [user, setUser] = useState<undefined | { _id: string, age:  number, name: string}>();



    const onClick = () => {
        // iterate over list of users and show found user
        const foundUser = users.find((user) => {
            // return user if true
            return user.name === name;
        });

        setUser(foundUser)
    };

    return (
        <div>
            <h2>User Search</h2>
            <form onSubmit={e => e.preventDefault()}>
                <input 
                placeholder="Search name" 
                value={name}  
                onChange={(e) => setName(e.target.value)}
                />
                <button onClick={onClick}>Search</button>
            </form>

            <hr/>
            {/* Need to check if user is defined */}
            <div>
                <dl>
                    <dt>Name</dt><dd>{user && user.name}</dd>
                    <dt>Age</dt><dd>{user && user.age}</dd>
                </dl>
                
            </div>
        </div>
    )
}

export default UserSearch;