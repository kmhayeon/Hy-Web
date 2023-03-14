import React from "react";
import workImg from "../assets/img/work/01.png";
import workImg_01 from "../assets/img/work/02.png";
import workImg_03 from "../assets/img/work/03.png";
import workImg_06 from "../assets/img/work/06.png";

const Portflio = () => {
  return (
    <>
      <div className={`lg: sm: m-auto max-w-[960px] px-10 px-10`}>
        <div className={`pb-8 text-[20px] font-bold`}>Portflio</div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <div>
            <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/12H8ONTRvwKPPzq8CTwDWfOpyUZTOaA0z/view?usp=sharing"
              target="_blank"
              className="work-container"
            >
              <img className={`m-auto h-fit w-full rounded`} src={workImg} alt={'work01'} />
            </a>
          </div>
          <div>
            <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1OArp7tiz1N_x1d8YdTPf40sJFiCB9dWq/view?usp=sharing"
              target="_blank"
              className="work-container"
            >
              <img className={`m-auto h-fit w-full rounded`} src={workImg_01} alt={'work02'} />
            </a>
          </div>
          <div>
            <a
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1O8qdLtRjSNMi0YgWMWJQTZoU8Y6q_h9n/view?usp=sharing"
              target="_blank"
              className="work-container"
            >
              <img className={`m-auto h-fit w-full rounded`} src={workImg_06} alt={'work03'} />
            </a>
          </div>
          <div>
            <a href="/" target="_blank" className="work-container" rel={"noreferer"}>
              <img className={`m-auto h-fit w-full rounded`} src={workImg_03} alt={'work04'}  />
            </a>
          </div>
        </div>
        <hr className={`my-14 h-[2px] border-0 bg-slate-600`} />
      </div>
    </>
  );
};
export default Portflio;
