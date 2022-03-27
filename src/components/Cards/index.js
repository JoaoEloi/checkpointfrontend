import './cards.css'
import { Button } from 'reactstrap';
import Link from "@material-ui/core/Link";
export function Cards() {

    return (
        <div className="body_container_cards">

                <div className="banner_perfil">
                    <h1>Perfil</h1>
                    <p>descrição</p>
                    
                    <Link href="https://github.com/JoaoEloi">
                        <Button  color="dark" className="footer_buton_item">Github</Button>
                    </Link>
                </div>

                <div className="card_home_item">
                    <h1>Titulo</h1>
                    <p>descrição</p>

                    <Link href="https://github.com/JoaoEloi">
                        <Button  color="dark" className="footer_buton_item">Github</Button>
                    </Link>
                </div>

                <div className="card_home_item">
                    <h1>Titulo</h1>
                    <p>descrição</p>

                    <Link href="https://github.com/JoaoEloi">
                        <Button  color="dark" className="footer_buton_item">Github</Button>
                    </Link>
                </div>

                <div className="card_home_item">
                    <h1>Titulo</h1>
                    <p>descrição</p>

                    <Link href="https://github.com/JoaoEloi">
                        <Button  color="dark" className="footer_buton_item">Github</Button>
                    </Link>
                </div>
        </div>
    )
}