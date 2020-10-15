import React, { Component } from 'react'
import Link from '../link'
import styles from './index.module.scss'
import logo from '../../images/logo.png'
// import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'

const Aside = () => {
    return (
        <aside className={styles.container}>
            <Link href="#" title="Going to 1" type="aside" />
            <Link href="#" title="Going to 1" type="aside" />
            <Link href="#" title="Going to 1" type="aside" />
            <Link href="#" title="Going to 1" type="aside" />
            <Link href="#" title="Going to 1" type="aside" />
        </aside>
    )
}

export default Aside