import React from "react";
import "../styles/public.scss";
import { StarTwoTone } from '@ant-design/icons';
import Nav from '../components/Nav/nav';

const total = 9;
const dishes = [
    {"pic":"bake1","name":"面包类","didCount":"7520","collect":"9714"},
    {"pic":"bake2","name":"蛋糕类","didCount":"7660","collect":"1514"},
    {"pic":"bake3","name":"西点类","didCount":"26320","collect":"7514"},
    {"pic":"bake4","name":"点心类","didCount":"75060","collect":"1714"},
    {"pic":"bake5","name":"糕饼类","didCount":"76260","collect":"5314"},
    {"pic":"bake6","name":"麻花类","didCount":"66260","collect":"2414"},
    {"pic":"bake7","name":"月饼类","didCount":"77260","collect":"9714"},
    {"pic":"bake8","name":"布丁类","didCount":"12260","collect":"4544"},
    {"pic":"bake9","name":"泡芙类","didCount":"29262","collect":"8714"}
];

export default class Bake extends React.Component{
    render() {
        return(
            <div>
                <Nav />
                <div className="top">
                    <img alt="" src={require("../assets/images/bake.jpg").default}/>
                    <div className="info">
                        <h1 className="title"> 烘焙</h1>
                        <p>烘焙食品它是以面粉、酵母、食盐、砂糖和水为基本原料，添加适量油脂、乳品、鸡蛋、添加剂等，经一系列复杂的工艺手段烘焙而成的方便食品。
                            它不仅具有丰富的营养，而且品类繁多，形色俱佳，应时适口，可以在饭前或饭后作为茶点品味，又能作为主食，还可以作为馈赠之礼品。</p>
                    </div>
                </div>
                <div className="content">
                    <h2>{total}大类</h2>
                    <div className="box">
                        {
                            dishes.slice(0,2).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                    <div className="box">
                        {
                            dishes.slice(2,4).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                    <div className="box">
                        {
                            dishes.slice(4,6).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                    <div className="box">
                        {
                            dishes.slice(6,8).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg").default} alt="" />
                                        <h3>{item.name}</h3>
                                        <h4>{item.didCount}&nbsp;人做过&nbsp;&nbsp;&nbsp;<StarTwoTone />&nbsp;{item.collect}</h4>
                                    </div>
                                )
                            })
                        } 
                    </div>
                </div>
            </div>
        )
    }
}