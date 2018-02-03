import React ,{ Component} from "react";
import ReactDom,{render}  from "react-dom";
import { Carousel } from 'antd';
import "./App.css";

function onChange(a, b, c) {
    console.log(a, b, c);
}

ReactDom.render(
    <Carousel afterChange={onChange}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </Carousel>
    , window.root);
