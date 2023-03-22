import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <nav>
                <Link to="/category">cat</Link>
                <Link to="/all">ALL</Link>
            </nav>
        </div>
    );
};

export default Home;