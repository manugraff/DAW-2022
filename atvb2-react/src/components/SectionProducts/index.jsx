import './style.css';

const Produtos = [
    {
        foto: '/src/assets/img/pelucia dog.jpg',
        nome: 'Pelucia doguinho',
        descricao: 'Cachorrinho de pelucia - brinquedo interativo',
        preco: 'R$ 25,00',
        brinquedo: 'brinquedo1'
    },
    {
        foto: '/src/assets/img/goldenbolinha.png',
        nome: 'Mordedor/Cabo de guerra',
        descricao: 'Corda para seu bichinho puxar e morder.',
        preco: 'R$ 25,00',
        brinquedo: 'brinquedo2'
    }, {
        foto: '/src/assets/img/mordedor2.png',
        nome: 'Bolinha de pestico',
        descricao: 'Bolinha com espaço para pestiscos',
        preco: 'R$ 25,00',
        brinquedo: 'brinquedo3'
    }, {
        foto: '/src/assets/img/racao.jpg',
        nome: 'Pote de ração',
        descricao: 'Pote/ tigela para servir a ração',
        preco: 'R$ 25,00',
        brinquedo: 'brinquedo4'
    }, {
        foto: '/src/assets/img/petisco.png',
        nome: 'Petiscos',
        descricao: 'Petiscos',
        preco: 'R$ 25,00',
        brinquedo: 'brinquedo5'
    }, {
        foto: '/src/assets/img/kit.jpg',
        nome: 'kit completo com itens para seu cãozinho',
        descricao: 'Coleira + petisco + pote de ração',
        preco: 'R$ 25,00',
        brinquedo: 'brinquedo6'
    }
]

export function SectionProducts() {
    return (
        <section id="products" className="section-1">
            <h2>Produtos recomendados:</h2>
            <div className="container-section">
                {Produtos.map((item, index) => (
                    <div key={index} className="container-single">
                        <div><img src={item.foto} className="brinquedos" alt={item.brinquedo} /></div>
					    <div class="text-single">
						    <h4>{item.nome}</h4>
						    <p>{item.descricao}</p>
                            <div><p>{item.preco}</p></div>
					    </div>
                    </div>
                ))}
            </div>
            <div class="clear"></div>
        </section>  
    )     
}