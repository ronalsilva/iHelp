import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

export const CarouselContent = () => {
	return (
        <Carousel>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={require('../../assets/image/banner.png')} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
	)
}