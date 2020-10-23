import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PageLayout from '../../components/page-layout'
import Tenders from '../../components/tenders'
import UserContext from '../../Context'
import styles from './index.module.scss'

const ProfilePage = () => {
    const [email, setEmail] = useState(null)
    const [posts, setPosts] = useState(null)
    const context = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    console.log(history)

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    const getData = useCallback(async () => {
        //params contain userid
        const id = params.userid
        console.log("PROFILE ID ", params.id)

        const response = await fetch(`http://localhost:9000/api/user?id=${id}`)
        if (!response.ok) {
            // history.push('/error')
            console.log('ERROR response')
        }

        const user = await response.json()

        setEmail(user.email)
        setPosts(user.posts && user.posts.length)

    }, [params.userid, history])

    useEffect(() => {
        getData()
    }, [getData])

    if (!email) {
        return (
            <PageLayout>
                <div>
                    Loading...
                </div>
            </PageLayout>
        )
    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <p>User: {email}</p>
                <p>Posts: {posts}</p>

                <div className={styles.button}>
                    <button onClick={logOut}>Logout</button>
                </div>
            </div>

            <div>
                <h2>Your last three posts</h2>
            </div>
            <Tenders length={3}   />
        </PageLayout>
    )
}

export default ProfilePage