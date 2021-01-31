import React, { PureComponent as Component } from "react";
import "../assets/css/hovertreeanswer.css";
import $ from "jquery";
import Nav from "../components/Nav/nav";
import swal from 'sweetalert';
import { withRouter } from "react-router-dom";

$.fn.answerSheet = function (options) {
    var defaults = {
        mold: 'card',
    };
    var opts = $.extend({},
        defaults, options);
    return $(this).each(function () {
        var obj = $(this).find('.card_cont');
        var _length = obj.length,
            _b = _length - 1,
            _len = _length - 1,
            _cont = '.card_cont';
        for (var a = 1; a <= _length; a++) {
            obj.eq(_b).css({
                'z-index': a
            });
            _b -= 1;
        }
        $(this).show();
        if (opts.mold === 'card') {
            obj.find('ul li label').click(function () {
                var _idx = $(this).parents(_cont).index(),
                    _cards = obj,
                    _cardcont = $(this).parents(_cont);
                if (_idx === _len) {
                    return;
                } else {
                    setTimeout(function () {
                            _cardcont.addClass('cardn');
                            setTimeout(function () {
                                    _cards.eq(_idx + 3).addClass('card3');
                                    _cards.eq(_idx + 2).removeClass('card3').addClass('card2');
                                    _cards.eq(_idx + 1).removeClass('card2').addClass('card1');
                                    _cardcont.removeClass('card1');
                                },
                                200);
                        },
                        100);
                }
            });
            $('.card_bottom').find('.prev').click(function () {
                var _idx = $(this).parents(_cont).index();
                obj.eq(_idx + 2).removeClass('card3').removeClass('cardn');
                obj.eq(_idx + 1).removeClass('card2').removeClass('cardn').addClass('card3');
                obj.eq(_idx).removeClass('card1').removeClass('cardn').addClass('card2');
                setTimeout(function () {
                        obj.eq(_idx - 1).addClass('card1').removeClass('cardn');
                    },
                    200);
            })
        }
    });
};
$(function(){
    $("#answer").answerSheet({});
})

class Question extends Component{
    static complete(){
        swal({
            title: "",
            text: "恭喜你完成所有问题！",
            type: 'success',
            confirmButtonColor:"#1aad19",
            confirmButtonText: "确定",
        });
    }
    render(){
        return(
            <div>
                <Nav />
                <div className="wrapper">
                    <h2 className="title">调查问卷</h2>
                    <div id="answer" className="card_wrap">
                        <div className="card_cont card1">
                            <div className="card">
                                <p className="question"><span>Q1、</span>你接触过的第一种框架是什么？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q1_1" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_1">Django</label>
                                    </li>
                                    <li>
                                        <input id="q1_2" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_2">Vue</label>
                                    </li>
                                    <li>
                                        <input id="q1_3" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_3">React</label>
                                    </li>
                                    <li>
                                        <input id="q1_4" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_4">Bootsrap</label>
                                    </li>
                                    <li>
                                        <input id="q1_5" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_5">其他</label>
                                    </li>
                                </ul>
                                <div className="card_bottom"><span><b>1</b>/5</span></div>
                            </div>
                        </div>
                        <div className="card_cont card2">
                            <div className="card">
                                <p className="question"><span>Q2、</span>你主要从事的开发设计工作是？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q2_1" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_1">Web前端</label>
                                    </li>
                                    <li>
                                        <input id="q2_2" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_2">安卓软件开发</label>
                                    </li>
                                    <li>
                                        <input id="q2_3" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_3">IOS软件开发</label>
                                    </li>
                                    <li>
                                        <input id="q2_4" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_4">网站、软件维护</label>
                                    </li>
                                    <li>
                                        <input id="q2_5" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_5">数据库开发管理</label>
                                    </li>
                                </ul>
                                <div className="card_bottom"><a href="#" className="prev">上一题</a><span><b>2</b>/5</span></div>
                            </div>
                        </div>
                        <div className="card_cont card3">
                            <div className="card">
                                <p className="question"><span>Q3、</span>你遇到问题喜欢在哪里寻找解决方案？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q3_1" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_1">何问起（http://hovertree.com/）</label>
                                    </li>
                                    <li>
                                        <input id="q3_2" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_2">博客园（http://www.cnblogs.com/）</label>
                                    </li>
                                    <li>
                                        <input id="q3_3" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_3">柯乐义（http://keleyi.com/）</label>
                                    </li>
                                    <li>
                                        <input id="q3_4" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_4">CSDN（http://www.csdn.net/）</label>
                                    </li>
                                    <li>
                                        <input id="q3_5" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_5">其他</label>
                                    </li>
                                </ul>
                                <div className="card_bottom"><a className="prev">上一题</a><span><b>3</b>/5</span></div>
                            </div>
                        </div>
                        <div className="card_cont">
                            <div className="card">
                                <p className="question"><span>Q4、</span>你开发中使用的主要操作系统是？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q4_1" type="radio" name="r-group-4"/>
                                        <label htmlFor="q4_1">Windows 10</label>
                                    </li>
                                    <li>
                                        <input id="q4_2" type="radio" name="r-group-4"/>
                                        <label htmlFor="q4_2">Windows 7</label>
                                    </li>
                                    <li>
                                        <input id="q4_3" type="radio" name="r-group-4"/>
                                        <label htmlFor="q4_3">Linux</label>
                                    </li>
                                    <li>
                                        <input id="q4_4" type="radio" name="r-group-4"/>
                                        <label htmlFor="q4_4">Mac OS</label>
                                    </li>
                                    <li>
                                        <input id="q4_5" type="radio" name="r-group-4"/>
                                        <label htmlFor="q4_5">其他</label>
                                    </li>
                                </ul>
                                <div className="card_bottom"><a className="prev">上一题</a><span><b>4</b>/5</span></div>
                            </div>
                        </div>
                        <div className="card_cont">
                            <div className="card">
                                <p className="question"><span>Q5、</span>你觉得下面哪个栏目最实用？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q5_1" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_1">网页特效 http://hovertree.com/menu/texiao/</label>
                                    </li>
                                    <li>
                                        <input id="q5_2" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_2">在线题库 http://hovertree.com/tiku/</label>
                                    </li>
                                    <li>
                                        <input id="q5_3" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_3">jQuery下载 http://hovertree.com/h/bjaf/ati6k7yk.htm</label>
                                    </li>
                                    <li>
                                        <input id="q5_4" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_4">图片 http://hovertree.com/hvtimg/</label>
                                    </li>
                                    <li>
                                        <input id="q5_5" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_5">代码 http://hovertree.com/code/</label>
                                    </li>
                                </ul>
                                <div className="card_bottom"><a herf="" className="prev">上一题</a><span><b>5</b>/5</span></div>
                            </div>
                        </div>
                        <div className="card_cont">
                            <div className="card">
                                <p className="question"></p>
                                <ul className="select">
                                    <li>感谢您的参与！
                                        更多信息请联系QQ1941816504。
                                    </li>
                                </ul>
                                <div className="card_bottom"><a className="prev">上一题</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onClick={Question.complete}>完成</a></div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                </div>
            </div>
        )
    }
}

export default withRouter(Question);