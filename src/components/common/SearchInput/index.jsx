import { useState, useEffect } from 'react'
import useGeolocation from '../../functions/Geolocation'
import Link from 'next/link'
import * as S from './styles'

export default function SearchInput({ buttonLink }) {
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

  return !geolocation.error ? (
    <S.Container>
      <S.Form>
        <form>
          <input value={value} placeholder='Seu endereço...' />
          {value ? (
            <Link href='/plans'>
              <a>
                <button>Enviar</button>
              </a>
            </Link>
          ) : (
            <button disabled>Enviar</button>
          )}
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
      <S.Subtitulo>Por favor, permita o acesso à Geolocalização!</S.Subtitulo>
    </S.Container>
  )
}
