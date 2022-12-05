import './style.css';

export function Header() {
    return (
        <header>
            <div class="container">
                <div class="brand">
                    <h6>SIMBA'S PET</h6>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Meu Carrinho</a>
                        </li>
                        <li>
                            <a href="#">Meu Pedidos</a>
                        </li>
                        <li>
                            <a href="#">Entre em contato</a>
                        </li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}