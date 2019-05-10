
	var index = 0;
	var time =null;
	var banner_width = $("#banner").css('width');
			banner_width = parseInt(banner_width);
//	console.log(banner_width);
	
	var banner = $("#banner-nav-list > li");
	
	 var time = setInterval(autoplay,1000)
	 function autoplay(){
		 if(index == banner.length){
			 
			 index = 1;
			 $("#img-list").css('left',0);
		 }else{
			index++;
		 }
		//  console.log(banner.length);
		//  console.log(index);
		 $("#img-list").animate({left: -index*banner_width+"px"},300);
         banner.eq(index == banner.length ? 0 :index).addClass('active').siblings().removeClass('active');
	 };
	  $("#banner").mouseenter(function(){
		  $("#arr").css({opacity: 0.8});
		  clearInterval(time);
	  });
	  $("#banner").mouseleave(function(){
		  $("#arr").css({opacity: 0});
		  time = setInterval(autoplay,1000);
	  });
	  $("#toLeft").on("click",function(){
			if(index == 0 ){
				index =banner.length;
				$("#img-list").css('left',-index*banner_width+"px");
			}
			index--;
			$("#img-list").animate({left: -index*banner_width+"px"},300);
			banner.eq(index == -1 ? banner.length :index).addClass('active').siblings().removeClass('active');
	  });
	  $("#toRight").on("click",function(){
			if(index == banner.length ){
				index = 0;
				$("#img-list").css('left',-index*banner_width+"px");
			}
			index++;
			$("#img-list").animate({left: -index*banner_width+"px"},300);
			banner.eq(index == banner.length ? 0 :index).addClass('active').siblings().removeClass('active');
	  });
	  banner.mouseenter(function(){
		 // alert(90);
		  index = banner.index(this);
			banner.eq(index).addClass('active').siblings().removeClass('active');
		  
		  $("#img-list").animate({left: -index*banner_width+"px"},300);
	  });

    