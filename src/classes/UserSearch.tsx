import React, { Component } from 'react';

// receives an array of user objects
interface UserSearchProps {
    users: {
        _id: string;
        name: string;
        age: number;
    }[]
}

// 2. state can be set up as an interface
interface UserSearchState {
    name: string; // search string
    user: { name: string; age: number } | undefined;
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

  render() {
    return (
      <div>
        UserSearch
      </div>
    )
  }
}

export default UserSearch;