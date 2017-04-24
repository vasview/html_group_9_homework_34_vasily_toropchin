$(document).ready(function(){

	var open_modal = $('.call-us-btn');
  var overlay = $('.overlay');
  var modal = $('.modal');
  var close = $('.overlay');

  open_modal.click(function(){
    overlay.fadeIn(400, function(){
      $(modal).css('display', 'block').animate({top: '50%'}, 400);
    });
  });

  close.click(function(){
    modal.fadeOut(400, function(){
      modal.css('top', '20%');
    });
    overlay.fadeOut(400);
  })

  $(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 1500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});

		$("#btn-nav").click(function(){
			$(".menu-bar").slideToggle(500);
		});

		$("#btn-nav-mob").click(function(){
			$("#menu-bar-mob").slideToggle(500);
		});
});

	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		var mobileMenuPosition = $('#gallery-block').position().top;
		if (scrollPosition >= mobileMenuPosition) {
			$(".navigation-header").show();
		}
		else {
			$(".navigation-header").hide();
		}
	};
