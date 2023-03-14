import React from "react";

interface itemsType {
  id: number;
  date: string;
  title: string;
  content: Array<object>;
}

const WorkEx = () => {
  const jobDate = `2022.12 ~ <span style='color: #ff7966'>재직중</span>`;
  const items: Array<any> = [
    {
      id: 0,
      date: `${jobDate}`,
      title: `오스카앤블록`,
      content: [
        {
          id: 0,
          job: "자사 홈페이지 개발",
          jobTitle: `개발환경: Typescript / React / Next.js`,
          jobContents: [
            {
              id: 0,
              tit: `- 오스카앤블록 자사 홈페이지 개발/운영/배포`,
            },
          ],
        },
        {
          id: 1,
          job: "Finut 웹뷰 개발",
          jobTitle: `개발환경: Typescript / React / Next.js / Tanstack Query`,
          jobContents: [
            {
              id: 0,
              tit: `- 서비스 Finut 웹뷰 데모 개발/운영/배포`,
            },
          ],
        },
        {
          id: 2,
          job: "Finut 웹 어드민 개발",
          jobTitle: `개발환경: Typescript / React / Next.js / Recoil / Tanstack Query`,
          jobContents: [
            {
              id: 1,
              tit: `- Finut 웹사이트 개발/운영/배포`,
            },
            {
              id: 0,
              tit: `- Finut 웹 어드민 기능 개발/운영/배포`,
            },
          ],
        },
      ],
    },
    {
      id: 1,
      date: `2021.07 ~ 2022.07`,
      title: `에비드넷`,
      content: [
        {
          id: 0,
          job: "메디팡팡 앱 개발",
          jobTitle: `개발환경: Typescript / React Native / GraphQL`,
          jobContents: [
            {
              id: 0,
              tit: `- 메디팡팡 앱 마이데이터 과제 수행 및 관련 서비스 개발`,
            },
            {
              id: 1,
              tit: `- 앱 유저수 10,000명+ 증가`,
            },
          ],
        },
        {
          id: 1,
          job: "메디팡팡 웹 개발",
          jobTitle: `개발환경: Typescript / React / GraphQL`,
          jobContents: [
            {
              id: 0,
              tit: `- 메디팡팡 웹 어드민 기능 개발/운영/배포 `,
            },
            {
              id: 1,
              tit: `- 메디팡팡 병원 웹 기능 개발/운영/배포`,
            },
            {
              id: 2,
              tit: `- 메디팡팡 의사 웹 추가기능, 회원가입 개발/운영/배포`,
            },
            {
              id: 3,
              tit: `- 메디팡팡 약사 웹 기능, 회원가입 개발/운영/배포`,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      date: `2020.06 ~ 2021.02`,
      title: `리버스랩`,
      content: [
        {
          id: 0,
          job: "자사 홈페이지 개발 및 유지보수",
          jobTitle: `개발환경: Html / Styled Components / Javascript`,
          jobContents: [
            {
              id: 0,
              tit: `- 자사 홈페이지 UI 수정 및 기능 개선`,
            },
          ],
        },
        {
          id: 1,
          job: "정산 어드민 기능 개발",
          jobTitle: `개발환경: Javascript / React / Styled Components`,
          jobContents: [
            {
              id: 0,
              tit: `- 정산 어드민 기능 개발`,
            },
          ],
        },
        {
          id: 2,
          job: "옐로우버스 어드민 1.0 개발 및 유지보수",
          jobTitle: `개발환경: Javascript / React / Styled Components`,
          jobContents: [
            {
              id: 0,
              tit: `- 자사 서비스 어드민 1.0 ver 기능 추가 개발 및 유지보수`,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className={`lg: sm: m-auto max-w-[960px] px-14 px-14`}>
        <div className={`pb-8 text-[20px] font-bold`}>Work Experience</div>
        <ol className="dark:border-gray-700 dark:text-gray-400 relative m-4 ">
          <li className="dark:after:bg-neutral-600 mb-10 ml-6 h-fit after:absolute after:left-[-0.02rem] after:top-[1rem] after:mt-px after:h-[67%] after:w-px after:bg-[#e0e0e0] ">
            {items.map((item) => {
              return (
                <div className="mb-20 grid gap-0 sm:grid-cols-2" key={item.id}>
                  <div>
                    <span className="absolute -left-1 z-10 mr-3 ml-0 mt-0 flex h-2 w-2 items-center justify-center rounded-full bg-white ring-4 ring-yellow-300"></span>
                    <div className={`relative top-[-7px]`}>
                      <h3 className="text-[18px] font-semibold leading-tight">
                        {item.title}
                      </h3>
                      <p
                        className="pt-3 pb-3 text-sm font-semibold"
                        dangerouslySetInnerHTML={{ __html: `${item.date}` }}
                      />
                    </div>
                  </div>
                  <div className={`relative top-[-7px]`}>
                    <div>
                      {items &&
                        item.content.map((sub: any, i: any) => {
                          return (
                            <div key={i} className={`w-full pb-10`}>
                              <div className={`text-[18px] font-semibold`}>
                                {sub.job}
                              </div>
                              <div
                                className={`pt-0.5 pb-5 text-[13px] font-semibold`}
                              >
                                {sub.jobTitle}
                              </div>
                              <div className={`text-[14px]`}>
                                {sub.jobContents.map((d: any, idx: any) => {
                                  return (
                                    <div key={idx} className={`pb-1`}>
                                      {d.tit}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                    </div>
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
export default WorkEx;
