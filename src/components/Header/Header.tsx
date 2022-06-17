import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import logo from '../../assets/images/logo.svg'

import './header.scss'

const links = [
    { path: '/clients', label: 'Клиентам' },
    { path: '/clinics', label: 'Клиникам' },
    { path: '/suppliers', label: 'Поставщикам' },
    { path: '/investors', label: 'Инвесторам' },
]

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = React.useState<string>('clients')

    const toggleActiveLink = (pathLink: string) => {
        setActiveLink(pathLink)
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__logo logo-header">
                        <div className="logo-header__image">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="logo-header__label">I’m UNIK</div>
                    </div>
                    <div className="header__navigation">
                        <div className="header__links">
                            {links.map(link => (
                                <div className={cn('header__link', { 'link-active': activeLink === link.path })} key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={() => toggleActiveLink(link.path)}
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
