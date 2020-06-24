import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgBreadcrumb01 from "../../../assets/images/img-breadcrumb-01.jpg";
import imgBreadcrumb02 from "../../../assets/images/img-breadcrumb-02.jpg";
import imgBreadcrumb03 from "../../../assets/images/img-breadcrumb-03.jpg";
import imgBreadcrumb04 from "../../../assets/images/img-breadcrumb-04.jpg";
import imgBreadcrumb05 from "../../../assets/images/img-breadcrumb-05.png";

class Breadcrumb extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="breadcrumb">
        <Slider
          ref={(c) => (this.slider = c)}
          {...settings}
          className="slick-img"
        >
          <div className="img-breadcrumb-01">
            <img src={imgBreadcrumb01} className="img-responsive" alt="img-breadcrumb"/>
          </div>

          <div className="img-breadcrumb-02">
            <img src={imgBreadcrumb02} className="img-responsive" alt="img-breadcrumb" />
          </div>

          <div className="img-breadcrumb-03">
            <img src={imgBreadcrumb03} className="img-responsive" alt="img-breadcrumb" />
          </div>

          <div className="img-breadcrumb-04">
            <img src={imgBreadcrumb04} className="img-responsive" alt="img-breadcrumb" />
          </div>

          <div className="img-breadcrumb-05">
            <img src={imgBreadcrumb05} className="img-responsive" alt="img-breadcrumb" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles)(Breadcrumb);
