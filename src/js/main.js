$(function(){
/*================================
				COMMON
================================*/ 
	$.get("/header.html", function(data){
		$('#common-container').prepend(data);
		var browser=navigator.userAgent.toLowerCase();
		if(!(browser.indexOf('firefox') > -1)){
			var wholeItems = $('#logo-svg-items');
			var upperTag = $('#upper-tag');
			var lowerTag = $('#lower-tag');
			var slash = $('#slash');
			var text = $('#logo-svg-text');

			TweenMax.set(text, { x: 300});

			var tl = new TimelineMax();
			tl.pause();

			tl.to('#logo-svg', 0, {
				attr: {
					viewBox:'0 0 700 300'
				}
				})
			  .to(wholeItems, 0.2, {
				transformOrigin: "50% 50%",
				x: 5,
				rotation: -90,
				})
			  .to(lowerTag, 0.2, {
			  	y: 400 
				})
			  .to(slash, 0.2, {
			  	x: -15,
			  	y: 400,
			  	rotation: -20,
				}, "-=0.2")
			  .to(text, 0.2, {
				x:0,
				opacity:1
				}, "-=0.1")

			$('#logo-svg').mouseenter(function(){
				tl.play();
			});
			$('#logo-svg').mouseleave(function(){
				tl.reverse();
			});			
		}

		$("#nav-mini").on("click", function(){
			$('#nav').toggleClass("nav-modal");
			$(this).toggleClass("nav-close");

		});

		/* order of appearance*/


	});

	$.get("/footer.html", function(data){
		$('#common-container').append(data);
	});
/*================================
				HOME
================================*/
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


/*================================
				CONTACT
================================*/




/*================================
				LAB
================================*/


	$('#lab-list li').on('click', function(e){
		var filename = $(this).find('a').attr('id');
		$('#lab-content').load("/lab/lab-list/"+filename+".html");
	
		$('#lab-list li').removeClass("lab-hover-click");
		
		$(this).addClass("lab-hover-click");

	// 	$('#lab-list li').css({
	// 		'border-color':'var(--color-gallery-heading)',
	// 		'color':'var(--color-gallery-heading)'
	// 	});
	// 	$(this).css({
	// 		'border-color':'var(--color-blue)',
	// 		'color':'var(--color-blue)'
	// 	})
		e.preventDefault();
	// })
	// .hover(function(){
	// 	$(this).css({
	// 		// 'border-color':'var(--color-blue)',
	// 		'color':'var(--color-blue)'
	// 	})		
	// },function(){
	// 	$(this).css({
	// 		// 'border-color':'var(--color-gallery-heading)',
	// 		'color':'var(--color-gallery-heading)'
	// 	})		


	})
	.hover(function(){
		$(this).addClass('lab-hover-click');
	},function(){
		$(this).removeClass('lab-hover-click');
	});




/*================================
				ABOUT
================================*/

/*================================
				PORTFOLIO
================================*/


	$('#portfolio-container a').click(function(e){
		$('#gallery-modal').load("/portfolio/portfolio-list/portfolio-1.html").show();
		e.preventDefault();
	});





});















