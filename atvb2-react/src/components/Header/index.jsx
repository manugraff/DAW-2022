import './style.css';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <h6>SIMBA'S PET</h6>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/carinho">Meu Carrinho</a>
                        </li>
                        <li>
                            <a href="/pedidos">Meu Pedidos</a>
                        </li>
                        <li>
                            <a href="/contato">Entre em contato</a>
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