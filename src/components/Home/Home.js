import React, { useEffect, useState } from 'react';
import Fruits from '../Fruits/Fruits';


// const events=[
//     {
//         name:'Child Support',
//         image:'childSupport.png'
//     },
//     {
//         name:'Animal Shelter',
//         image:'animalShelter.png'
//     },
//     {
//         name:'Baby Sit',
//         image:'babySit.png'
//     },
//     {
//         name:'Child Support',
//         image:'childSupport.png'
//     },
//     {
//         name:'Child Support',
//         image:'childSupport.png'
//     },
//     {
//         name:'Child Support',
//         image:'childSupport.png'
//     },
//     {
//         name:'Child Support',
//         image:'childSupport.png'
//     },
//     {
//         name:'Child Support',
//         image:'childSupport.png'
//     }
// ]
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
                fruits.map( fruit=> <Fruits fruit={fruit}></Fruits>)
            }
        </div>
    );
};

export default Home;