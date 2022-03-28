import './banner.css'
import ImgPerfil from '../../assets/Foto_Perfil.jpg'


export default function Banner() {
    return (
        <section className="banner_container_home">

            <img src={ImgPerfil} className="perfil_image" alt="Foto de perfil" />

            <h1 className="banner_container_content_h1">Olá viajante</h1>

                    
                    <p className="banner_container_content"> 
                    Bem vindo a minha landing page, 
                    aqui vou contar um pouco de mim e da minha história como dev.
                    Espero que você curta esse passeio e até a próxima viagem</p>

                    <p className="banner_container_content">Minha jornada como dev teve início em 2019, quando eu entrei na faculdade, e desde lá venho trilhando este caminho.
                        Em 2021, após o ultimo semestre da faculdade,<br>
                        </br> consegui uma bolsa na Digital House e no segundo semestre comecei o curso de
                        Certified Tech Developer para me tornar um programador Fullstack.<br>
                        </br> Foi então que eu comecei a desenvolver projetos realmente
                        interessantes e aprendi muito, mesmo com pouco tempo de curso,<br></br> e aqui irei mostrar alguns deles para vocês, aproveitem.</p> 
        </section>

    )
}