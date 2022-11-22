import logo from './logo.svg';
import './App.css';
import './signatureCanvas.css';
import Popup from 'reactjs-popup';
import SignaturePad from 'react-signature-canvas'
import React ,{useState,useRef } from 'react';
function App() {

  const sigCanvas = useRef({});
  const [imageURL,setImageUrl]=useState(null);
  const clear = () => sigCanvas.current.clear();
  const dataURLtoFile =(dataurl, filename) =>{
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}
  const save = () => {
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    setImageUrl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

    // var item_image = image.replace(/^data:image\/(png|jpg);base64,/, "") ;    //image to base64

    // var file = dataURLtoFile(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),'driverSign.png');  //base64 to image

  }
  return (
    <div className="App">
      <h1>Signature Pad Example</h1>
      <Popup modal trigger={<button>Open Signature Pad</button>}
        closeOnDocumentClick={false} >
        {close => (
            <div className=''>
              <div>
              <SignaturePad 
                ref={sigCanvas}
                canvasProps={{
                  className: "signatureCanvas"
                }} />
                </div>
                <button onClick={save} >Save</button>
                <button onClick={clear} >Clear</button>
                <button onClick={close} >Close</button>

            </div>
          )}  
      </Popup>

      <br/>
      <br/>

      {imageURL ?(
        <img 
          src={imageURL}
          alt="my signature"
          style={{
            display:"block",
            margin:"0 auto",
            border:"1px solid black",
            width:"150px"
          }}
          />
      ):null}
    </div>
  );
}

export default App;
