import React from 'react';
import UserCard from './UserCard';

class Users extends React.Component{

    render(){
        return this.props.myUsers.map((user)=>{
            return <UserCard key={user._id} user={user}></UserCard>
        });
    }
}
export default Users;