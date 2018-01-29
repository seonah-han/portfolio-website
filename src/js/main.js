$(function(){

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