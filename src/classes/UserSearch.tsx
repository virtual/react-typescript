import React, { Component } from 'react';

// simplify user type definitions by creating referencable interface
interface User {
    _id: string;
    name: string;
    age: number;
}

// receives an array of user objects
interface UserSearchProps {
    users: User[]
}

// 2. state can be set up as an interface
interface UserSearchState {
    name: string; // search string
    user: User | undefined;
}


class UserSearch extends Component<UserSearchProps> {
    // 1. state can be set directly in class
    // state = {
    //     name: '',
    //     user: undefined
    // }

    // 2. applying search interface
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    // Since this is a class component, we have to worry about the 
    // context of cb functions (what is this?)
    // onClick() {

    // To solve this context, we use an arrow function instead
    onClick = () => {
        // iterate over list of users and show found user
        const foundUser = this.props.users.find((user) => {
            // return user if true
            return user.name === this.state.name;
        });

        this.setState({ user: foundUser })
    }

    render() {
        // instead of typing out this.state.name & this.state.user, 
        // we can destructure off of state
        const { name, user } = this.state;

        return (
            <div>
                <h2>User Search</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <input 
                    placeholder="Search name" 
                    value={name}  
                    onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <button onClick={this.onClick}>Search</button>
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
}

export default UserSearch;