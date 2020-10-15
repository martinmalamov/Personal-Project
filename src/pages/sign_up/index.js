import React, { Component } from 'react'
import styles from './index.module.scss'
import SubmitButton from '../../components/button/submit-button'
import Title from '../../components/title'
import PageLayout from '../../components/page-layout'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'

class Sign_up_Page extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        // console.log(event)
        newState[type] = event.target.value

        this.setState(newState)
    }

    static contextType = UserContext

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            email,
            password
        } = this.state

        //fetch
        await authenticate('http://localhost:9000/api/user/register', {
            email,
            password,
        },
            (user) => {
                this.context.logIn(user)
                this.props.history.push('/')
            },
            (e) => {
                console.log('Failure', e)

            }

        )

    }

    render() {
        const {
            email,
            password,
            rePassword
        } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title="Sign_up" />
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                    />
                    <Input
                        type="password"
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="Re-Password"
                        id="re-password"
                    />
                    <SubmitButton title="Sign_up" />
                </form>
            </PageLayout>
        )
    }
}

export default Sign_up_Page
