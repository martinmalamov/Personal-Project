import React, { useState } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import styled from 'styled-components'
import getCookie from '../../utils/cookie'
import SubmitButton from '../../components/button/submit-button'
import Tenders from '../../components/tenders'
import ImageUpload from '../../components/imageApload'
// import UploadImage from '../../components/Upload'
// import axios from 'axios'

const MakePostPage = () => {
    const [myHeaderText, setMyHeaderText] = useState('')
    const [myImgUrl, setMyImgUrl] = useState()
    const [myFooterText, setMyFooterText] = useState('')
    const [updatedTender, setUpdatedTender] = useState([])

    const handleSubmit = async (e) => {
        // e.preventDefault()

        await fetch('http://localhost:9000/api/tender', {
            method: 'POST',
            body: JSON.stringify({
                headerText: myHeaderText,
                imgUrl: myImgUrl,
                footerText: myFooterText
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setMyHeaderText('')
        setMyImgUrl('')
        setMyFooterText('')
        setUpdatedTender([...updatedTender, 1])
    }


    // function upload() {
    //     let fileinput = document.getElementById("finput")
    //     let filename = fileinput.value
    //     alert("Chose " + filename)
    // }


    return (
        <PageLayout>
            <Title title="Make your post" />
            <Container>
                <Select>
                    <label htmlFor="rooms">Choose room count:</label>
                    <select value={myHeaderText} id="rooms" name="roomList" form="roomForm"
                        onChange={e => setMyHeaderText(e.target.value)}>
                        <option value="One-room">One-room</option>
                        <option value="Two-room">Two-room</option>
                        <option value="Three-room">Three-room</option>
                        <option value="Four-room">Four-room</option>
                        <option value="Five-room">Five-room</option>
                    </select>
                </Select>
                <Image>
                    {/* must provide imgUrl to set photo */}
                    {/* <input value={myImgUrl} type="file"
                        accept="image/*" id="finput"
                        onChange={upload}
                        onChange={e => setMyImgUrl(e.target.value)}>
                    </input> */}

                    {/* <ImageUpload value={myImgUrl}
                        onChange={e => setMyImgUrl(e.target.value)[0]}
                    /> */}

                    <ImageUpload value={myImgUrl}
                        onChange={e => setMyImgUrl(e.target.value)} />

                </Image>
                <div>
                    <div>
                        <span>Description</span>
                    </div>
                    <TextArea value={myFooterText}
                        onChange={e => setMyFooterText(e.target.value)} />
                </div>
                <div>
                    <SubmitButton title="Post" onClick={handleSubmit} />
                </div>

            </Container >
            <Tenders length={3} updatedTender={updatedTender } />
        </PageLayout >
    )
}



const Container = styled.div`
    text-align:center;
`

const Select = styled.div`
    padding-bottom: 20px;
`

const Image = styled.div`
    margin:0 auto;
    width: 300px;
    height: 300px;
    padding: 20px;
`

const TextArea = styled.textarea`
    border: 2px solid black;
    border-radius: 10px;
    width: 300px;
    height: 120px;
    resize: none;
`

export default MakePostPage