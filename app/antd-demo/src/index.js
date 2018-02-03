import React ,{ Component} from "react";
import ReactDom,{render}  from "react-dom";
import { Carousel } from 'antd';
import "./App.css";

function onChange(a, b, c) {
    console.log(a, b, c);
}

ReactDom.render(
    <Carousel afterChange={onChange}>
       <div>bbb</div>
    </Carousel>
    , window.root);
