import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const CheckOut = () => {
    
     //const[fruits, setFruits] =  useState([])
     const[allFruits, setAllFruits]= useState([])
     useEffect(()=>{
        fetch('https://stark-castle-51698.herokuapp.com/fruits')
        .then(response => response.json())
        .then(result=>{
            setAllFruits(result);
        })
    },[])
    console.log("all fruits",allFruits);
    // let total = 0;
    // for(let i = 0; i< fruits.length; i++){
    //     const fruit = fruits[i];
    //     total = total + fruit.price * fruit.quantity;
    // }
    return (
        <div>
            <h1>Check Out</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allFruits.map(fruit =>{
                            const {name, price, quantity} = fruit; 
                            return(
                                <tr>
                                <td>{name}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                            </tr>
                            )
                         })
                    }
                
                </tbody>
            </Table>
            <Button variant="success">Check Out</Button>
        </div>
    );
};

export default CheckOut;