import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;

  ul {
    list-style-type: none;
  }

  li {
    width: 500px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 30px;
  }

  li div {
    margin-bottom: 10px;
  }
`

export const List = styled.ul`
  list-style: none;

  .container-baixo {
    display: flex;
    justify-content: space-between;
  }
`

export const Titulo = styled.h1`
  font-size: 30px;
`

export const Undertitle = styled.div`
  margin-top: 10px;

  button {
    border: none;
    color: inherit;
    background: inherit;
  }

  a {
    color: black;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
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
