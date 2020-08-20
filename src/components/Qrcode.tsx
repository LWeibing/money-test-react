import styled from 'styled-components';
import React, {useRef} from 'react';

declare function require(img: string): string;

const QrcordBox = styled.div`
background: white;
  padding: 0 20px;
  max-width: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

   .close {
  text-align: center;
  padding: 6px 0;
}

   .qrcode {
  max-width: 100%;
}

   .text {
  text-align: center;
  padding: 6px 0;
  color: rgb(255, 153, 0);
}
`;

const Qrcord: React.FC = () => {
  const closeRef = useRef<HTMLDivElement>(null);
  const imgUrl = require('../assets/qrcord.png');
  const closeQrcode = () => {
    if (closeRef.current) {
      closeRef.current.style.display = 'none';
    }
  };
  return (
    <QrcordBox ref={closeRef}>
      <p className="text">建议扫描二维码在手机浏览</p>
      <img className="qrcode" src={imgUrl} alt="二维码"/>
      <div className="close" onClick={closeQrcode}>关闭</div>
    </QrcordBox>);
};
export {Qrcord};

