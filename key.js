function key(){
    //初始化
    this.init();
    //按钮控制
    this.btn()
    //游戏分数及游戏结束控制
    
    //游戏难度的设置
    // this.nandu()
    this.b =0
    this.j = 0
    this.g=0
    var divs = [];
    var e = 0
    
}
key.prototype = {
    init(){
        this.js = document.querySelector(".end")
        this.ks = document.querySelector(".start");
        this.sd = document.querySelector(".sp");
        this.nd = document.querySelector(".nandu")
        this.box = document.querySelector(".box")
        this.nandushezhi = document.querySelector(".nandushezhi")
        this.nandu1 = document.querySelectorAll(".nandushezhi li")
        this.cai = document.querySelector(".cai")
    },
    btn(){
        var that = this;
        
        that.cai.onclick = function () {
            that.box.style.display = ("block")
        }
        that.sd.onclick = function () {
           alert("回到游戏？")
        }
        that.nd.onclick = function () {
            that.nandushezhi.style.display = "block"
            that.box.style.display = "none"
           
        }
        for (i = 0; i < that.nandu1.length; i++) {
            that.nandu1[i].onclick = function() {
                that.box.style.display = "block"
                that.nandushezhi.style.display = "none"
                that.b = this.dataset.index;
            }
        }
        that.ks.onclick = function () {
            that.j = 1;
            that.box.style.display = "none"  
           that.fen()
            that.dong()
            
        }
        that.js.onclick = function () {
            alert("确认退出？");
            history.go(0);
        }
    },
    
    fen(){
        var that = this
        var letter = ["G", "H", "T",];
        var body = document.querySelector("body")
        var divs = [];
        
       
        function creat() {
            var current = [];
           
            for (var i = 0; i < that.b; i++) {
                current.push(letter[Math.floor(letter.length * Math.random())]);
               
            }
            for (var i = 0; i < current.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = current[i];
                div.style.cssText = "width:100px;height:100px;position:absolute;left:" + (300 + document.body.offsetHeight * Math.random()) + "px;top:-200px;background:rgba(" + (255 * Math.random()) + "," + (255 * Math.random()) + "," + (255 * Math.random()) + ",1);line-height:100px;text-align:center;font-size:" + 100 * Math.random() + "px;"
                document.documentElement.appendChild(div);
                divs.push(div);
               
            }
            
        }
        creat(that.b);
       that.divs = divs
        console.log(that.divs)
    },
    dong(){
        var that = this
        var speed = 50;
        var ci = 1;
       
        setInterval(function () {
            if (that.j == 1) {
                for (var i = 0; i < that.divs.length; i++) {
                   
                   if (that.divs[i].offsetTop >= document.body.offsetHeight) {
                        alert(that.divs.length)
                        ci++
                        document.documentElement.removeChild(that.divs[i]);
                        that.divs.splice(i,1);
                        that.fen()
                    }else{
                   
                    that.divs[i].style.top = that.divs[i].offsetTop + speed + "px";
                   }
                    if (ci > 3) {
                        alert("游戏失败:是否重新开始");
                        j = 0;
                        ci = 1;
                        history.go(0);
                    }
                }
            }
        }, 500);
        var that = this
        document.onkeydown = function (ev) {
            if (that.j == 1) {
                var letters = String.fromCharCode(ev.keyCode);

                for (var i = 0; i < that.divs.length; i++) {
                    if (that.divs[i].innerHTML == letters) {
                        document.documentElement.removeChild(that.divs[i]);
                        
                       

                        that.fen();
                        break;
                    }

                }
            }

        }
    },
   

}
