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
			$('#common-container').toggleClass("stopscroll");

		});

	});

	$.get("/footer.html", function(data){
		$('#common-container').append(data);
	
	});
/*================================
				HOME
================================*/
	let $triangles = ('#triangle-group path');
	function setIntervalAndExecute(){
		rotateTriangles();
		setInterval(rotateTriangles, 4000); 
	}
	function rotateTriangles(){ 
		$($triangles).each(function(){
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
	let htl= new TimelineMax();

	htl.set($triangles, {scale:0, opacity:0 ,transformOrigin: '50% 50%'})
		.to($('#intro-text p:nth-child(1)'), 1, {text: "Hello,", ease:Linear.easeNone})
	    .to($('#intro-text p:nth-child(2)'), 1.5, {text: "I'm Seonah.", ease:Linear.easeNone}, '+=0.5')
		.to($('#intro-text p:nth-child(3)'), 2, {text: "Creative Developer", ease:Linear.easeNone}, '+=0.5')
		.fromTo($('#intro-text p:nth-child(4)'), 0.5, {x: '50px', opacity:0.2},{x:0, opacity:1, text: {value: "Driven", delimiter:" " }, ease:Linear.easeNone}, '+=0.5')
		.fromTo($('#intro-text p:nth-child(5)'), 0.5, {x: '50px', opacity:0.2},{x:0, opacity:1, text: {value: "- Passion", delimiter:" " }, ease:Linear.easeNone})
		.fromTo($('#intro-text p:nth-child(6)'), 0.5, {x: '50px', opacity:0.2},{x:0, opacity:1, text: {value: "- Fun", delimiter:" " }, ease:Linear.easeNone})
		.to($triangles, 2,{scale:1, opacity:1, onComplete: setIntervalAndExecute}, '-=1' )

/*================================
				CONTACT
================================*/
	let ctl = new TimelineMax();

	let contactArray = $('#contact-info > *');

	ctl.staggerFrom(contactArray, 1, {opacity:0, x:'40rem'}, 0.1);


/*================================
				LAB
================================*/


	$('#lab-list li').on('click', function(e){
		let filename = $(this).find('a').attr('id');
		$('#lab-content').load("/lab/lab-list/"+filename+".html");
		console.log('hello');
		$('#lab-list li').removeClass("lab-hover-click");
		$(this).addClass("lab-hover-click");
		$('#lab-content').css({
			'background-color':'white',
			'color':'black'
		})
	})

	let ltl = new TimelineMax(),
		labArray = $('#lab-list li'),
		labContent=$('#lab-content');

	ltl.staggerFrom(labArray, 1, {opacity:0, x:'40rem'}, 0.1)
		.from(labContent, 1, {opacity:0, x:'40rem'}, '-=0.5')





/*================================
				ABOUT
================================*/

	// function rotatePics(s){
	// 	let images = s.find('img');
	// 	let d=3000;
	// 	let f=2000;
	// 	function iteratePics(){
	// 		for(let i=1 ; i<=images.length ;i++){
	// 			s.find('img:nth-child('+i+')').fadeIn(f).delay(d) ;
	// 			images.fadeOut(f).delay(d);
	// 			if(i==images.length){
	// 				console.log(this+i);
	// 			}
	// 			setTimeout(function(){

	// 			}, d*1000)
	// 		}	
	// 	}
	// 	iteratePics();		

	// }

function wrapShow(sel) {
	var slideIndex = 0;
	showSlides(sel);
	function showSlides(sel) {
	    var i;
	    var slides = sel.find('img')
	    for (i = 0; i < slides.length; i++) {
	    	console.log(slides[i])
	       	slides.eq(i).hide();
	    }

	    slideIndex++;
	    if (slideIndex > slides.length) {
	    	slideIndex = 1
	    }    
	    slides.eq(slideIndex-1).show(); 
	    
	    setTimeout(showSlides, 4000, sel); 
	}
}	

wrapShow($('.mySlides1'));
wrapShow($('.mySlides2'));
wrapShow($('.mySlides3'));
wrapShow($('.mySlides4'));


/*================================
				PORTFOLIO
================================*/


	$('#portfolio-container a').on('click',function(e){
		let filename = $(this).attr('href');
		let title = $(this).find('h3').text();

		$('#gallery-modal').load(filename, function(){
			$('#gallery-modal h1').text(title);
		}).show();
		e.preventDefault();


		$('#close-gallery').show();
		$('#common-container').addClass("modal-open");
	});

	$('#close-gallery').on('click', function(e){
		$('#gallery-modal').hide();
		$(this).hide();
		$('#common-container').removeClass("modal-open");
	})


});















