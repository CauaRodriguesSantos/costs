import style from './Home.module.css'
import imagem from '../../assets/cofrinho-com-moedas-de-ouro-realistas.png'
import LinkButton from '../layout/LinkButton'

export default function Home(){
    return(

      <section className={style.homeContainer}>
        <h1> Bem-Vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos</p>
        <LinkButton text='Criar Projeto' to='/NewProject'/>
        <img src={imagem} alt="Costs" />
      </section>

    )
}