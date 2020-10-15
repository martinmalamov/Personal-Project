import React from 'react'
import Header from '../header/index.js'
import styles from './index.module.scss'
import Aside from '../aside/index.js'
import Footer from '../footer/index.js'

const PageLayout = (props) => {
    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.container}>
          <Aside />
          <div className={styles['inner-container']}>
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

export default PageLayout;
