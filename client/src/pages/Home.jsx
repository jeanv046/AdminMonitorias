import React from "react";
import Card from "../components/Card";
import { Carousel } from "@trendyol-js/react-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="content-carousel">
        <Carousel
          show={1}
          slide={1}
          swiping={true}
          swipeOn={1}
          leftArrow={
            <FontAwesomeIcon
              className="display-2 color-fffff cursor-pointer"
              icon={faCaretLeft}
            />
          }
          rightArrow={
            <FontAwesomeIcon
              className="display-2 color-fffff cursor-pointer"
              icon={faCaretRight}
            />
          }
        >
          <div className="">
            <Link className="text-dnone" to="/monitor">
              <Card title={"Monitores"} type={"monitor"} />
            </Link>
          </div>
          <div>
            <Link className="text-dnone" to="/monitorias">
            <Card title={"Monitorias"} type={"monitorias"} />
            </Link>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
