import React from 'react'
import styles from './index.module.scss'
// import image from '../../images'

const Tender = ({ town, headerText, imgUrl, footerText, author, index }) => {

    return (
        <div className={styles.container}>
            <div className={styles['container-wrapper']}>

                <div className={headerText}>

                    <div className={town}>
                        <span className={styles.indexCounter}>
                            {index}
                        </span>
                        <div>
                            <span className={styles.text} dangerouslySetInnerHTML={{ __html: town }} />
                            <span className={styles.rooms} dangerouslySetInnerHTML={{ __html: headerText }} />
                        </div>
                    </div>


                </div>

                {/* TODO logic to insert image */}
                {/* <div className={imgUrl}>
                <div dangerouslySetInnerHTML={{ __html: imgUrl }} />
            </div>
*/}


                <div className={footerText}>
                    <div dangerouslySetInnerHTML={{ __html: footerText }} />
                </div>

                <p className={styles.email}>
                    <span className={styles.email}>
                        <small>Author:</small>
                        {author.email}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Tender