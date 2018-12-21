var _this
// vue实例
var app = new Vue({
    el: '#app',
    mounted() {
        _this = this
    },
    data() {
        return {
            initInfo: '',
            nsdetail: {
                wyz: {
                    name: '吴彦祖',
                    sheight: '183CM',
                    jineng: '设计师'
                },
                wyf: {
                    name: '吴亦凡',
                    sheight: '187cm',
                    jineng: '蓝球'
                },
                cxk: {
                    name: '蔡徐坤',
                    sheight: '183cm',
                    jineng: '蓝球'
                },
                zyx: {
                    name: '张艺兴',
                    sheight: '178cm',
                    jineng: '舞蹈'
                },
                lh: {
                    name: '鹿晗',
                    sheight: '178cm',
                    jineng: '舞蹈'
                },
                pyy: {
                    name: '彭于晏',
                    sheight: '182cm',
                    jineng: '健身'
                },
                rh: {
                    name: '如花',
                    sheight: '170cm',
                    jineng: '惹人喜爱'
                },
                gxs: {
                    name: '高老师',
                    sheight: '178cm',
                    jineng: '紧'
                }
            },
            tdArea: {
                op1: [{
                        className: 'luck-unit-0',
                        name: '吴彦祖',
                        type: 'wyz',
                        bkImg: './img/wyz.jpeg'
                    },
                    {
                        className: 'luck-unit-1',
                        name: '彭于晏',
                        type: 'pyy',
                        bkImg: './img/pyy.jpeg'
                    }, {
                        className: 'luck-unit-2',
                        name: '高老师',
                        type: 'gxs',
                        bkImg: './img/gxs.jpg'

                    }
                ],
                op2: [{
                    className: 'luck-unit-7',
                    name: '吴亦凡',
                    type: 'wyf',
                    bkImg: './img/wyf.jpeg'
                }, {
                    className: 'cjBtn',
                    name: '',
                    bkImg: '',
                    id: 'btn'
                }, {
                    className: 'luck-unit-3',
                    name: '蔡徐坤',
                    type: 'cxk',
                    bkImg: './img/cxk.jpg'
                }],
                op3: [{
                        className: 'luck-unit-6',
                        name: '鹿晗',
                        type: 'lh',
                        bkImg: './img/lh.jpg'
                    },
                    {
                        className: 'luck-unit-5',
                        type: 'rh',
                        name: '如花',
                        bkImg: './img/rh.jpg'
                    }, {
                        className: 'luck-unit-4',
                        type: 'zyx',
                        name: '张艺兴',
                        bkImg: './img/zyx.jpeg'
                    }
                ]
            }
        }
    },
    methods: {
        open() {}
    }
})
// 选咋混
var luck = {
    index: 0, //当前转动到哪个位置，起点位置
    count: 0, //总共有多少个位置
    timer: 0, //setTimeout的ID，用clearTimeout清除
    speed: 20, //初始转动速度
    times: 0, //转动次数
    cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
    prize: -1, //中奖位置
    init: function(id) {
        if ($("#" + id).find(".luck-unit").length > 0) {
            $luck = $("#" + id);
            $units = $luck.find(".luck-unit");
            this.obj = $luck;
            this.count = $units.length;
            $luck.find(".luck-unit-" + this.index).addClass("active");
        };
    },


    roll: function() {
        var index = this.index;
        var count = this.count;
        var luck = this.obj;
        $(luck).find(".luck-unit-" + index).removeClass("active");
        index += 1;
        if (index > count - 1) {
            index = 0;
        };
        $(luck).find(".luck-unit-" + index).addClass("active");
        this.index = index;
        return false;
    },
    stop: function(index) {
        this.prize = index;
        return false;
    }
};


function roll() {
    luck.times += 1;
    luck.roll();
    if (luck.times > luck.cycle + 10 && luck.prize == luck.index) {
        clearTimeout(luck.timer);
        luck.prize = -1;
        luck.times = 0;
        click = false;
        // 回调
        let whoise = $("td.active").attr('typep')
        console.log(whoise)
        _this.initInfo = _this.nsdetail[whoise]
    } else {
        if (luck.times < luck.cycle) {
            luck.speed -= 10;
        } else if (luck.times == luck.cycle) {
            // var index = Math.random() * (luck.count) | 0;
            // var index = 2;
            var index = Math.floor(Math.random() * 8)
            console.log(index)
            luck.prize = index; //最终中奖位置
        } else {
            if (luck.times > luck.cycle + 10 && ((luck.prize == 0 && luck.index == 7) || luck.prize == luck.index + 1)) {
                luck.speed += 110;
            } else {
                luck.speed += 20;
            }
        }
        if (luck.speed < 40) {
            luck.speed = 40;
        };

        luck.timer = setTimeout(roll, luck.speed);
    }
    return false;
}


var click = false;
window.onload = function() {
    luck.init('luck');
    $("#btn").click(function() {
        /*//按下弹起效果
        $("#btn").addClass("cjBtnDom");
        setTimeout(function(){  
            $("#btn").removeClass("cjBtnDom");
        },200);*/


        if (click) {
            return false;
        } else {
            luck.speed = 100;
            roll();
            click = true;
            return false;
        }

    });
};
//播报
var demo = document.getElementById("demo");
var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
demo2.innerHTML = document.getElementById("demo1").innerHTML;

function Marquee() {
    if (demo.scrollLeft - demo2.offsetWidth >= 0) {
        demo.scrollLeft -= demo1.offsetWidth;
    } else {
        demo.scrollLeft++;
    }
}
setInterval(Marquee, 10);