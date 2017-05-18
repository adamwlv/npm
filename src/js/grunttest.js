// JavaScript Document

$(document).ready(function(e) {
	setupMenu();
	setFooterDate();
	scrollToTop();
	menuMobile();
	mobileScrollToTop();
	mobileMenu();
	cookieClose();
  
    anchorScroll();
  	setupAnchorLinks();
	
	/***** Element Setup *****/
  
  	/*** Empty search ***/
  	$('.site-search-field').click(function(){
      if($(this).val() == 'Search this website') {
       	$(this).val(''); 
      }  
  	});
  
  
  
  
  	/*** Fill Search ***/
  	$('.site-search-field').focusout(function(){
      if($(this).val() == '') {
       	$(this).val('Search this website'); 
      }
  	});
  
  	/*** iFrame Overlay Fix **
  
  	if( $('iframe').length ) 
    {
         $("iframe").each(function(){
            var ifr_source = $(this).attr('src');
            var wmode = "wmode=transparent";
            if(ifr_source.indexOf('?') != -1) $(this).attr('src',ifr_source+'&'+wmode);
            else $(this).attr('src',ifr_source+'?'+wmode);
        });
    }*/
  
	
	// Checkbox and radio buttons
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-blue',
		radioClass: 'iradio_square-blue'
	});
  
  	// Sub navigation
	if ($(".sub-nav")[0]){
		if ($(".pc-nav")[0]){
			formatMenu2(); // this is stored within t4.custom.js
		} else {
          	
			if ($(".news-drop")[0]){
              formatMenuNews(); // this is stored within t4.custom.js
            } else {
				formatMenu(); // this is stored within t4.custom.js
		
            }
        }
	}
	
 	 // News Subnav
  	if ($(".sub-nav-2")[0]){
    	var newHTML = $('.sub-nav-2').html();
      	$('.sub-nav-2').remove();
    	$('.sub-nav').empty().html(newHTML);
      
      
      	var newsId = $('.news-fulltext').attr('data-pageid');
      
      	$('.news-class-' + newsId).find('a').addClass('active');
      
    }
  
	$('input').on('ifChecked', function(event){
		a = $(this).attr('id');
		
		if(a == 'by_title_author') {
			$('.input-section-1').show();
			$('.input-section-2').hide();
		} else if(a == 'by_keywords') {
			$('.input-section-1').hide();
			$('.input-section-2').show();
		}
		
		$('.input-section-1').find('input').each(function() {
			$(this).val('');
		});
		$('.input-section-2').find('input').each(function() {
			$(this).val('');
		});
	});

	$('input').on('ifUnchecked', function(event){
	});
	
	// Datepicker
	$( "#datepicker" ).datepicker({ dateFormat: 'dd/mm/yy' });
	
	// Accordion
	$( "#accordion" ).accordion({
		heightStyle: "content"
	}); 
    
   
 

 $(".accordion .content").css( "display", "none" );
 $('.accordion .content').slideUp(200); 
 $(".accordion .accordion-row .tab-title").on("click", function(e){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(this).find("i").removeClass("fa-plus").removeClass("fa-minus").addClass("fa-plus");
    }else{
     // $(".accordion-row .tab-title i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(this).removeClass("active");
    $(this).addClass("active");
    //$('.accordion .content').slideUp(200);
    $(this).siblings('.content').slideDown(200);
    }
    
  });

  
var secondaryHeader = document.getElementsByClassName('secondary-nav');
if (secondaryHeader.length > 0) {
    // elements with class ".secondary-nav" exist
    $(".content-wrapper").addClass("secondary-header");
}
    
  
  $(function() {
    //var headerHeight="$('header').height()";
    
        $(".staff-profile #accordion").accordion({
            autoHeight: false,
            collapsible: true,
            heightStyle: "content",
            active: 0,
            animate: 300 // collapse will take 300ms
        });
        $('.staff-profile #accordion h3').bind('click',function(){
            var self = this;
            setTimeout(function() {
                theOffset = $(self).offset();
                $('body,html').animate({ scrollTop: theOffset.top - 100 });
            }, 310); // ensure the collapse animation is done
        });
});
  
	
	// Tabs
	$( "#tabs" ).tabs();
	
	// Scrolling Banners - Home page
	if ($(".image-slider")[0]){
		var unslider = $('.image-slider').unslider({
			speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 5000,              //  The delay between slide animations (in milliseconds)
			complete: function() {},  //  A function that gets called after every slide animation
			keys: true,               //  Enable keyboard (left, right) arrow shortcuts
			dots: true,               //  Display dot navigation
			fluid: false              //  Support responsive design. May break non-responsive designs
		});
	
		$('.unslider-arrow').click(function() {
			var fn = this.className.split(' ')[1];
			
			//  Either do unslider.data('unslider').next() or .prev() depending on the className
			unslider.data('unslider')[fn]();
		});
	}
	
	// Scrolling Banners - Content Page
	if ($(".banner")[0]){
		var unslider = $('.banner').unslider({
			speed: 500,               //  The speed to animate each slide (in milliseconds)
			delay: 5000,              //  The delay between slide animations (in milliseconds)
			complete: function() {},  //  A function that gets called after every slide animation
			keys: true,               //  Enable keyboard (left, right) arrow shortcuts
			dots: true,               //  Display dot navigation
			fluid: false              //  Support responsive design. May break non-responsive designs
		});
	
		$('.unslider-arrow').click(function() {
			var fn = this.className.split(' ')[1];
			
			//  Either do unslider.data('unslider').next() or .prev() depending on the className
			unslider.data('unslider')[fn]();
		});
	}
  
        
  	         
	/***** Element Setup *****/
	
});

$(window).resize(function(e) {
});

var largeMenu = true;
var menuOpen = false;

function setFooterDate() {
	var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} var today = dd+'/'+mm+'/'+yyyy;
	
	$('.current-year').html(yyyy + ' ');
}

function scrollToTop() {
	$('.back-to-top').click(function(e) {
        e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
    });	
}

function mobileMenu() {
	$('.navButton').click(function(e) {
		if ($(".secondary-nav")[0]) {
			$('.secondary-nav').switchClass("hiddenMenu", "showMenu", 500, "easeInOutQuad" );
		} else {
			$('nav').switchClass("hiddenMenu", "showMenu", 500, "easeInOutQuad" );
		}
	});
	$('.navClose').click(function(e) {	
		
		if ($(".secondary-nav")[0]) {
			$('.secondary-nav').switchClass("showMenu", "hiddenMenu", 500, "easeInOutQuad" );
		} else {
			$('nav').switchClass("showMenu", "hiddenMenu", 500, "easeInOutQuad" );
		}	
	});
}

function menuMobile() {
	$('.navClose').click(function(e) {	
		$('nav').switchClass("showMenu", "hiddenMenu", 500, "easeInOutQuad" );
		$('.navClose').switchClass("showMenuClose", "hiddenMenuClode", 500, "easeInOutQuad" );
	});
	$('.navButton').click(function(e) {
		$('nav').switchClass("hiddenMenu", "showMenu", 500, "easeInOutQuad" );
		$('.navClose').switchClass("hiddenMenuClode", "showMenuClose", 500, "easeInOutQuad" );
	});
}

function setupMenu() {
	$('nav ul li span').click(function(e) {
		var cc = $(this).attr('class');
		
		if(cc == 'active') {
			$(this).removeClass('active');
			$('nav ul li .dropdown').fadeOut();
			$('nav ul li a').removeClass('active');	
		} else {
			// Change button class
			$('nav ul li span').removeClass('active');	
			$('nav ul li a').removeClass('active');	
			$(this).addClass('active');
			$(this).parent().find('a').addClass('active');
			
			// Show/Hide dropdowns
			$('nav ul li .dropdown').fadeOut();
			$(this).parent().find('.dropdown').fadeIn();
		}
    });
}

function scrollOffset() {
  if ( $('header').css('position') === 'relative' ) {
    return 12;
  } else {
    return $('header div.container').outerHeight() + $('header div.secondary-nav').outerHeight() + 12;
  }
};

function anchorScroll() {
  
  setTimeout(function() {
    if(location.hash == '#nocourse'){
    	console.log("this has fired");
        $( "#no-course" ).show();
    }
    else if (location.hash) {
      if (largeMenu) {
      	transitionSmall();
      }
      window.scrollTo(0, 0);
  	}
	}, 1);
  
  if(window.location.hash) {
    
    var currentURL = window.location.href,
        hashID = currentURL.split("#");
    
    var escapedID = hashID[1].replace(/\./g,'\\.');
    
    if ($('#' + escapedID)[0]){
      setTimeout(function() {
     	var amountToScroll = $('#' + escapedID).offset().top - scrollOffset();
     	$("html, body").animate({ scrollTop:amountToScroll  }, "slow", headerTransitions());
      }, 500);
    } else {
      headerTransitions();
    }
  } else {
    headerTransitions();
  }
  
};

function setupAnchorLinks() {
  
  //removed to prevent jumping of window on click
  /*$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    if (largeMenu) {
    	transitionSmall();
    }
    $("html, body").animate({ scrollTop: $( $(this).attr('href') ).offset().top - scrollOffset() }, "slow");
    if(history.pushState) {
		history.pushState(null, null, $(this).attr('href') );
	} else {
		location.hash = $(this).attr('href');
	}
  });*/
  
	$(window).on("hashchange", function(){
      if(window.location.hash) {
		window.scrollTo(0, 0);
		if (largeMenu) {
			transitionSmall();
		}
		$("html, body").animate({ scrollTop: $( location.hash.replace( /(:|\.|\[|\]|,)/g, "\\$1" ) ).offset().top - scrollOffset() }, "slow");
      }
	});
};

function transitionLarge() {
	if ($(".secondary-nav")[0]){
		$('header').removeClass('dynamic-header-with-sub-nav');
	}
	
	largeMenu = true;
    $('header').removeClass('dynamic-header');
	$('.content-wrapper').removeClass('header-padding');
};

function transitionSmall() {
	if ($(".secondary-nav")[0]){
		$('header').addClass('dynamic-header-with-sub-nav');
	}
	
	largeMenu = false;
	$('header').addClass('dynamic-header');
	$('.content-wrapper').addClass('header-padding');
};

function headerTransitions() {
	if($(document).scrollTop() <= 179) {
		transitionLarge();
	} else {
		transitionSmall();
	};
	setTimeout(headerTransitions,  100);
};

function mobileScrollToTop() {
	$('body').append('<div class="scroll-to-top"></div>');
	$('.scroll-to-top').click(function(e) {
        e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "fast");
    });
	
	checkFromTop('first');
	
	$(window).scroll(function(){
		checkFromTop();
	});
	
	function checkFromTop(a) {
		if($(document).scrollTop() > 130) {
			$('.scroll-to-top').fadeIn();
		} else {
			if(a == 'first') {
				$('.scroll-to-top').hide();
			} else {
				$('.scroll-to-top').fadeOut();
			}
		}
	}
	
};


function cookieClose() {
	
	var cookieBannerShow = readCookie('cookieBanner');
	
	if(!cookieBannerShow) {
		
		$('.cookie-banner').html("<div class='container'>\
            	<p>We use cookies to provide you with a better service. Carry on browsing if you're happy with this, for more information please view our <a href='http://www.wlv.ac.uk/about-us/governance/legal-information/cookies/'>cookies page</a>.</p>\
                <span class='close-cookies'><a href='#' class='acceptCookies'></a></span>\
            </div>");
		
		$('.close-cookies').click(function(e) {
			e.preventDefault();
			$('.cookie-banner').animate({
				bottom: '-200px'
			}, 500);
		});
		
		createCookie('cookieBanner', true, 365);
	} else {
		$('.cookie-banner').hide();
	}
};

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


/* YA Select */

jQuery.fn.yaselect=function(e){e=e||{};return this.each(function(k,f){var a=jQuery(f).css({position:"absolute",top:0,left:0,zIndex:1}).addClass("yaselect-select"),c=jQuery('<div class="yaselect-wrap" tabindex="0"><div class="yaselect-current"></div></div>'),d=c.wrap('<div class="yaselect-anchor" style="position:relative;"></div>').parent(),j=function(){d.toggleClass("yaselect-open",a.is(":visible"))},g=function(){return a.find("option:nth("+(f.selectedIndex||0)+")").text()},h=c.find(".yaselect-current").text(g()),
i=function(b){a.blur();h.text(g());a.css({top:c.outerHeight()});b&&c.focus()};if(e.hoverOnly||window.navigator&&navigator.userAgent.match(/iphone|ipod|ipad/i))return a.before(d).css({opacity:0.0010}).change(function(){h.text(g())}).appendTo(d);a.before(d).keydown(function(b){if(b.which==13||b.which==32){b.preventDefault();i(true)}}).change(function(){h.text(g())}).blur(function(){a.hide();j()}).click(function(){if(a.is(":hidden")){a.show();j();setTimeout(function(){a.focus()})}else i(true)}).appendTo(d);
c.mousedown(function(){a.click()}).keydown(function(b){switch(b.which){case 13:case 32:case 37:case 38:case 39:case 40:b.preventDefault();a.click()}});f.size=Math.min(f.options.length,e.size||10);i()})};

/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
 
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
!1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a);d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap();f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
-B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);


/*** Search accordion ***/
  
  $(document).ready(function () {
    $('.accordion-content').hide();
    $('.accordion-toggle').on('click', function(event){
    event.preventDefault();
    // create accordion variables
    var accordion = $(this);
    var accordionContent = accordion.next('.accordion-content');
    var accordionToggleIcon = $(this).children('.toggle-icon');
    // toggle accordion link open class
    accordion.toggleClass("open");
    // toggle accordion content
    accordionContent.slideToggle(250);
    // change plus/minus icon
    if (accordion.hasClass("open")) {
    accordionToggleIcon.html("<i class='fa fa-minus-circle'></i>");
    } else {
    accordionToggleIcon.html("<i class='fa fa-plus-circle'></i>");
    }
    });
    });
  
  /*** End of Search accordion ***/


 $('#masonry').imagesLoaded()
  .always( function( instance ) {
    // init Isotope
  
    

    $('#masonry').masonry({ itemSelector: '.item'});
   });  


var $container = $('#masonry');
			// initialize
			$container.masonry({
			  itemSelector: '.item',
			  
			});



			
			
			$(document).ready(function(e) {
				
              
				setTimeout(function() {
					
					
					
					setTimeout(function() {
					$('#masonry').animate({opacity: 1});
					}, 200);
				}, 300);
				
            });
