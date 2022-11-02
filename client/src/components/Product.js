  import { Link } from "react-router-dom";
  import styled from "styled-components";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0,);
    position: relative;
    &:hover ${Info}{
      opacity: 0.4;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Link to={`/product/${item._id}`}>

        <Info>

        </Info>
        </Link>
      </Container>
    );
  };
  
  export default Product;