import React, { Fragment, Suspense, useState } from "react";
import { extrenalFils } from "../../Asserts/extrenalFiles";

export const LargeMoreAboutCard = (props) => {
  const [on, setOn] = useState(false);

  const play = () => {
    if (!on) {
      setOn(!on);
      document.getElementById("myAudio").play();
    }
    if (on) {
      setOn(!on);
      document.getElementById("myAudio").pause();
    }
  };

  return (
    <Fragment>
      <Suspense fallback="loading..">
        <div
          className="hidden bg-fixed rounded-md shadow-lg p-2 m-2  lg:bg-current h-[30rem] lg:w-[46%] lg:flex justify-center items-center mb-3 saturate-[60%] hover:saturate-[100%]  transition-all"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.094), rgba(0, 0, 0, 0.924)),
                  url(${props.cardImg}) center/cover`,
            boxShadow: "4px 6px 12px -6px black",
          }}
        >
          <div className="cardContent text-white w-[80%]">
            <div className="cardTitle my-2">
              <span className="font-semibold text-xl">{props.cardTitle}</span>
              <audio id="myAudio" src={props.voiceSound}></audio>
              {/* <span
                className={` ${
                  on ? "fa-solid fa-pause" : "fa-solid fa-circle-play"
                } cursor-pointer mx-2`}
                onClick={() => play()}
              ></span> */}
            </div>
            <div className="cardDescription">{props.cardDescription}</div>
          </div>
        </div>
      </Suspense>
    </Fragment>
  );
};