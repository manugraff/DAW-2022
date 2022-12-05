import './style.css';
import imgBrinq1 from '../../assets/img/pelucia dog.jpg';
import imgBrinq2 from '../../assets/img/goldenbolinha.png';
import imgBrinq3 from '../../assets/img/mordedor2.png';
import imgBrinq4 from '../../assets/img/racao.jpg';
import imgBrinq5 from '../../assets/img/petisco.png';
import imgBrinq6 from '../../assets/img/kit.jpg';

<section id="products">
    <h2>Produtos recomendados:</h2>

    <div class="products-content">

        <div class="product">
            <img src={imgBrinq1} class="brinquedo1" alt="brinquedo1">
                <div class="product-content">
                    <h4>Pelucia doguinho</h4>
                    <p>Cachorrinho de pelucia - brinquedo interativo</p>
                    <div class="product-price">
                        <p>R$ 25,00</p>
                    </div>
                </div>
        </div>

        <div class="product">
            <img src={imgBrinq2} class="brinquedo2" alt="brinquedo 2">
                <div class="product-content">
                    <h4>Mordedor/Cabo de guerra</h4>
                    <p>Corda para seu bichinho puxar e morder.</p>
                    <div class="product-price">
                        <p>R$ 25,00</p>
                    </div>
                </div>
        </div>

        <div class="product">
            <img src={imgBrinq3} class="brinquedo3" alt="brinquedo 3">
                <div class="product-content">
                    <h4>Bolinha de pestico</h4>
                    <p>Bolinha com espaço para pestiscos</p>
                    <div class="product-price">
                        <p>R$ 25,00</p>
                    </div>
                </div>
        </div>

        <div class="product">
            <img src={imgBrinq4} class="racao" alt="pote de ração">
                <div class="product-content">
                    <h4>Pote de ração</h4>
                    <p>Pote/ tigela para servir a ração</p>
                    <div class="product-price">
                        <p>R$ 25,00</p>
                    </div>
                </div>
        </div>
        <div class="product">
            <img src={imgBrinq5} class="petisco" alt="pote de ração">
                <div class="product-content">
                    <h4>Pote de ração</h4>
                    <p>Pote/ tigela para servir a ração</p>
                    <div class="product-price">
                        <p>R$ 25,00</p>
                    </div>
                </div>
        </div>

        <div class="product">
            <img src={imgBrinq6} class="kit" alt="kit completo">
                <div class="product-content">
                    <h4>kit completo com itens para seu cãozinho</h4>
                    <p>Coleira + petisco + pote de ração</p>
                    <div class="product-price">
                        <p>R$ 25,00</p>
                    </div>
                </div>
        </div>
    </div>
</section>