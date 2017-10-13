/**
 * Created by Administrator on 2017/10/13.
 */
/*function setLeftNav(Pstr,str,Cstr) { /!*Pstr第一层元素,str第二层dt元素,Cstr受控制的dd元素*!/
    /!*console.log($($('.scroll-son').children('.list_dt').get(0)))*!/
    $($(Pstr).children(str).get(0)).attr("id","open").next().slideDown().siblings("dd").slideUp();
    $(str).on("click",function () {
        $(Cstr).stop();
        $(this).siblings("dt").removeAttr("id");
        if($(this).attr("id")=="open"){
            $(this).removeAttr("id").siblings("dd").slideUp();
        }else{
            $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
        }
    });
}*/
/*将左边导航封装成插件以便以后调用*/
jQuery.fn.setLeftNav =function(opts){
    return this.each(function(){
        $($(this).children(opts.clickHead).get(0)).attr("id","open").next().slideDown().siblings("dd").slideUp();
        $(opts.clickHead).on("click",function () {
            $(opts.upList).stop();
            $(this).siblings("dt").removeAttr("id");
            if($(this).attr("id")=="open"){
                $(this).removeAttr("id").siblings("dd").slideUp();
            }else{
                $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
            }
        });
    })
}
