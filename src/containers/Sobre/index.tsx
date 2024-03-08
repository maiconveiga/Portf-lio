import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <>
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Oi, pessoal! Aqui é o Maicon Veiga, só mais um amante da computação
        tentando fazer o meu caminho. Sou formado em ciência da computação, fiz
        uma pós em gestão de projetos e estou no finzinho de outra em engenharia
        de software. No mundo do desenvolvimento, tento me virar entre frontend
        e backend usando JavaScript e Python. Docker, Kubernetes, VUE, React da
        Vite e o React raiz são coisas que mexo de vez em quando. E, olha, tento
        dar o meu melhor, mesmo que ainda tenha muito a aprender. Se quiser
        trocar uma ideia ou conectar no LinkedIn, tô lá:
        linkedin.com/in/maiconveiga. Quem sabe a gente não aprende alguma coisa
        junto, né? Valeu, galera, e bora programar! 🚀😊
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=maiconveiga&show_icons=true&theme=dracula&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=maiconveiga&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  </>
)

export default Sobre
