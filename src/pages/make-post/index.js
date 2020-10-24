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
    const [town, setTown] = useState('')
    const [myHeaderText, setMyHeaderText] = useState('')
    const [myImgUrl, setMyImgUrl] = useState()
    const [myFooterText, setMyFooterText] = useState('')
    const [updatedTender, setUpdatedTender] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:9000/api/tender', {
            method: 'POST',
            body: JSON.stringify({
                town: town,
                headerText: myHeaderText,
                imgUrl: myImgUrl,
                footerText: myFooterText
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setTown('')
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
                    <label htmlFor="towns">Choose town:</label>
                    <select required value={town} id="towns" name="townList" form="townForm"
                        onChange={e => setTown(e.target.value)}>
                        <option value=""></option>
                        <option value="Sofia">Sofia</option>
                        <option value="Varna">Varna</option>
                        <option value="Plovdiv">Plovdiv</option>
                        <option value="Blagoevgrad">Blagoevgrad</option>
                        <option value="Pleven">Pleven</option>
                        <option value="Pernik">Pernik</option>
                        <option value="Shumen">Shumen</option>
                        <option value="Haskovo">Haskovo</option>
                        <option value="Sliven">Sliven</option>
                        <option value="Qmbol">Qmbol</option>
                        <option value="Lovech">Lovech</option>
                        <option value="Kazanluk">Kazanluk</option>
                        <option value="Montana">Montana</option>
                    </select>
                </Select>
                <Select>
                    <label htmlFor="rooms">Choose room count:</label>
                    <select required value={myHeaderText} id="rooms" name="roomList" form="roomForm"
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
            <Tenders length={3} updatedTender={updatedTender} />
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