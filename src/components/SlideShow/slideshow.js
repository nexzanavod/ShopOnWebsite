import React from "react";
import Carousel from "react-elastic-carousel";
import "./slideshow.css";
import Item from './Item';


  
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow: 4},
  
  
];


function Slideshow() {  
  return (
    <>     
      <div className="Slideshow"  >
      
        <Carousel breakPoints={breakPoints}>
      <Item><img src="https://images-na.ssl-images-amazon.com/images/I/51j9PXMZ33L.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://images-na.ssl-images-amazon.com/images/I/51j9PXMZ33L.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://images-na.ssl-images-amazon.com/images/I/51j9PXMZ33L.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://images-na.ssl-images-amazon.com/images/I/51j9PXMZ33L.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property04.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property05.jpg"></img></Item>
      <Item><img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg"></img></Item>
      <Item> <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg"></img></Item>

         
                 
        </Carousel>
      
      </div>
    </>
  );
}
export default Slideshow;