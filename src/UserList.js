import React, {useEffect, useState} from 'react';


function UserList(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(!res.ok){
                throw new Error("API Error!");
            }
            return res.json();
        })

        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false);
        })
    }, []);
    return(
        <ul>
            {users.map((user => (
                <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
                </li>
            )))}
        </ul>
    )
}

export default UserList;