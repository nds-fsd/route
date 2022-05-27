import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const params = useParams();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Users {params.name}</h1>
            <button onClick={handleClick}>go back</button>
            <Outlet />
        </div>
    );
};

export default User;