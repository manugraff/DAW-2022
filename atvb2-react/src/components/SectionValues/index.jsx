import './style.css';
import imgSimba from '../../assets/img/simba.jpeg';
import imgSimba2 from '../../assets/img/simba2.jpeg';


export function SectionValues() {
    return(
        <section id="values">
            <div className="values-title">
                <h2>Sobre Nós</h2>
            </div>   
        
            <div className="vallues-container">
                <img src={imgSimba} className="simba" alt="nosso mascote"/>
                <img src={imgSimba2} className="simba2" alt="nosso mascote"/>
        
                <div className="values-content">
                    <h2>Quem nós somos?</h2>    
                    <h3>Somos o Simba's Pet, um petshop especialista em itens para cachorros!!</h3>
                    <h3>Esse é o nosso mascote, e dono do nome que carrega nosso petshop, o Simba!</h3>
                    <h3>Todos os nosso produtinhos são aprovados pela felicidade dele!</h3>
        
                    <p>
                        Esperamos atendê-los da melhor forma, comprou com nós? Mande um feedback, uma fotinha do seu cachorrinho feliz com nossos produtos!
                    </p>
        
                    <div className="feedback"><input type="texto" name="feedback" size="53"/></div>
        
                    <button>Enviar</button>
                </div>
            </div>
        </section>
    )
}
