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
                <img style={{width:"30px"}} src={close} alt="" />
              </div>
              {/* <img  className='close' onClick={()=>setShowLight(false)} src={close} alt="" /> */}
              {photo < imgs.length - 1 && (
                <span
                  onClick={() => setPhoto((prev) => prev + 1)}
                  className="next"
                >
                  <img style={{width:"50px"}} src={next} alt="" />
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
                  <img style={{width:"20px"}} src={close} alt="" />
              </div>
              {photo < imgs.length - 1 && (
                <div
                  onClick={() => setPhoto((prev) => prev + 1)}
                  className="next"
                >
                  <img src={next} alt="" />
                </div>
              )}
              {photo > 0 && (
                <div
                  onClick={() => setPhoto((prev) => prev - 1)}
                  className="previous"
                >
                 <img src={previous} alt="" />
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
