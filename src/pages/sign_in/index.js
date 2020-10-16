import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import PageLayout from '../../components/page-layout'
import UserContext from '../../Context'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import styles from './index.module.scss'

const Sign_in_Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        //fetch
        await authenticate('http://localhost:9000/api/user/login', {
            email,
            password
        },
            (user) => {
                context.logIn(user)
                history.push('/')
            },
            (e) => {
                console.log("Failure", e)
            }
        )
    }


    return (
        <PageLayout>
            <form className={styles.container} onSubmit={handleSubmit}>
                <Title title="Sign_in" />
                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label="Email"
                    id="email"
                />
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    id="password"
                />
                <SubmitButton title="Sign_in" />
            </form>
        </PageLayout>
    )
}

export default Sign_in_Page