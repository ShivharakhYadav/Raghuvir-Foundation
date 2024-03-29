'use client';
import React from 'react';
import { Button, QRCode } from 'antd';

const downloadQRCode = () => {
  const canvas = document
    .getElementById('myqrcode')
    ?.querySelector<HTMLCanvasElement>('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    console.log(url);
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

const App: React.FC = () => (
  <div id='myqrcode'>
    <QRCode
      value='https://raghuvir-foundation.vercel.app/'
      bgColor='#fff'
      icon='/favicon2.ico'
      style={{ marginBottom: 16 }}
      errorLevel='H'
      size={300}
    />
    <Button type='primary' onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);

export default App;
