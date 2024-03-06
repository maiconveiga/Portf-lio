import styled from 'styled-components'

type botaoProps = {
  ativo: boolean
  font?: string
}

const Botao = styled.button<botaoProps>`
  background-color: ${(props) => (props.ativo ? 'green' : 'red')};
  font-size: ${(props) => props.font || '45px'};
`

const BotaoAzul = styled(Botao)`
  background-color: blue;
  color: #fff;
`
function Teste() {
  return (
    <div>
      <h1>Olá mundo</h1>
      <Botao font="30px" ativo>
        Ativar
      </Botao>
      <Botao ativo={false}>Cancelar</Botao>
      <BotaoAzul ativo>Azuuuul</BotaoAzul>
    </div>
  )
}

export default Teste
