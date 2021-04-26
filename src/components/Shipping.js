import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Col, Button } from "react-bootstrap";
import '../App.css'

function Shipping(props) {
    const { cartItems, setCount } = props;
    const [address, setAddress] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");
    const [error, setError] = useState(null)
    let history = useHistory();
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const text = /^[a-zA-Z]+$/;


    const validation = () => {

        if (name.length < 5 || name === "") {
            setError("Please enter the valid Name");
            return false;
        }
        if (email === "") {
            setError("Please provide your Email_Id.");
            return false;
        }
        if (!email.match(pattern)) {
            setError("Please provide a valid Email_Id.");
            return false;
        }
        if (address1 === "") {
            setError("Please provide your Address 1.");
            return false;
        }
        if (address2 === "") {
            setError("Please provide your Address 2.");
            return false;
        }
        if (city === "") {
            setError("Please enter your City.");
            return false;
        }
        if (!city.match(text)) {
            setError("For City only text is allowed.");
            return false;
        }
        if (state === "") {
            setError("Please choose your State.");
            return false;
        }
        if (isNaN(pin) || pin.length !== 6) {
            setError("Please provide the Pin-Code in given format.");
            return false;
        }
        else {
            return true;
        }
    }


    const handleSubmit = () => {

        if (name !== "" && email !== "" && address1 !== "" && city !== "" && state !== "" && pin !== "") {

            setAddress([...address, { name, email, address1, address2, city, state, pin }]);

            cartItems.splice(0, cartItems.length);
            setCount(cartItems.length);

            localStorage.removeItem('cartItems');
            
            return history.push('/order');
        }
        else {
            validation();
        }
    }

    return (
        <div className="shipping">
            <div className="back">
                <Link to="/buynow"><button>Back</button></Link>
            </div>
            <h1>Shipping Address</h1><br />
            {error && <div className="errordiv">{error}</div>}<br />
            <div className="ship">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="lable" >FullName</Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="lable">Email_Id</Form.Label>
                            <Form.Control type="email" placeholder="Email_Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label className="lable">Address 1</Form.Label>

                        <Form.Control placeholder="1234 Main St" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label className="lable">Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label className="lable">City</Form.Label>
                            <Form.Control value={city} onChange={(e) => setCity(e.target.value)} required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label className="lable">State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setState(e.target.value)} required>
                                <option>Choose...</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Gujrat">Gujrat</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Goa">Goa</option>
                                <option value="Assam">Assam</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Jammu-Kashmir">Jammu-Kashmir</option>
                                <option value="Rajsthan">Rajsthan</option>
                                <option value="Chennai">Chennai</option>

                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label className="lable">Pin-Code</Form.Label>
                            <Form.Control placeholder="e.g:- 141015" value={pin} onChange={(e) => setPin(e.target.value)} required />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Place-Order
            </Button>
                </Form>
            </div>
        </div>
    );

}

export default Shipping