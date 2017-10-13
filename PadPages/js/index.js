/**
 * Created by Administrator on 2017/10/12.
 */
window.onload=function () {
    var leftDOM = document.getElementById('left')
    var leftWidth = leftDOM.clientWidth
    var barHeight = document.getElementsByClassName('bar')
    var rightDOM = document.getElementsByClassName('right')
    console.log(document.documentElement.clientWidth)
    console.log(leftWidth)
    leftDOM.style.height = document.documentElement.clientHeight-barHeight[0].offsetHeight+"px"
    rightDOM[0].style.width = (document.documentElement.clientWidth-leftWidth)*0.98+"px"
    chekedUser()
    /*使用leftNav*/
    $(".scroll-son").setLeftNav({
        clickHead:".list_dt",
        upList:".list_dd"
    })
}

/*var selectUserPanel = document.getElementsByClassName('selectUser')*/
var MaskPanel = document.getElementsByClassName('Mask')
function selectUser() {
    MaskPanel[0].style.display = "block"
}

function chekedUser() {
    $(".selectUser p").click(function(){
        $('#userName').val(this.id)
        MaskPanel[0].style.display = "none"
    });
    $(".Mask").click(function () {
        MaskPanel[0].style.display = "none"
    })
}


