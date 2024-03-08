import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

export const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VUE</Paragrafo>
    <LinkBotao>Visualizar </LinkBotao>
  </Card>
)
