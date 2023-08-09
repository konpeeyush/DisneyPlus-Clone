import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, Wrap } from "./ImgSlider.styled";
import { slider_badag, slider_badaging, slider_scale, slider_scales } from "../../assets";

const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };


    return (
        <div>
            <Carousel {...settings}>
                <Wrap>
                    <a>
                        <img src={slider_badag} alt="" />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src={slider_badaging} alt="" />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src={slider_scale} alt="" />
                    </a>
                </Wrap>

                <Wrap>
                    <a>
                        <img src={slider_scales} alt="" />
                    </a>
                </Wrap>
            </Carousel>
        </div>
    )
};


export default ImgSlider;
