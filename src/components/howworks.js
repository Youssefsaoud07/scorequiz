import { width } from 'dom-helpers'
import React from 'react'
import background from "../images/i3.jpg"
import Slider from "react-slick";
import './heros.css'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Howworks = () => {
    
    return (
        <div style={{ paddingBottom: 30, paddingTop: 30, marginBottom: 30 }}>
            <div>
                <h3>How it Works</h3>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative',width:'100%'}}>

               <div style={{width:'70%'}}>
                
                <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>First step</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Second Step</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Third Step</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(28).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Forth Step</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
            </div>
            <button class="button button3" style={{marginTop:30}}>Start Your Free Quiz</button>
            
        </div>
    )
}

export default Howworks
