import React from 'react'
import Footer from '../composants/Footer';
import Header from '../composants/Header';
import QRCodeGenerator from '../composants/QRCodeGenerator';

function Qrcode() {
  return (
    <div>
        <Header />
        <QRCodeGenerator />
        <Footer />
    </div>
  )
}

export default Qrcode