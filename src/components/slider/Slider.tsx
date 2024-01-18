import React, { useEffect, useState } from "react";
import ArrowLeft from '../../assets/svgs/ArrowLeft.svg';
import ArrowRight from '../../assets/svgs/ArrowRight.svg'
import './slider.css'

export default (props:any) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1150px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const getStyles = (index:number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: isSmallScreen?"translateX(-100px) translateZ(-300px)": "translateX(-300px) translateZ(-400px)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform:isSmallScreen?"translateX(100px) translateZ(-300px)": "translateX(300px) translateZ(-400px)",
        zIndex: 9,
      };
    else
      return {
        opacity: 1,
        transform:isSmallScreen?"translateX(-300px) translateZ(-60px)": "translateX(-480px) translateZ(-100px)",
        zIndex: -1,
        display: "none",
      };
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {props.data.map((item:any, i:number) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns">
        <img src={ArrowLeft} alt='arrow' className="image" onClick={prev} />
        <img src={ArrowRight} alt='arrow'className="image" onClick={next} />
      </div>
    </>
  );
};

const SliderContent = (props:any) => {
  return (
    <div className="sliderContent">
    <img src={props.icon}  alt={props.icon}className="icon" />  
      <p className="desc">{props.desc}</p>
    </div>
  );
};
