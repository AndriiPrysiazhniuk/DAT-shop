export const Headercopy = () => {

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
                        {menuList.map(el => {
                            return (<li className={'Header__list-item'}>
                                    {el}
                                    <ul className={'About__us-menu'}>
                                        <li>Наша команда</li>
                                        <li>Партнери</li>
                                        <li>Договір</li>
                                    </ul>
                                </li>
                            )
                        })}

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