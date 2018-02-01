$(function(){

	setInterval(infiniteLoop, 3000);
	function infiniteLoop(){ 
		$("#triangle-group path").each(function(){
			var xP = Math.random()* 60 - 30 ;
			var yP = Math.random()* 60 - 30 ;
			var randomDegree = Math.random()*60 -30;
			TweenMax.set(this, {

			});

			TweenMax.to(this, 3, {
				x: xP,
				y: yP,
				transformOrigin: "50% 50%",
				rotation: randomDegree,
				// ease:Power0.easeNone,
				ease:Linear.easeOut
			}); 
		});
	};

	$("#nav-mini").on("click", function(){
		$("#nav").addClass("nav-modal");
		$("#nav").show();
		$("#nav-close").show();
	})
	$("#nav-close").on("click", function(){
		$("#nav").removeClass("nav-modal");
		$(this).hide();
	})
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