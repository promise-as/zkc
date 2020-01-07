
$(".information li i").eq(0).css({
	"color": "#cf3340"
});

$(".information li i").eq(1).css({
	"color": "#cf3340"
});

$(".information li i").eq(2).css({
	"color": "#cf3340"
});

$(function(){
	jQuery.qinXue2=function(ele1,ele2){
			$(ele1).hover(function(){
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$(ele2).eq(_index).show().siblings().hide();
		});	
	};
	$.qinXue2(".search-letter dd a",".slide-letter ul li");
})

//筛选
!function(){
	$(".have-choose").hide();
	$(".all-course-right").show();
	$(".shouqi").hide();
	$($(".filter-options ul li:last")).show().siblings().hide();
	$(".last-li").show();
	$(".all-course-right p").click(function(){
		$(this).parent().hide();
		$(".have-choose").show();
		$($(".filter-options ul li")).show();
		$(".shouqi").show();
	})
	$(".shouqi").click(function(){
		$(this).parent().hide();
		$($(".filter-options ul li:last")).show().siblings().hide();
		$(".all-course-right").show();
	})	
}();

$('#foot_fenzhan span').hover(function(){
    $(this).addClass('cur').siblings().removeClass('cur')
    $(this).parents('#foot_fenzhan').find('p').removeClass('show').eq($(this).index()).addClass('show')
})

$(function(){
	//导航链接更换
    if($('span.all-type').data('encity')!= undefined)
    {
        var enCity  = $('span.all-type').data('encity') ? $('span.all-type').data('encity').replace(/[\_]/g, "") : 'cn';
        $.ajax({
            type:"GET",
            url:"/peixun/chinaNav/"+enCity+"/",
            dataType:"html",
            success:function(data){
                $('li.menu-btn .menu').append(data)
                //头部下拉菜单
                $('.menu-btn').hover(function(){
                    var $this = $(this);
                    if ($('.menu',$this).size()>=1 && $('.menu',$this).hasClass('hide')) {
                        $('.menu',$this).show();
                    }
                },function(){
                    var $this = $(this);
                    if ($('.menu',$this).size()>=1 && $('.menu',$this).hasClass('hide')) {
                        $('.menu',$this).hide();
                    }
                })
                $('.menu>ul>li').hover(function(){
                    var $this = $(this);
                    $this.addClass('cur');
                    if ($('ul',$this).size()>=1) {
                        $('ul',$this).show();
                    }
                },function(){
                    var $this = $(this);
                    $this.removeClass('cur');
                    if ($('ul',$this).size()>=1) {
                        $('ul',$this).hide();
                    }
                })
            },
            error:function(jqXHR){

            }
        });
    }
})

$(".t img").attr("src","https://img.thea.cn/public/platform/thea/201809/qlp/zkc/images/tip.jpg?1")

// author: HongBaojin 2010-01-07
$(function(){
    $('.px-btn').click(function(){
        $('#popup').show();
    })
    $('.popup-close').click(function(){
        $('#popup').hide();
    })
})
