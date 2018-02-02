$(function(){


	infiniteLoop(); //put because of 3000 delay in setInterval
	setInterval(infiniteLoop, 4000); 
	function infiniteLoop(){ 
		$("#triangle-group path").each(function(){
			var xP = Math.random()* 60 - 30 ;
			var yP = Math.random()* 60 - 30 ;
			var randomDegree = Math.random()*60 -30;
			var randomScale = Math.random()+ 0.3;
			TweenMax.set(this, {

			});

			TweenMax.to(this, 4, {
				x: xP,
				y: yP,
				scale: randomScale,
				transformOrigin: "50% 50%",
				rotation: randomDegree,
				ease:Power0.easeNone,
				// ease:Linear.easeOut
			}); 
		});
	};

	$("#nav-mini").on("click", function(){
		$('#nav').toggleClass("nav-modal");
		$(this).toggleClass("nav-close");

	});

	$('#lab-list a').click(function(e){
		var filename = $(this).attr('id');
		$('#lab-content').load("/lab/lab-list/"+filename+".html");
		e.preventDefault();
	});

	$('#portfolio-container a').click(function(e){
		$('#gallery-modal').load("/portfolio/portfolio-list/portfolio-1.html").show();
		e.preventDefault();
	})
});
