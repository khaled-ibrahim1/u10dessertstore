import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import styled from "styled-components";

const Button = styled.button`
  background-color: lightgrey;
  `
const Input = styled.input`
padding: 10px; 
margin-bottom: 20px;`

  const Container = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
  `


 

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
  
  
  
    const handleClick = (e)=>{
      e.preventDefault()
      login(dispatch, { username, password});
    }

    return(
        <Container>
            <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            />
            <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}/>
<Button onClick={handleClick}>Login</Button>
        </Container>
    );   
};
export default Login;