import React from 'react';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return <div className={`lg: sm: m-auto flex max-w-[960px] flex-wrap justify-end px-10 px-10 pb-[80px] text-sm text-gray-500`}>Copyright {year}. Hayeon. All rights reserved</div>;
};
export default Footer;
