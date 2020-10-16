import React, { Component } from 'react'
import Link from '../link'
import styles from './index.module.scss'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'

class Footer extends Component {
    static contextType = UserContext
    render() {

        const {
            email
        } = this.context
        console.log(email)

        const links = getNavigation(email)
        console.log(links)

        return (
            <header className={styles.container}>
                <div className={styles.navigation}>

                    {
                        links.map(navElement => {
                            console.log(navElement)
                            return (
                                <Link
                                    key={navElement.title}
                                    href={navElement.link}
                                    title={navElement.title}
                                    type="footer" />
                            )
                        })
                    }

                </div>
            </header>
        )
    }
}

export default Footer