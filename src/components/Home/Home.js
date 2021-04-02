import React, { useEffect, useState } from 'react';
import CheckOut from '../CheckOut/CheckOut';
import Fruits from '../Fruits/Fruits';

const Home = () => {
    const[fruits, setFruits] =  useState([])
    useEffect(()=>{
        fetch('https://stark-castle-51698.herokuapp.com/fruits')
        .then(response => response.json())
        .then(result=>{
            setFruits(result);
        })
    },[])
    // const togglerSpinner = (show) =>{
    //     const spinner = document.getElementById('loading-spinner');
    //    if(show){
    //     spinner.classList.remove('d-none');
    //    }
    //    else{
    //     spinner.classList.add('d-none');
    //    }
    //   }
      
    return (
        <div className='row'>
            {/* <div class="d-flex justify-content-center ">
                <div id="loading-spinner" class="spinner-border text-success  d-none" role="status">
                    <span class="visually-hidden"></span>
                </div>
                togglerSpinner(false)
            </div> */}
            {
                fruits.map( fruit=> <Fruits key={fruit._id} fruit={fruit}></Fruits>)
                
            }
           
        </div>
    );
};

export default Home;