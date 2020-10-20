import React, { Component } from 'react'
import Link from '../link'
import styles from './index.module.scss'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'

class Footer extends Component {
    static contextType = UserContext
    render() {

        const {
            user
        } = this.context

        const links = getNavigation(user)

        return (
            <footer className={styles.container}>
                <div className={styles.navigation}>

                    {
                        links.map(navElement => {
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
                <div className={styles.createdBy}>
                    Created by Martin Malamov
                    </div>
            </footer>
        )
    }
}

export default Footer