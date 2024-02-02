import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='Lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.obrigatorio} value={props.valor}>
                    <option value="" />
                {props.itens.map(item => {
                    return <option className='aqui' data={item} key={item} >{item}</option>
                })}
            </select>
        </div>
    );
}


export default ListaSuspensa