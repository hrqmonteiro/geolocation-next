import React, { useState, useEffect } from 'react'
import dummyPlans from './plans.json'
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

  function calculatePrice(price, kmpoint, kmlat) {
    return price + (kmpoint - kmlat)
  }

  function calculateDistance(kmpoint, kmlat) {
    return kmlat - kmpoint
  }

  function calculatePlanOne() {
    const firstFeature = calculatePrice(
      dummyPlans.list[0].price,
      dummyPlans.list[0].coords.lat,
      currentLatitude
    ).toFixed(2)

    const secondFeature = calculatePrice(
      dummyPlans.list[5].price,
      dummyPlans.list[5].coords.lat,
      currentLatitude
    ).toFixed(2)

    const thirdFeature = calculatePrice(
      dummyPlans.list[2].price,
      dummyPlans.list[2].coords.lat,
      currentLatitude
    ).toFixed(2)

    const fourthFeature = calculatePrice(
      dummyPlans.list[6].price,
      dummyPlans.list[6].coords.lat,
      currentLatitude
    ).toFixed(2)

    const result = parseFloat(
      firstFeature + secondFeature + thirdFeature + fourthFeature
    )

    return result.toFixed(2)
  }

  function calculatePlanTwo() {
    const firstFeature = calculatePrice(
      dummyPlans.list[1].price,
      dummyPlans.list[1].coords.lat,
      currentLatitude
    ).toFixed(2)

    const secondFeature = calculatePrice(
      dummyPlans.list[3].price,
      dummyPlans.list[3].coords.lat,
      currentLatitude
    ).toFixed(2)

    const thirdFeature = calculatePrice(
      dummyPlans.list[6].price,
      dummyPlans.list[6].coords.lat,
      currentLatitude
    ).toFixed(2)

    const result = parseFloat(firstFeature + secondFeature + thirdFeature)

    return result.toFixed(2)
  }

  return (
    <>
      <S.Container>
        <S.Titulo>Planos encontrados:</S.Titulo>
        <ul>
          <li>
            <div>Pacote: 1</div>
            <div>TV1, Internet 2, Telefone Fixo 1, Adicional 1</div>
            <div>
              <div>R${calculatePlanOne()}</div>
              <div>{`${calculateDistance(
                dummyPlans.list[0].coords.lat,
                currentLatitude
              ).toFixed(2)}KM`}</div>
            </div>
          </li>
          <li>
            <div>Pacote: 2</div>
            <div>TV2, Telefone Fixo 2, Adicional 1</div>
            <div>
              <div>R${calculatePlanTwo()}</div>
              <div>{`${calculateDistance(
                dummyPlans.list[1].coords.lat,
                currentLatitude
              ).toFixed(2)}KM`}</div>
            </div>
          </li>
        </ul>

        <Link href='/search'>
          <S.Botao>Voltar</S.Botao>
        </Link>
      </S.Container>
    </>
  )
}
