import { Badge } from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {Responsive} from "../Responsive";
import { useDispatch,useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import {logout} from "../redux/apiCalls";



const Container = styled.div`

  width: 100%;
  background-image: linear-gradient(to top, white , rgb(255, 240, 207));
  ${Responsive({  
})}

`;

const Wrapper = styled.div`
  width: 90%;
  padding: 1% 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Responsive({   width: "80%"
 })}

  
`;

const Left = styled.div`
width:10%;
  flex: 1;
  display: flex;
  align-items: center;
  ${Responsive({ padding: "0px 0px "
})}

`;

const SearchContainer = styled.div`

  ${Responsive({  
 height:"0px",   marginBottom:"95%"
  })}
`;

const Input = styled.input`
  ${Responsive({ width: "70px", })}
`;

const Center = styled.div`
  flex: 1;
  text-align: right;
  ${Responsive({ width: "100%"})}

`;

const Logo = styled.h1`
font-size: 25px;
width: 100%;
margin-bottom:175px;
  ${Responsive({ fontSize: "20px", marginLeft:"120px"

 })}
`;
const Right = styled.div`
width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Responsive({ flex: 4, justifyContent: "center", width: "10%"

 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20%;
  ${Responsive({ fontSize: "10px", marginRight: "30px", height:"90px", 
   width: "100%" })}
`;

const Button = styled.button`
padding: 6.5%;
width: 100%;
`
const Logout = styled.button`
margin: 9px;
${Responsive({ fontSize: "10px"
 })}
`


const Navbar = () => {
  const dispatch = useDispatch();
   const quantity = useSelector(state=>state.cart.quantity);
   console.log(quantity);
   const user = useSelector((state) => state.user.currentUser);
   
   const handleDelete = (user) => {
    logout(dispatch, user);
  };
  const [productId,setProductId] = useState("");
  const history = useHistory();
  const handleInput = event => {
    setProductId(event.target.value);
  };
  const handleClick = () => {
    history.push(`/product/${productId}`);
  };
  

  return (

    <Container>
          <Wrapper>
          <Left>
          <SearchContainer>
   <Input placeholder="productId"
            onChange={handleInput}
            />   <Button onClick={handleClick}>Search</Button>
</SearchContainer>


   
      </Left>
      
      <Center><Logo>Dessert store online</Logo>
      
      
      
     </Center>

      <Right> 
      <MenuItem> <Link to="/">Home</Link></MenuItem>
      <MenuItem> <Link to="/register">REGISTER</Link></MenuItem>
      { user ? user.username : (
     <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
      )}
      <Logout onClick={() => handleDelete()}>
            Log out
          </Logout>  
        <Link to="/cart">
        <MenuItem>
        
          <Badge badgeContent= {quantity} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </MenuItem>
        
        </Link>

        </Right>
        </Wrapper>
            </Container>
    )
}

export default Navbar