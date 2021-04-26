import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useHistory,Link } from "react-router-dom";
import MoodBadSharpIcon from '@material-ui/icons/MoodBadSharp';
import "../App.css";


function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [error,setError]=useState(null);
  let history = useHistory();
  
  

function handleLogin(e) {
  e.preventDefault();
  if(email=="jyoti123@gmail.com" && password=="jyoti@123" && email!=="" && password!==""){
    setError(null);
    setData([...data, { email, password }]);
    localStorage.setItem("token",JSON.stringify(true))
    return history.push('/buynow');
  }
  else{
    setError("Incorrect Email or Password")
  }
}  
     
  return (
    <>
    <div className="back">
        <Link to="/usercart"><button>Back</button></Link>
      </div>
    <div id="login">
    <h1>Please Login</h1>
      <div className="Login">
        <Form onSubmit={handleLogin}>
          <Form.Group size="lg" controlId="email">
            <Form.Label className="lable">Email</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label className="lable">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <br />
          {error && <div className="error">****{error}<span><MoodBadSharpIcon/></span></div>}
          <div id="loginBtn">
            <Button variant="primary" type="submit">
                Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
}
export default Login;