import React from 'react'
import styled from 'styled-components'

const Input = ({ label, id, value, onChange, type }) => {
    return (<Container>
        <label htmlFor={id}>
            {label}:
            <input type={type || 'text'} id={id} value={value} onChange={onChange} />
        </label>
    </Container>
    )
}

const Container = styled.div`
    padding: 1%;
`


export default Input