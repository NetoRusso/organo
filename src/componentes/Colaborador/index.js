import {IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty} from "react-icons/io"
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    function deletar() {
        aoDeletar(colaborador.id)
    }

     

    return (<div className="colaborador">
        <IoIosCloseCircle 
            size={32} 
            className='deletar' 
            onClick={deletar} 
        />

        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                    ? <IoIosHeart {...propsfavorito} color='#ff0000'/> 
                    : <IoIosHeartEmpty {...propsfavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador