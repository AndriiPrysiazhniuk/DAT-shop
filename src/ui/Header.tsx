import React, {useState} from "react";

export const Header = () => {

    const menuList = [
        'Про нас',
        'Каталог продукції',
        'Оплата і доставка',
        'Партнери',
        'Новини',
        'Контакти'

    ]
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="App-header">
            <div className="Container">
                <nav className={'Header-menu'}>
                    <ul className={'Header__menu-list'}>
                        {menuList.map(( el,index) => {
                            const setOpenHandler = () => {
                                if (index === 0) {
                                    setOpen(!isOpen)
                                }
                            }
                            return (
                                <li className={`Header__list-item  ${isOpen ? 'open' : ''}`} onClick={setOpenHandler}>
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
                <div>
                    <img className={''} src="../images/logo.svg" alt=""/>
                    <input type="text"/>
                    <ul className={'footer-list footer-contacts'}>
                        <li className={'footer-contacts__feedback'}>
                            <span>+38 (067) 115 00 58</span>
                            <span className={'call__me-back'}>Замовити зворотній зв’язок</span>
                        </li>
                    </ul>
                </div>
                <ul>
                    <li>
                        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_25_1188)">
                                <circle cx="34" cy="29" r="20" fill="transparent"/>
                                <circle cx="34" cy="29" r="19.5" stroke="#8C3213"/>
                            </g>
                            <path
                                d="M37.1904 21.4277C39.8149 21.4277 41.9502 23.5637 41.9502 26.1885C41.9499 27.5209 41.5186 28.896 40.6797 30.2734C40.0159 31.3633 39.0946 32.4597 37.9443 33.5332C35.9941 35.3532 34.016 36.5067 33.9922 36.5205C33.9327 36.5549 33.8661 36.5723 33.7998 36.5723C33.7335 36.5723 33.6669 36.5549 33.6074 36.5205C33.6021 36.518 33.5932 36.5137 33.583 36.5088C33.5618 36.4985 33.5311 36.4834 33.4922 36.4639C33.4145 36.4248 33.3034 36.3674 33.1641 36.29C32.885 36.1351 32.4923 35.9008 32.0293 35.5781C31.1034 34.9329 29.8923 33.9324 28.7334 32.502C28.6002 32.337 28.6262 32.0954 28.791 31.9619C28.9559 31.8285 29.1974 31.8536 29.3311 32.0186C31.229 34.3612 33.1093 35.336 33.7959 35.7383C34.3275 35.4099 35.8874 34.4027 37.4268 32.9648C38.2881 32.1603 39.2288 31.1381 39.9531 29.9785C40.6777 28.8185 41.1803 27.5295 41.1807 26.1885C41.1807 23.9879 39.3907 22.1973 37.1904 22.1973C35.9869 22.1973 34.86 22.7322 34.0977 23.666C34.0246 23.7555 33.9152 23.8076 33.7998 23.8076C33.6844 23.8076 33.575 23.7554 33.502 23.666C32.7396 22.7322 31.6127 22.1973 30.4092 22.1973C28.2089 22.1973 26.4189 23.9872 26.4189 26.1875C26.4189 27.5587 26.9388 29.0061 27.9814 30.4912C28.1033 30.6649 28.0612 30.9044 27.8877 31.0264C27.714 31.1484 27.4745 31.1064 27.3525 30.9326C26.2283 29.3313 25.6494 27.7345 25.6494 26.1875C25.6494 23.563 27.7847 21.4277 30.4092 21.4277C31.6952 21.4277 32.9077 21.9419 33.7998 22.8496C34.6919 21.942 35.9044 21.4277 37.1904 21.4277Z"
                                fill="#8C3213" stroke="#8C3213" stroke-width="0.3"/>
                            <defs>
                                <filter id="filter0_d_25_1188" x="0" y="0" width="68" height="68"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="5"/>
                                    <feGaussianBlur stdDeviation="7"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0.54902 0 0 0 0 0.196078 0 0 0 0 0.0745098 0 0 0 0.3 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_25_1188"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_1188"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </li>
                </ul>
            </div>
        </header>
    )
}