import './style.css';
import imgBanner from '../../assets/img/brinquedos_variados.jpg';

export function SectionBanner() {
    return(
        <section id="banner">
            <h2>Aqui você encontra tudo que seu bichinho precisa</h2>
            <div className="banner">
                <img src={imgBanner} alt="Banner"/>
            </div>
        </section>
    )
}