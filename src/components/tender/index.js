import React from 'react'
import styles from './index.module.scss'
// import image from '../../images'

const Tender = ({ headerText, imgUrl, footerText, author, index }) => {

    console.log("textHeader::::",headerText)
    console.log("author::::",author)
    return (
        <div className={styles.container}>

            <div className={headerText}>
                <span>{index}</span>
                <div dangerouslySetInnerHTML={{ __html: headerText }} />
            </div>

            {/* TODO logic to insert image */}
            <div className={imgUrl}>
                <div dangerouslySetInnerHTML={{ __html: imgUrl }} />
            </div>

   

            <div className={footerText}>
                <div dangerouslySetInnerHTML={{ __html: footerText }} />
            </div>

            <p>
                <span className={styles.email}>
                    <small>Author:</small>
                    {author.email}
                </span>
            </p>

        </div>
    )
}

export default Tender