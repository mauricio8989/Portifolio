import { Container, Section } from "./style"
import { Header } from "../../components/Header"
import { Project } from "../../components/Project"
import { DiBootstrap, DiCss3, DiHtml5, DiReact, DiSqllite, DiGithubBadge } from "react-icons/di";
import { BiLogoJavascript, BiLogoNodejs, BiLogoTypescript, BiLogoLinkedinSquare, BiLogoWhatsapp } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import imgBro from "/src/assets/bro.svg"

export const projects = [
  {
    id: 1,
    imgUrl: "https://i.ibb.co/whx2m8s/Captura-de-tela-2024-02-10-100347.png",
    date: "Jul - Dec 2022",
    icons: <><DiReact /> <BiLogoNodejs /> <SiSqlite /></>,
    title: "Rocket notes",
    description: "Sistema de criação de notas para lembretes",
    deploy: 'https://notes-rocket.netlify.app/',
    github: 'https://github.com/Mauriciosouza8989/frontNotes'
  },
  {
    id: 22,
    imgUrl: "https://i.ibb.co/mHXC994/timer.png",
    date: "Jul - Dec 2022",
    icons: <><DiHtml5 /><DiCss3 /><BiLogoJavascript /></>,
    title: "Timer Pomodoro",
    description: "Timer para ajudar com pausas durante os estudos",
    deploy: 'https://focus-timer-dark-mode.netlify.app/',
    github: 'https://github.com/Mauriciosouza8989/frontNotes'
  },
  {
    id: 14,
    imgUrl: "https://i.ibb.co/pLbY7j8/Captura-de-tela-2024-02-10-094957.png",
    date: "Jul - Dec 2022",
    icons: <><DiHtml5 /><DiCss3 /><BiLogoJavascript /><FaBootstrap /></>,
    title: "Cine EBAC",
    description: "Site ficticio de um cinema para visualização do catálogo",
    deploy: 'https://cine-ebac.vercel.app/',
    github: 'https://github.com/Mauriciosouza8989/cine-ebac'
  }
]

export  function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <div>
          <h2>Olá, eu sou Maurício</h2>
          <h3>Desenvolvedor <span>Full-stack-Python</span> e intusiasta de inovação</h3>
          <p>
            Atualmente estou cursando o programa Full Stack Python na EBAC – Escola Britânica de Artes Criativas e Tecnologia, com previsão de término em 10/2024. Sou um profissional com um perfil voltado para resolução de problemas, demonstrando um espírito colaborativo e adaptabilidade em ambientes dinâmicos. Além disso, trago uma abordagem educada e respeitosa no trabalho, acreditando firmemente na importância de tratar todos com consideração e profissionalismo.
          </p>
        </div>
        <img className="floating headerImage" src={imgBro} />
        <img className="arrow" src="https://i.ibb.co/H24QqBD/Graphic-2.png" alt="" />
      </Section>
      <Section id="about" className="even">
        <img src="https://i.ibb.co/w4DSjsm/IMG-0650-removebg-preview.jpg" />
        <div className="about">
          <div className="float-techs">
            <DiHtml5 />
            <DiCss3 />
            <BiLogoJavascript />
            <BiLogoTypescript />
            <DiReact />
            <DiBootstrap />
            <BiLogoNodejs />
            <DiSqllite />
          </div>
          <span>About me</span>
          <h3>
            Eu sou um desenvolvedor apaixonado em busca de minha primeira oportunidade
          </h3>
          <p>
            Além da programação, sou um entusiasta do café, gosto de cachorro. Atualmente, estou buscando oportunidades para trazer minhas habilidades e entusiasmo para uma empresa de tecnologia, e estou entusiasmado com a perspectiva de enfrentar novos desafios.
          </p>
        </div>
      </Section>
      <Section id="projects" className="projects">
        <span>Projetos</span>
        <h3>Dê uma olhada nos meus projetos em destaque</h3>
        <div className="project-list">
          <img className="graphic-top" src="https://i.ibb.co/HG9jzLZ/Graphic.png" />
          {projects.map((project) =>{
            return(
                <div key={project.id} className="project">
                  <Project
                    imgUrl={project.imgUrl}
                    date={project.date}
                    icons={project.icons}
                    title={project.title}
                    description={project.description}
                    urlDeploy={project.deploy}
                    urlGithub={project.github}
                  />
                </div>
            )
          })}
          <img className="graphic-bottom" src="https://i.ibb.co/0Dn4sGv/Graphic-1.png" />
        </div>
      </Section>
      <Section id="contact" className="contact even">
        <img src="https://i.ibb.co/w4DSjsm/IMG-0650-removebg-preview.jpg" />
        <div>
          <span>Contact</span>
          <h3>Gostou do meu trabalho? Vamos trabalhar juntos</h3>
          <p>
          Estou sempre pronto para bater um papo. Envie-me um e-mail para <a href="#">mauriciosousa7989@gmail.com</a> ou ligue para mim nas redes sociais.
          </p>
          <div className="socials">
            <a target="blank" href="https://github.com/Mauriciosouza8989"><DiGithubBadge /></a>
            <a target="blank" href="https://www.linkedin.com/in/mauricio-dos-santos-sousa-38638417b/"><BiLogoLinkedinSquare /></a>
            <a target="blank" href="https://wa.me/5516992317327"><BiLogoWhatsapp /></a>
          </div>
        </div>
      </Section>
    </Container>
  )
}
