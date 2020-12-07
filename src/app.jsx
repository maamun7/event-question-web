import React from 'react';
import image from '../public/assets/images/test.jpg';
import './app.css';

const App = () => {
    const title = 'React';
    return (
        <div>
            <h1>This is First {title} Component QQQ !</h1>
            <img src={image} alt="Nothing" />
        </div>
    );
};

export default App;
