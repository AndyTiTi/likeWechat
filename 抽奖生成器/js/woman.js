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
                    dlrb: {
                        name: '迪丽热巴',
                        sheight: '168CM',
                        jineng: '舞蹈'
                    },
                    yz: {
                        name: '杨紫',
                        sheight: '167cm',
                        jineng: '杂技'
                    },
                    msc: {
                        name: '马思纯',
                        sheight: '170cm',
                        jineng: '微笑'
                    },
                    glnz: {
                        name: '古力娜扎',
                        sheight: '172cm',
                        jineng: '舞蹈'
                    },
                    zly: {
                        name: '赵丽颖',
                        sheight: '165cm',
                        jineng: '补刀'
                    },
                    zta: {
                        name: '张天爱',
                        sheight: '168cm',
                        jineng: '健身'
                    },
                    rh: {
                        name: '如花',
                        sheight: '170cm',
                        jineng: '惹人喜爱'
                    },
                    kls: {
                        name: '孔连顺',
                        sheight: '175cm',
                        jineng: '美丽动人'
                    }
                },
                tdArea: {
                    op1: [{
                            className: 'luck-unit-0',
                            name: '迪丽热巴',
                            type: 'dlrb',
                            bkImg: './img/dlrb.jpg'
                        },
                        {
                            className: 'luck-unit-1',
                            name: '杨紫',
                            type: 'yz',
                            bkImg: './img/yz.jpg'
                        }, {
                            className: 'luck-unit-2',
                            name: '张天爱',
                            type: 'zta',
                            bkImg: './img/zta.jpg'

                        }
                    ],
                    op2: [{
                        className: 'luck-unit-7',
                        type: 'kls',
                        name: '孔连顺',
                        bkImg: './img/kls.jpg'

                    }, {
                        className: 'cjBtn',
                        name: '',
                        bkImg: '',
                        id: 'btn'
                    }, {
                        className: 'luck-unit-3',
                        name: '赵丽颖',
                        type: 'zly',
                        bkImg: './img/zly.jpg'
                    }],
                    op3: [{
                            className: 'luck-unit-6',
                            name: '马思纯',
                            type: 'msc',
                            bkImg: './img/msc.jpeg'
                        },
                        {
                            className: 'luck-unit-5',
                            type: 'rh',
                            name: '如花',
                            bkImg: './img/rh.jpg'
                        }, {
                            className: 'luck-unit-4',
                            name: '古力娜扎',
                            type: 'glnz',
                            bkImg: './img/glnz.jpg'
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