import React, { useEffect, useState } from 'react';
import Fruits from '../Fruits/Fruits';

const Home = () => {
    const[fruits, setFruits] =  useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/fruits')
        .then(response => response.json())
        .then(result=>{
            setFruits(result);
        })
    })
    return (
        <div className='row'>
            {
                fruits.map( fruit=> <Fruits key={fruit._id} fruit={fruit}></Fruits>)
            }
        </div>
    );
};

export default Home;