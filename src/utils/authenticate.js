const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const authToken = promise.headers.get('Authorization')
        document.cookie = `x-auth-token=${authToken}`
        console.log('authToken- ', authToken)
        
        const response = await promise.json()
        console.log('response email - ', response)
        

        if (response.email && authToken) {
            onSuccess({
                email: response.email,
                id: response._id
            })
        } else {
            onFailure()
        }

    } catch (error) {
        onFailure()
    }
}

export default authenticate