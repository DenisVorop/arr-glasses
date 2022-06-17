import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'

import bc from '../../assets/images/Home/mainHuman.png'

import './home.scss'

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__wrapper">
                    <div className="home__body">
                        <div className="home__title">Примеряй очки <br /> онлайн</div>
                        <div className="home__label">
                            Здесь ты можешь примерить и заказать очки  <br /> не выходя из дома! <br /> Попробуй - понравится.
                        </div>
                        <div className="home__btn">
                            <Link to="clients">
                                <Button>
                                    Примерить
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="home__background">
                        <img src={bc} alt="bc" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
