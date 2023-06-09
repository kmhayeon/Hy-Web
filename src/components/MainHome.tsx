import React from 'react';
import profileImg from '../assets/img/1-2.png';

const MainApp = () => {
  const onSendEmailClick = () => {
    window.open('mailto:kmhayeon12@gmail.com', '_blank');
  };

  return (
    <div className={`w-full pb-40`}>
      <div className={`grid place-items-center`}>
        <div className={`p-2 text-center`}>
          <img className={`m-auto w-6/12 pt-36`} src={profileImg} alt={'profile'} />
          <h1 className={`pt-12 text-[35px] font-semibold`}>Hi, I’m Hayeon.</h1>
          <h1 className={`font-200 pt-2 text-[20px]`}>FrontEnd Developer</h1>
          <hr className={`m-auto mt-6 h-[1px] w-20 border-0 bg-slate-600`} />
          <div className={`cursor-pointer cursor-pointer pt-6 text-[16px] font-light hover:text-yellow-400`} onClick={() => onSendEmailClick()}>
            kmhayeon12@gmail.com
          </div>
        </div>
      </div>
      <hr className={`relative top-20 h-[1px] border-0 bg-slate-200`} />
    </div>
  );
};
export default MainApp;
