import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./ui/Header";
import {Headercopy} from "./ui/Headercopy";

function App() {
    return (
        <>
            <Header/>
            {/*<Headercopy/>*/}

            <main className="main">
                {/*<h1>Hi</h1>*/}
            </main>
            <footer className="footer">
                <div className={'Container footer__inner'}>
                    <div className={'footer__text-logo'}>
                        <div className={'footer-logo'}></div>
                        <p className="footer-text">
                            Пропонуємо покупцям широкий вибір насіння овочів
                        </p>
                    </div>
                    <ul className={'footer-list footer-info'}>
                        <li>
                            Інформація
                        </li>
                        <li>
                            Про компанію
                        </li>
                        <li>
                            Оплата і доставка
                        </li>
                        <li>
                            Партнери
                        </li>
                    </ul>
                    <ul className={'footer-list footer-products'}>
                        <li>
                            Товари
                        </li>
                        <li>
                            Каталог продукції
                        </li>
                        <li>
                            Засоби захисту рослин
                        </li>
                        <li>
                            Насіння
                        </li>
                        <li>
                            Добрива
                        </li>
                        <li>
                            Агроному в поміч
                        </li>

                    </ul>
                    <ul className={'footer-list footer-contacts'}>
                        <li>Контакти</li>
                        <li className={'footer-contacts__feedback'}>
                            <span>+38 (067) 115 00 58</span>
                            <span className={'call__me-back'}>Замовити зворотній зв’язок</span>
                        </li>
                        <li className={'footer-contacts__email'}>DAT@gmail.com</li>
                    </ul>
                </div>
                <div className={'copyright'}>
                    © 2022 DAT
                </div>
            </footer>
        </>
    );
}

export default App;
