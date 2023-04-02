import React from 'react';

const Specialty = () => {
  const items: Array<any> = [
    {
      id: 0,
      plan: [
        { id: 0, skill: `Jira` },
        { id: 1, skill: `Slack` },
        { id: 2, skill: `Sketch` },
        { id: 3, skill: `Figma` },
      ],
      design: [
        { id: 0, skill: `Illustratior` },
        { id: 1, skill: `Photoshop` },
      ],
      dev: [
        { id: 0, skill: `React` },
        { id: 1, skill: `React Native` },
      ],
      styled: [
        { id: 0, skill: `Styled Components` },
        { id: 1, skill: `TailwindCss` },
      ],
      data: [
        { id: 0, skill: `Context API` },
        { id: 0, skill: `GraphQL` },
        { id: 1, skill: `Tanstack Query` },
      ]
    },
  ];

  return (
    <>
      <div className={`lg: sm: m-auto max-w-[960px] px-10 px-10`}>
        <div className={`pb-8 text-[20px] font-bold`}>Specialty</div>
        <ol className="dark:border-gray-800 dark:text-gray-800 text-gray-800">
          <li>
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className={`font-bold`}>Plan & Design</div>
              <ol>
                <li>
                  <div className={`flex w-[300px] text-[14px] font-medium`}>
                    <>
                      {items &&
                        items.map((item, index) => {
                          return (
                            <div key={index} className={`flex`}>
                              {item &&
                                item.plan.map((v: any, id: any) => {
                                  return (
                                    <div key={id} className={`chip-w60`}>
                                      {v.skill}
                                    </div>
                                  );
                                })}
                            </div>
                          );
                        })}
                    </>
                  </div>
                  <div className={`flex w-[300px] pt-3 text-[14px] font-medium`}>
                    {items &&
                      items.map((item, index) => {
                        return (
                          <div key={index} className={`flex`}>
                            {item &&
                              item.design.map((v: any, id: any) => {
                                return (
                                  <div key={id} className={`chip`}>
                                    {v.skill}
                                  </div>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                </li>
              </ol>
            </div>
          </li>

          <li>
            <div className="mb-4 grid gap-4 sm:grid-cols-3">
              <div className={`font-bold`}>Develop</div>
              <ol>
                <li>
                  <div className={`flex w-[300px] text-[14px] font-medium`}>
                    {items &&
                      items.map((item, index) => {
                        return (
                          <div key={index} className={`flex`}>
                            {item &&
                              item.dev.map((v: any, id: any) => {
                                return (
                                  <div key={id} className={`chip`}>
                                    {v.skill}
                                  </div>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                  <div className={`flex w-[300px] pt-3 text-[14px] font-medium`}>
                    {items &&
                      items.map((item, index) => {
                        return (
                          <div key={index} className={`flex`}>
                            {item &&
                              item.styled.map((v: any, id: any) => {
                                return (
                                  <div key={id} className={`chip`}>
                                    {v.skill}
                                  </div>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                  <div className={`flex w-[325px] pt-3 text-[14px] font-medium`}>
                    {items &&
                      items.map((item, index) => {
                        return (
                          <div key={index} className={`flex`}>
                            {item &&
                              item.data.map((v: any, id: any) => {
                                return (
                                  <div key={id} className={`chip`}>
                                    {v.skill}
                                  </div>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                </li>
              </ol>
            </div>
          </li>
        </ol>
        <hr className={`my-14 h-[2px] border-0 bg-slate-300`} />
      </div>
    </>
  );
};
export default Specialty;
