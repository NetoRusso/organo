import './rodape.css'
import fbicon from './fb.png';
import igicon from './ig.png';
import twicon from './tw.png';
import logo from './logo.png';
import dtlogo from './dtlogo.svg';

const Rodape = () => {

    return (
        <footer className='footer'>
            <div className='agoraVai'>
                <section >
                    <ul className='redes'>
                        <li>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <img src={fbicon} alt='Icon do facebook' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/donuts.tech/' target='_blank'>
                                <img src={igicon} alt='icon do instagram' />
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/home' target='_blank'>
                                <img src={twicon} alt='icon do twitter' />
                            </a>
                        </li>
                    </ul>
                </section>
                <section className='logoOrgano'>
                    <img src={logo} alt='Logo do Organo' />
                </section>
            </div>
            <section className='deQuem'>
                <section className='devAbolt'>
                    <a href='https://www.instagram.com/donuts.tech/' target='_blank'>
                        <img src={dtlogo} alt='logo da Donuts Tech' />
                    </a>
                    <p>Desenvolvido por Donuts Tech</p>
                </section>
                <p>Desenvolvido em aula na Alura</p>
            </section>
        </footer>
    )
}

export default Rodape