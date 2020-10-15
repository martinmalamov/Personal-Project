const getTender = async (length) => {
    const promise = await fetch(`http://localhost:9000/api/tender?length=${length}`)
    const tender = await promise.json()
    return tender;
}

export default getTender