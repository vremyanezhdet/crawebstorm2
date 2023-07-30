import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <Menu>
            <ul>
                <li><a href="">Menu Item 1</a></li>
                <li><a href="">Menu Item 2</a></li>
                <li><a href="">Menu Item 3</a></li>
            </ul>    
        </Menu>
        <Box>
            <StyledBtn as={Link} href={"yandex.ru"}>LinkComponent</StyledBtn>
            <StyledBtn as="a" href={"yandex.ru"}>link</StyledBtn>
            <StyledBtn>Hello</StyledBtn>
            <SuperButton>Super Button</SuperButton>
        </Box>

    </div>
  );
}

export default App;

const StyledBtn = styled.button `
  border: none;
  background-color: chartreuse;
  padding: 10px 20px;
  color: aliceblue;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: #ff0044;
  }

  &:last-child {
    background-color: #0033ff;
  }
`

const Link = styled.a `
   color: #1577cc;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0 ;
`

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #af6565;
  color: bisque;
`


const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    cursor:pointer;
  }

${Link} {
  cursor: zoom-in;
}
`

const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    Li > a {
      color: green;
    }
    li + li {
      margin-left: 20px;
    }
  }


`