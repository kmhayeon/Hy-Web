import React from "react";

const Education = () => {
  const items = [
    {
      id: 0,
      date: `2014.03 ~ 2017.02`,
      title: `계원예술대학교`,
      content: `디지털미디어디자인과`,
    },
    {
      id: 1,
      date: `2010.03 ~ 2013.02`,
      title: `송림고등학교`,
      content: ``,
    },
  ];

  return (
    <>
      <div className={`lg: sm: m-auto max-w-[960px] px-14 px-14`}>
        <div className={`pb-8 text-[20px] font-bold`}>Education</div>
        <ol className="dark:border-gray-700 dark:text-gray-400 relative m-4 ">
          <li className="dark:after:bg-neutral-600 mb-10 ml-6 h-fit after:absolute after:left-[-0.02rem] after:top-[1rem] after:mt-px after:h-[65%] after:w-px after:bg-[#e0e0e0] ">
            {items.map(item => {
              return (
                <div className="mb-20 grid gap-0 sm:grid-cols-2" key={item.id}>
                  <div>
                    <span className="absolute -left-1 z-10 mr-3 ml-0 mt-0 flex h-2 w-2 items-center justify-center rounded-full bg-white ring-4 ring-yellow-300"></span>
                    <div className={`relative top-[-7px]`}>
                      <h3 className="pb-2 text-[14px] font-semibold leading-tight">{item.date}</h3>
                    </div>
                  </div>
                  <div className={`relative top-[-7px]`}>
                    <div className="text-[18px] font-semibold">{item.title}</div>
                    <div className="pt-1 text-[16px] font-medium">{item.content}</div>
                  </div>
                </div>
              );
            })}
          </li>
        </ol>
        <hr className={`my-14 h-[2px] border-0 bg-slate-600`} />
      </div>
    </>
  );
};
export default Education;
