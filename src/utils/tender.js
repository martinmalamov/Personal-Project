const getTender = async (length) => {
    const promise = await fetch(`http://localhost:9000/api/tender?length=${length}`)
    const tenders = await promise.json()
    return tenders;
}

export default getTender