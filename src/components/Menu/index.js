import './Menu.css'

const Menu = () => {
    return (
        <header className='menu'>
            <img src='/img/agronex-logo.png' alt='Agronex logo'></img>
            <div className='button-container'>
                <button>Sobre nós</button>
                <button>Suporte</button>
                <button className='login'>Login</button>
                <button className='login'>Cadastro</button>
            </div>
        </header>
    )
}

export default Menu