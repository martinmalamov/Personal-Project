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
            email
        } = this.context

        const links = getNavigation(email)

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

// <header className={styles.container}>

{/* <div className={styles.navigation}>
                    <Link href="#" title="Going to 1" type="header" />
                    <Link href="#" title="Going to 1" type="header" />
                    <Link href="#" title="Going to 1" type="header" />
                    <Link href="#" title="Going to 1" type="header" />
                    <Link href="#" title="Going to 1" type="header" />
                </div> */}