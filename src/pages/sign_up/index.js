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

        //empty strings as default value in form
        this.state = {
            email: "",
            password: "",
            rePassword: "",
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    static contextType = UserContext

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            email,
            password,
            rePassword,

        } = this.state

        if (typeof email !== undefined) {
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(email)) {
                console.log("Email is not valid")
                return
            }
        }

        if(password.length < 6 && rePassword.length < 6){
            console.log('Password must be at least 6 symbols')
            return
        }

        if (password !== rePassword) {
            console.log('Password do not match !')
            return
        }

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

// class Sign_up_Page extends Component {
//     constructor(props) {
//         super(props)

//         //empty strings as default value in form
//         this.state = {
//             input: {},
//             errors: {}
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     // regex    ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

//     handleChange(event) {
//         let input = this.state.input;
//         input[event.target.name] = event.target.value;

//         this.setState({
//             input
//         });
//     }

//     static contextType = UserContext

//     handleSubmit(event) {
//         event.preventDefault();

//         if (this.validate()) {
//             console.log(this.state);

//             let input = {};
//             input["email"] = "";
//             input["password"] = "";
//             input["rePassword"] = "";
//             this.setState({ input: input });

//             alert('Demo Form is submited');
//         }
//     }

//     validate() {
//         let input = this.state.input;
//         let errors = {};
//         let isValid = true;

//         if (typeof input["email"] !== "undefined") {

//             var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//             if (!pattern.test(input["email"])) {
//                 isValid = false;
//                 errors["email"] = "Please enter valid email address.";
//             }
//         }

//         if (input["password"] !== input["rePassword"]) {
//             isValid = false;
//             errors["password"] = "Password do not match";
//         }

//         this.setState({
//             errors: errors
//         });

//         return isValid;
//     }

//     render() {

//         return (
//             <PageLayout>
//                 <form className={styles.container} onSubmit={this.handleSubmit}>
//                     <Title title="Sign_up" />
//                     <Input
//                         value={this.state.input.name}
//                         onChange={this.handleChange}
//                         label="Email"
//                         id="email"
//                     />
//                     <div className="danger">{this.state.errors.name}</div>
//                     <Input
//                         type="password"
//                         value={this.state.input.password}
//                         onChange={this.handleChange}
//                         label="Password"
//                         id="password"
//                     />
//                     <Input
//                         type="password"
//                         value={this.state.input.rePassword}
//                         onChange={this.handleChange}
//                         label="Re-Password"
//                         id="re-password"
//                     />
//                     <SubmitButton title="Sign_up" />
//                 </form>
//             </PageLayout>
//         )
//     }
// }


export default Sign_up_Page
