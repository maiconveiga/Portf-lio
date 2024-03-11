import Titulo from '../../components/Titulo'
import { Avatar } from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Maicon Veiga</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        maiconveiga
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro de software
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
