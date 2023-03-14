import React from "react";

const Detail = () => {
  return (
    <>
      <div className={`lg: sm: m-auto max-w-[960px] px-10 px-10`}>
        <div className={`text-[25px]`}>
          안녕하세요 :)
          <br />
          프론트엔드 개발자 김하연입니다. 👋🏻
        </div>
        <div className={`pt-6 text-[16px] leading-relaxed`}>
          기획을 시작으로 프론트 개발까지
          <br />
          여러 사람들과 협력하여 비즈니스 및 소비자 모두를 위한 서비스를
          개발하였습니다.
          <br />
          사용자 경험과 비즈니스 가치 등 다양한 관점에서의 문제를 개선하기위해
          끊임없이 노력하고 있습니다.
        </div>
        <hr className={`my-14 h-[2px] border-0 bg-slate-600`} />
      </div>
    </>
  );
};
export default Detail;
