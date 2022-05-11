import * as S from './styles'
import Link from 'next/link'

export default function Started({ buttonLink }) {
  return (
    <S.Container>
      <S.Titulo>Meu Plano</S.Titulo>

      <S.Paragrafo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        massa a lorem ornare suscipit et ut neque. Ut aliquet luctus elit sit
        amet sodales. Donec nec interdum tortor. Sed congue maximus placerat.
        Phasellus in ligula tristique, sagittis libero in, convallis risus.
        Phasellus quis ultrices magna, id ultricies turpis.
      </S.Paragrafo>

      <S.Botao>
        <Link href={buttonLink}>
          <a>
            <div style={{ color: '#FFF', textDecoration: 'none' }}>
              Procurar
            </div>
          </a>
        </Link>
      </S.Botao>
    </S.Container>
  )
}
