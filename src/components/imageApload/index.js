import React, { Component } from 'react'
import uploadImage from '../Upload';


class ImageUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
    

    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      uploadImage(e)
      console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];
      console.log('File-----', file)

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
    }

    render() {
      let {imagePreviewUrl} = this.state;
      console.log('imagePreviewUrl render-----', imagePreviewUrl)
      

      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }

      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      )
    }
  }

  export default ImageUpload

//   ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));


//2
// import React, { useState } from 'react'

// function ImageUpload() {
//     const [image, setImage] = useState('')
//     const [loading, setLoading] = useState(false)

//     const uploadImage = async e => {
//         const files = e.target.files
//         const data = new FormData()
//         data.append('file', files[0])
//         data.append('upload_preset', 'martin')
//         setLoading(true)
//         const res = await fetch(
//             'https://api.cloudinary.com/v1_1/tender/image/upload',
//             {
//                 method: 'POST',
//                 body: data,
//                 }
//         )
//         console.log('Response' , res)
//         const file = await res.json()
//         console.log('File ---' ,file)

//         setImage(file.secure_url)
//         setLoading(false)
//     }

//     return (
//         <div>
//             <h1>Upload Image</h1>
//             <input
//                 type="file"
//                 name="file"
//                 placeholder="Upload an image"
//                 onChange={uploadImage}
//             />
//             {loading ? (
//                 <h3>Loading...</h3>
//             ) : (
//                     <img src={image}  />
//                 )}
//         </div>
//     )
// }

// export default ImageUpload



