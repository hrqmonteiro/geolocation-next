import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: left;

  a {
    color: red;
    font-weight: bold;
  }
`

export const BotaoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: start;
`

export const Botao = styled.button`
  border: none;
  margin-top: 30px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: black;
  color: #fff;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
