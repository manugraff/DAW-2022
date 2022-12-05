import './style.css';
import imgFace from '../../assets/img/Facebook_Rounded_icon-icons.com_61578.png';
import imgTwitter from '../../assets/img/Twitter_Rounded_icon-icons.com_61577.png';
import imgInsta from '../../assets/img/instar.png';
import imgLinkedin from '../../assets/img/linkedin_icon-icons.com_65439.png';

export function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="footer-menu">
                    <div class="footer-company">
                        <h3>Simba's Pet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minus consequuntur nam saepe.
                            Quidem laborum iste dolores libero dignissimos. .</p>
                    </div>


                    <ul>
                        <p class="footer-menu-title">Nossa Empresa</p>
                        <li><a href="#">Produtos recomendados</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Missão e Visão</a></li>
                    </ul>
                </div>

                <div class="footer-menu">

                    <ul>
                        <p class="footer-menu-title">Informações para contato</p>
                        <li>+55 (46) 9 9999-9999</li>
                        <li>Centro, 500</li>
                        <li>Pato Branco - PR</li>
                    </ul>
                </div>

                <div class="footter-social">
                    <span class="Facebook">
                        <img src={imgFace} alt="">
                    </span>
                    <snap class="Twitter">
                        <img src={imgTwitter} alt="">
                    </snap>
                    <span class="Instagram">
                        <img src={imgInsta} alt="">
                    </span>
                    <span class="Linkedin">
                        <img src={imgLinkedin} alt="">
                    </span>
                </div>

            </div>
        </footer>
    )
}