import { useState, useEffect } from 'react'
import Link from 'next/link'
import * as S from './styles'

export default function Map() {
  const [currentLatitude, setCurrentLatitude] = useState('')
  const [currentLongitude, setCurrentLongitude] = useState('')

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

  const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.8896723778157!2d${currentLatitude}!3d${currentLongitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc53dbe60e1b2f%3A0x4d984c0ef5136978!2sCondom%C3%ADnio%20Parque%20Rio%20Salso!5e0!3m2!1spt-BR!2sbr!4v1652313740680!5m2!1spt-BR!2sbr`

  return (
    <S.Container>
      <iframe
        src={url}
        width='600'
        height='450'
        style={{ border: 0 }}
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      />

      <S.BotaoContainer>
        <Link href='/plans'>
          <S.Botao>Voltar</S.Botao>
        </Link>
      </S.BotaoContainer>
    </S.Container>
  )
}
