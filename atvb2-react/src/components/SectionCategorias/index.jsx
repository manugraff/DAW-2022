import './style.css';
import imgBrinquedos from '../../assets/img/brnqd.png';
import imgBanho from '../../assets/img/dogbannho.png';
import imgRacao from '../../assets/img/pote de racao.jpg';
<section id="categorias">


    <h2>Categorias:</h2>

    <div class="categorias">
        <div class="categoria">
            <img src={imgBrinquedos} class="brinquedos" alt="brinquedos">
                <div class="categoria-content">
                    <h4>Brinquedos</h4>
                </div>
        </div>

        <div class="categoria">
            <img src={imgBanho} class="banho" alt="cachorro tomando banho">
                <div class="categoria-content">
                    <h4>Higiene</h4>
                </div>
        </div>

        <div class="categoria">
            <img src={imgRacao} class="poter" alt="Rações">
                <div class="categoria-content">
                    <h4>Ração</h4>
                </div>
        </div>
    </div>

</section>