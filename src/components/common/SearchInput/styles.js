import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
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

export const Titulo = styled.h1`
  margin-top: 100px;
`

export const Subtitulo = styled.h3`
  margin-top: 10px;
`

export const Undertitle = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

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

export const Form = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  align-items: center;
  margin-top: 100px;

  input {
    padding: 10px;
    margin-right: 10px;
    width: 400px;
  }

  button {
    border: none;
    font-size: 20px;
    padding: 8px;
    border-radius: 5px;
    background-color: black;
    color: #fff;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
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

export const SendButton = styled.button`
  border: none;
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
