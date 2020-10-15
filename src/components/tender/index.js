import React from 'react'
import styles from './index.module.scss'
// import image from '../../images'

const Tender = ({ textHeader, imgUrl, textFooter, index }) => {
    return (
        <div className={styles.container}>

            <div className={textHeader}>
                <span>{index}</span>
                <div dangerouslySetInnerHTML={{ __html: textHeader }} />
            </div>

            {/* TODO logic to insert image */}
            <div className={textHeader}>
                {/* <div dangerouslySetInnerHTML={{__html: imgUrl}} /> */}
                <div dangerouslySetInnerHTML={{ __html: imgUrl }} />
            </div>

            <div className={textHeader}>
                <div dangerouslySetInnerHTML={{ __html: textFooter }} />
            </div>

            <p>
                <span className={styles.email}>
                    <small>Author:</small>
                    {/* {author.email} */}
                </span>
            </p>

        </div>
    )
}

export default Tender