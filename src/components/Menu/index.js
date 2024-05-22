import './Menu.css'

const Menu = () => {
    return (
        <header className='menu'>
            <img src='/img/agronex-logo.png' alt='Agronex logo'></img>
            <form>
                <input className='barra-pesquisa' type="text" placeholder="Buscar.."></input>
                <button className='enviar' type='submit'>
                    <img src='/img/search.png' alt='enviar' className='enviar-icon'></img>
                </button>
            </form>
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