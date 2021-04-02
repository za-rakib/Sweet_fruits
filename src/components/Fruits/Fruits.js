import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Fruits.css'

const Fruits = ({fruit}) => {
    return (
        <div >
             <div className="col-md-3 card-div">
           
            {/* <img style={{height:'250px',width:'300px'}} src={event.imageUrl} alt=""/>
            <h3 style={{color:'Black'}} >{event.name} {event.price}</h3> */}
            <Card className="card" >
                <Card.Img style={{ height: '250px', width: '285px' }} variant="top" src={fruit.imageUrl} />
                <Card.Body>
                    <Card.Title ><h3  >{fruit.name} </h3></Card.Title>
                    <Card.Text style={{ fontSize: '30px', color:'#31339e'}}> ${fruit.price} &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;   <Button variant="success">Buy Now</Button> </Card.Text>
                </Card.Body>
            </Card>

        </div>
        </div>
    );
};

export default Fruits;