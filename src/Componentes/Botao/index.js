import './Botao.css';
import icon from './icon_card.svg';

const Botao = (props) => {

    return (
        <button className='botao'>
            {props.children}
            <img src={icon} alt='icon de card'/>
        </button>
    );
}

export default Botao