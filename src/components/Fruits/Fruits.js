import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Fruits.css'
import { useHistory } from 'react-router';

const Fruits = ({fruit}) => {
    const history = useHistory()
    const handleBuy = (fruitType) => {
        history.push(`/checkOut/${fruitType}`);
    }
    return (
        <div className="col-md-3 " >
            <div className=" card-div">
                <Card className="card" >
                    <Card.Img className="card-img" variant="top" src={fruit.imageUrl} />
                    <Card.Body>
                        <Card.Title ><h3  >{fruit.name} </h3></Card.Title>
                        <Card.Text className="card-text"> ${fruit.price} &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button onClick={() => handleBuy(fruit.fruitType)} variant="success">Buy Now</Button> </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Fruits;