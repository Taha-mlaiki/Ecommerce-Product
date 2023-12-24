import React, { useState } from "react";
import img1_thumb from "../assets/images/image-product-1-thumbnail.jpg";
import img2_thumb from "../assets/images/image-product-2-thumbnail.jpg";
import img3_thumb from "../assets/images/image-product-3-thumbnail.jpg";
import img4_thumb from "../assets/images/image-product-4-thumbnail.jpg";
import img1 from "../assets/images/image-product-1.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import close from "../assets/images/icon-close.svg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";
import "./lightbox.css";
const LightBox = () => {
  const thumbnails = [img1_thumb, img2_thumb, img3_thumb, img4_thumb];

  const imgs = [img1, img2, img3, img4];

  const [photo, setPhoto] = useState(0);

  const [showLight, setShowLight] = useState(false);

  return (
    <>
      <div className="phone">
        <div className="position-relative">
          {photo < imgs.length - 1 && (
            <span onClick={() => setPhoto((prev) => prev + 1)} className="next">
              <img src={next} alt="" />
            </span>
          )}
          <img
            onClick={() => setShowLight((prev) => !prev)}
            src={imgs[photo]}
            alt=""
          />
          {photo > 0 && (
            <span
              onClick={() => setPhoto((prev) => prev - 1)}
              className="previous"
            >
              <img src={previous} alt="" />
            </span>
          )}
        </div>
        {showLight && (
          <div className=" boxLight">
            <div className="box position-relative">
              <div className="close" onClick={() => setShowLight(false)}>
                <svg width="0" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              {/* <img  className='close' onClick={()=>setShowLight(false)} src={close} alt="" /> */}
              {photo < imgs.length - 1 && (
                <span
                  onClick={() => setPhoto((prev) => prev + 1)}
                  className="next"
                >
                  <img src={next} alt="" />
                </span>
              )}
              {photo > 0 && (
                <span
                  onClick={() => setPhoto((prev) => prev - 1)}
                  className="previous"
                >
                  <img src={previous} alt="" />
                </span>
              )}
              <div className="img">
                <img src={imgs[photo]} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="other-device">
        <div className="box pe-4 mx-auto ">
          <div className="img">
            <img
              onClick={() => setShowLight((prev) => !prev)}
              src={imgs[photo]}
              alt=""
            />
          </div>
          <div className="img-thumb p-2 d-flex justify-content-between">
            <img onClick={() => setPhoto(0)} src={img1_thumb} alt="" />
            <img onClick={() => setPhoto(1)} src={img2_thumb} alt="" />
            <img onClick={() => setPhoto(2)} src={img3_thumb} alt="" />
            <img onClick={() => setPhoto(3)} src={img4_thumb} alt="" />
          </div>
        </div>
        {showLight && (
          <div className=" boxLight">
            <div className="box position-relative">
              <div className="close" onClick={() => setShowLight(false)}>
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              {photo < imgs.length - 1 && (
                <div
                  onClick={() => setPhoto((prev) => prev + 1)}
                  className="next"
                >
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2 1 8 8-8 8"
                      stroke="#1D2026"
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {photo > 0 && (
                <div
                  onClick={() => setPhoto((prev) => prev - 1)}
                  className="previous"
                >
                  <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1 3 9l8 8"
                      stroke="#1D2026"
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              )}
              <div className="img">
                <img src={imgs[photo]} alt="" />
              </div>
              <div className="img-thumb p-2 px-4 d-flex justify-content-between">
                <img onClick={() => setPhoto(0)} src={img1_thumb} alt="" />
                <img onClick={() => setPhoto(1)} src={img2_thumb} alt="" />
                <img onClick={() => setPhoto(2)} src={img3_thumb} alt="" />
                <img onClick={() => setPhoto(3)} src={img4_thumb} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LightBox;
