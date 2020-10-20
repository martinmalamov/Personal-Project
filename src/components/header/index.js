import React, { Component } from 'react'
import Link from '../link'
import styles from './index.module.scss'
import logo from '../../images/logo.png'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'

class Header extends Component {
    static contextType = UserContext
    render() {

        const {
            user
        } = this.context

        const links = getNavigation(user)

        return (
            <header className={styles.container}>

                <div className={styles.logo}>
                    <img alt="logo" src={logo} />
                </div>

                <div className={styles.navigation}>
                    {
                        links.map(navElement => {
                            return (

                                <Link
                                    key={navElement.title}

                                    href={navElement.link}
                                    title={navElement.title}
                                    type="header" />

                            )
                        })
                    }
                </div>

            </header>
        )
    }
}

export default Header

