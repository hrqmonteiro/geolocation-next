import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as S from './styles'

export default function PlansList() {
  const [currentLatitude, setCurrentLatitude] = useState('')
  const [currentLongitude, setCurrentLongitude] = useState('')
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const localLatitude = JSON.parse(localStorage.getItem('currentLatitude'))
    const localLongitude = JSON.parse(localStorage.getItem('currentLongitude'))

    if (localLatitude) {
      setCurrentLatitude(String(localLatitude))
    }

    if (localLongitude) {
      setCurrentLongitude(String(localLongitude))
    }

    console.log(localLatitude)
    console.log(localLongitude)
  }, [])

  function logThings() {
    console.log(currentLatitude)
    console.log(currentLongitude)
  }

  logThings()

  async function getPlans() {
    try {
      const response = await fetch(
        `https://octupus-challenge.vercel.app/api/options/?lat=${currentLatitude}&lon=${currentLongitude}`
      )
      setPlans(response.json())
      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  getPlans()

  return (
    <>
      <S.Container>
        <S.Titulo>Planos encontrados:</S.Titulo>

        <ul>
          {plans.length ? (
            plans.map((p, index) => (
              <li key={index}>
                <div>Pacote </div>
                <div>Serviço 1, Serviço 2, Serviço 3</div>
                <div>
                  <div>R$ </div>
                  <div>Distância</div>
                </div>
              </li>
            ))
          ) : (
            <li>
              <div>Pacote Não Encontrado</div>
              <div>Serviços não encontrado</div>
              <div>
                <div>R$0,00 </div>
                <div>Distância Não encontrada</div>
              </div>
            </li>
          )}
        </ul>

        <Link href='/search'>
          <S.Botao>Voltar</S.Botao>
        </Link>
      </S.Container>
    </>
  )
}
