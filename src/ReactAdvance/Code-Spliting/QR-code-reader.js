import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
    <div  
    style={{width:"500px",
    height:"500px"}} >
      <QrReader
       
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        // style={{ width: '100%' }}
      />
      </div>
      <p>{data}</p>
    </>
  );
};

export default Test;