import React from "react";
import "../styles/public.scss";
import { StarTwoTone } from '@ant-design/icons';
import Nav from '../components/Nav/nav';

const total = 50;
const dishes = [
    {"pic":"pettitoes","name":"红焖猪脚","didCount":"7520","collect":"9714"},
    {"pic":"shish-kebab","name":"烤羊肉串","didCount":"7660","collect":"1514"},
    {"pic":"fish-head","name":"剁椒鱼头","didCount":"26320","collect":"7514"},
    {"pic":"chicken","name":"香菇滑鸡","didCount":"75060","collect":"1714"},
    {"pic":"cray","name":"麻辣小龙虾","didCount":"76260","collect":"5314"},
    {"pic":"beef","name":"小炒黄牛肉","didCount":"66260","collect":"2414"},
    {"pic":"soup","name":"冬瓜圆子汤","didCount":"77260","collect":"9714"},
    {"pic":"spicy-fish","name":"川香麻辣鱼","didCount":"12260","collect":"4544"},
    {"pic":"pork-chop","name":"黄金炸猪排","didCount":"29262","collect":"8714"}
];

export default class Meat extends React.Component{
    render() {
        return(
            <div>
                <Nav />
                <div className="top">
                    <img alt="" src={require("../assets/images/meat.jpg")}/>
                    <div className="info">
                        <h1>肉类</h1>
                        <p>肉类，是动物的皮下组织及肌肉，可以食用。
                        其富含大量的蛋白质和脂肪，以及卡路里，其属于酸性食物。肉类含蛋白质丰富，一般在10-20%之间。瘦肉比肥肉含蛋白质多。
                        等。它们都具有肉质细嫩鲜美、营养丰富的特点，是一些维生素、矿物质的良好来源。</p>
                    </div>
                </div>
                <div className="content">
                    <h2>{total}道菜</h2>
                    <div className="box">
                        {
                            dishes.slice(0,2).map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={require("../assets/images/"+item.pic+".jpg")} alt="" />
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
                                        <img src={require("../assets/images/"+item.pic+".jpg")} alt="" />
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
                                        <img src={require("../assets/images/"+item.pic+".jpg")} alt="" />
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
                                        <img src={require("../assets/images/"+item.pic+".jpg")} alt="" />
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