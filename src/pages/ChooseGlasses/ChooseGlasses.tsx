import React from 'react'

import sort from '../../assets/images/ChooseGlasses/sort.svg'
import filter from '../../assets/images/ChooseGlasses/filter.svg'
import favorite from '../../assets/images/ChooseGlasses/favorite.svg'
import cart from '../../assets/images/ChooseGlasses/cart.svg'

import './chooseglasses.scss'

const characteristics = [
    'Пол:',
    'Страна:',
    'Материал оправы:',
    'Материал оправы:',
    'Цвет оправы:',
    'Цвет заушника:',
    'Длина заушника:',
    'Размер переносицы:',
    'Размер рамки:',
    'Тип оправы:',
]

const ChooseGlasses: React.FC = () => {
    const [favoriteAmount, setFavoriteAmount] = React.useState<number>(2)
    const [cartAmount, setCartAmount] = React.useState<number>(10)

    return (
        <div className="choose-glasses">
            <div className="choose-glasses__container">
                <div className="choose-glasses__body">
                    <div className="choose-glasses__catalog catalog-choose-glasses">
                        <div className="catalog-choose-glasses__top">
                            <div className="catalog-choose-glasses__label">Каталог</div>
                            <div className="catalog-choose-glasses__sort">
                                <img src={sort} alt="sort" />
                            </div>
                            <div className="catalog-choose-glasses__filter">
                                <img src={filter} alt="filter" />
                            </div>
                        </div>
                        <div className="catalog-choose-glasses__slider"></div>
                    </div>
                    <div className="choose-glasses__video video-choose-glasses">
                        <div className="video-choose-glasses__frame"></div>
                    </div>
                    <div className="choose-glasses__information information-choose-glasses">
                        <div className="information-choose-glasses__top">
                            <div className="information-choose-glasses__title">EINSTOFFEN</div>
                            <div className="information-choose-glasses__choosed">
                                <div className="information-choose-glasses__favorite">
                                    <img src={favorite} alt="favorite" />
                                    {favoriteAmount
                                        ? <span className="information-choose-glasses__favorite-amount">
                                            {favoriteAmount}
                                        </span>
                                        : null}
                                </div>
                                <div className="information-choose-glasses__cart">
                                    <img src={cart} alt="cart" />
                                    {cartAmount
                                        ? <span className="information-choose-glasses__cart-amount">
                                            {cartAmount}
                                        </span>
                                        : null}
                                </div>
                            </div>
                        </div>
                        <div className="information-choose-glasses__label">CAPITAN HAVANNA 4266</div>
                        <div className="information-choose-glasses__characteristics characteristics-information-choose-glasses">
                            <div className="characteristics-information-choose-glasses__label">Характеристики</div>
                            <div className="characteristics">
                                {characteristics.map(characteristic => (
                                    <div className="characteristic" key={characteristic}>
                                        <div className="characteristic__label">{characteristic}</div>
                                        <div className="characteristic__text">Женский</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="information-choose-glasses__button btn">
                            Добавить в корзину
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGlasses
