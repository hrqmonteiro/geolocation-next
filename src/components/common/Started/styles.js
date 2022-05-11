import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const Titulo = styled.h1`
  font-size: 50px;
  margin-top: 40px;
`

export const Paragrafo = styled.p`
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
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
