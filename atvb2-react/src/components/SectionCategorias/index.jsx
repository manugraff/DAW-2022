import './style.css';
import imgBrinquedos from '../../assets/img/brnqd.png';
import imgBanho from '../../assets/img/dogbannho.png';
import imgRacao from '../../assets/img/pote de racao.jpg';

export function SectionCategorias() {
    return(
        <section id="categorias">
        
        
            <h2>Categorias:</h2>
        
            <div className="categorias">
                <div className="categoria">
                    <img src={imgBrinquedos} className="brinquedos" alt="brinquedos"/>
                        <div className="categoria-content">
                            <h4>Brinquedos</h4>
                        </div>
                </div>
        
                <div className="categoria">
                    <img src={imgBanho} className="banho" alt="cachorro tomando banho"/>
                        <div className="categoria-content">
                            <h4>Higiene</h4>
                        </div>
                </div>
        
                <div className="categoria">
                    <img src={imgRacao} className="poter" alt="Rações"/>
                        <div className="categoria-content">
                            <h4>Ração</h4>
                        </div>
                </div>
            </div>
        
        </section>
    )
}