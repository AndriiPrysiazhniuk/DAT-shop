export const Header = () => {

    const menuList = [
        'Про нас',
        'Каталог продукції',
        'Оплата і доставка',
        'Партнери',
        'Новини',
        'Контакти'

    ]

    return (
        <header className="App-header">
            <div className="Container">
                <nav className={'Header-menu'}>
                    <ul className={'Header__menu-list'}>
                        <li className={'Header__list-item Header__list-item-menu'}>
                            Про нас
                            <ul className={'About__us-menu'}>
                                <li>Наша команда</li>
                                <li>Партнери</li>
                                <li>Договір</li>
                            </ul>
                        </li>
                        <li className={'Header__list-item'}>
                            <a href="">
                                Каталог продукції
                            </a>
                        </li>
                        <li className={'Header__list-item'}>
                            <a href="">
                                Оплата і доставка
                            </a>
                        </li>
                        <li className={'Header__list-item'}>
                            <a href="">
                                Партнери
                            </a>
                        </li>
                        <li className={'Header__list-item'}>
                            <a href="">
                                Новини
                            </a>
                        </li>
                        <li className={'Header__list-item'}>
                            <a href="">
                                Контакти
                            </a>
                        </li>
                    </ul>
                    <div className={'Header-registration'}>
                        <a href="#">Вхід</a>
                        <a href="#">Реєстрація</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}