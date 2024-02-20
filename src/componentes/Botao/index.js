import './botao.css'
import iconBotao from './icon_card.svg'

const Botao = ({texto}) => {
    return <button className="botao">
        {texto}
        <img className='iconBotao' src={iconBotao} alt='icon de card' />
    </button>
}

export default Botao