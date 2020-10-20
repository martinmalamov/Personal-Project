const UploadImage = async (base64EncodedImage) => {
       console.log('UPLOAD',base64EncodedImage)

       try {
              await fetch('http://localhost:9000/api/upload', {
                     method: 'POST',
                     body: JSON.stringify({ data: base64EncodedImage }),
                     headers: { 'Content-Type': 'application/json' }
              })
       } catch (error) {
              console.log(error)
       }
}

export default UploadImage