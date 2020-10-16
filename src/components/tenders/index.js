import React, { Component } from 'react'
import Tender from '../tender'
import styles from './index.module.scss'

class Tenders extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tenders: []
        }
    }

    getTenders = async () => {
        const promise = await fetch('http://localhost:9000/api/tender')
        const tenders = await promise.json()

        this.setState({
            tenders
        })
    }

    renderTender() {
        const { tenders } = this.state

        return tenders.map((tender, index) => {
            return (
                <Tender key={tender._id} index={index} {...tender} />
            )
        })
    }

    componentDidMount() {
        this.getTenders()
    }

    render() {
        console.log(this.state.tenders)
        const {
            tenders
        } = this.state

        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Origamis</h1>
                <div>
                    {this.renderTender()}
                </div>
            </div>
        )
    }
}

export default Tenders

// return (
//     <div className={styles.container}>
//         <h1 className={styles.title}>Origamis</h1>
//         <div>
//             {tenders.map(tender => {
//                 return (
//                     <div key={tender._id}>
//                         {tender.headerText}
//                         {/* {tender.imgUrl} */}
//                         {/* {tender.footerText} */}
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
// )