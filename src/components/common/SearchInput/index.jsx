import { useState, useEffect } from 'react'
import useGeolocation from 'react-hook-geolocation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

export default function SearchInput({ buttonLink }) {
  const router = useRouter()
  const geolocation = useGeolocation()
  const [value, setValue] = useState('')
  const [currentLatitude, setCurrentLatitude] = useState('')
  const [currentLongitude, setCurrentLongitude] = useState('')

  useEffect(() => {
    const currentLatitudeInStorage = localStorage.getItem('currentLatitude')
    if (!!currentLatitudeInStorage) {
      setCurrentLatitude(currentLatitudeInStorage)
    }
  }, [])

  useEffect(() => {
    const currentLongitudeInStorage = localStorage.getItem('currentLongitude')
    if (!!currentLongitudeInStorage) {
      setCurrentLongitude(currentLongitudeInStorage)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('currentLatitude', currentLatitude)
  }, [currentLatitude])

  useEffect(() => {
    window.localStorage.setItem('currentLongitude', currentLongitude)
  }, [currentLongitude])

  function handleOnClick() {
    setValue(
      `Latitude: ${geolocation.latitude}, Longitude: ${geolocation.longitude}`
    )

    setCurrentLatitude(`${geolocation.latitude}`)
    setCurrentLongitude(`${geolocation.longitude}`)
  }

  function handleOnSubmit() {
    if (currentLatitude !== '' && currentLongitude !== '') {
      router.push('/plans')
    }
  }

  return !geolocation.error ? (
    <S.Container>
      <S.Form>
        <form onSubmit={handleOnSubmit}>
          <input value={value} placeholder='Seu endereço...' />
          <button type='submit'>Enviar</button>
        </form>
      </S.Form>

      <S.Undertitle>
        <a onClick={handleOnClick}>Utilizar localização atual</a>
      </S.Undertitle>

      <Link href={buttonLink}>
        <a>
          <S.Botao>Voltar</S.Botao>
        </a>
      </Link>
    </S.Container>
  ) : (
    <S.Container>
      <S.Input>
        <input placeholder='Seu endereço' />
      </S.Input>

      <Link href={buttonLink}>
        <a>
          <S.Botao>Voltar</S.Botao>
        </a>
      </Link>
    </S.Container>
  )
}
