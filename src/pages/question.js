import React, { PureComponent as Component } from "react";
import "../assets/css/hovertreeanswer.css";
import $ from "jquery";
import Nav from "../components/Nav/nav";
import swal from 'sweetalert';
import {withRouter} from "react-router-dom";

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
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        if(window.location.href === ("http://localhost:"+window.location.port+"/question")){
            window.location.href += "#";
            window.location.reload();
        }
    }

    complete = ()=>{
        // swal({
        //     title: "",
        //     text: "恭喜你完成所有问题！",
        //     type: 'success',
        //     confirmButtonColor:"#1aad19",
        //     confirmButtonText: "确定",
        // });
        swal({
            text: "恭喜你完成所有问题！",
            content: "",
            buttons: {
              confirm: {
                /*
                 * We need to initialize the value of the button to
                 * an empty string instead of "true":
                 */
                value: "",
              },
            },
          })
          .then(() => {
            this.props.history.push("/home");
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
                                <p className="question"><span>Q1、</span>你最喜欢做什么菜？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q1_1" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_1">糖醋排骨</label>
                                    </li>
                                    <li>
                                        <input id="q1_2" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_2">红烧里脊</label>
                                    </li>
                                    <li>
                                        <input id="q1_3" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_3">剁椒鱼头</label>
                                    </li>
                                    <li>
                                        <input id="q1_4" type="radio" name="r-group-1"/>
                                        <label htmlFor="q1_4">香菇滑鸡</label>
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
                                <p className="question"><span>Q2、</span>你经常使用APP做菜吗？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q2_1" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_1">总是</label>
                                    </li>
                                    <li>
                                        <input id="q2_2" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_2">经常</label>
                                    </li>
                                    <li>
                                        <input id="q2_3" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_3">偶尔</label>
                                    </li>
                                    <li>
                                        <input id="q2_4" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_4">几乎不</label>
                                    </li>
                                    <li>
                                        <input id="q2_5" type="radio" name="r-group-2"/>
                                        <label htmlFor="q2_5">从不</label>
                                    </li>
                                </ul>
                                <div className="card_bottom"><a href="#" className="prev">上一题</a><span><b>2</b>/5</span></div>
                            </div>
                        </div>
                        <div className="card_cont card3">
                            <div className="card">
                                <p className="question"><span>Q3、</span>你认为这款APP有什么不足之处？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q3_1" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_1">很好，没问题</label>
                                    </li>
                                    <li>
                                        <input id="q3_2" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_2">基本满足用户需求</label>
                                    </li>
                                    <li>
                                        <input id="q3_3" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_3">功能简陋</label>
                                    </li>
                                    <li>
                                        <input id="q3_4" type="radio" name="r-group-3"/>
                                        <label htmlFor="q3_4">样式简单</label>
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
                                <p className="question"><span>Q4、</span>你开发APP中使用的主要操作系统是？</p>
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
                                <p className="question"><span>Q5、</span>你第一次使用的框架是什么？</p>
                                <ul className="select">
                                    <li>
                                        <input id="q5_1" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_1">React</label>
                                    </li>
                                    <li>
                                        <input id="q5_2" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_2">Vue</label>
                                    </li>
                                    <li>
                                        <input id="q5_3" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_3">Django</label>
                                    </li>
                                    <li>
                                        <input id="q5_4" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_4">Bootsrap</label>
                                    </li>
                                    <li>
                                        <input id="q5_5" type="radio" name="r-group-5"/>
                                        <label htmlFor="q5_5">其他</label>
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
                                <div className="card_bottom"><a className="prev">上一题</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onClick={this.complete}>完成</a></div>
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