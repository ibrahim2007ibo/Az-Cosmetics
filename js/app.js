$(document).ready(function () {
    // header sticky
    $(window).scroll(function(){
        var headerHeight = $('header').height();

        if ($(window).scrollTop() > headerHeight) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
    // carousel
    $('.carousel').carousel({
        interval: 4000,
        pause: false
    });

    // click outside
    $('body').click(function() {
        $('.lang-dropdown').slideUp(100);
    });


    // when click change lang
    document.getElementsByClassName('change-lang')[0].addEventListener("click", function myFunction() {
        let langList = document.querySelector('.change-lang-wrap .lang-list');
        let compStyles = window.getComputedStyle(langList).getPropertyValue('right');
        if (compStyles === "-30px") {
            langList.style.opacity = "1";
            langList.style.right = "-90px";
        } else {
            langList.style.opacity = "0";
            langList.style.right = "-30px";
        }
    });

    // fav product 
    setTimeout(function() {
        $('.heart').click(function() {
            $(this).toggleClass('fav');
        });
    }, 500);
    
    
    // when click outside
    $('body').click(function() {
        $('body').css('overflow-y', 'visible');
        $('header #myMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
        setTimeout(function() {
            $('header #myMenu').hide();
        }, 200);
    });
    
    
    // call modal
    $('.call-btn').click(function(e) {
        e.stopPropagation();
        $('#get-call').modal('show');
        $('body').css('overflow-y', 'hidden');
        $('header #myMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
        setTimeout(function() {
            $('header #myMenu').hide();
        }, 200);
    });
    
    
    // hamburger menu
    $('header .navbar-toggler').click(function(e) {
        e.stopPropagation();
        $('header #myMenu').show();
        $('header #myMenu .navbar-nav').animate({right: '0'}, 300, 'linear');
        $('body').css('overflow-y', 'hidden');
    });
    
    $('header #myMenu .navbar-nav').click(function(e) {
        e.stopPropagation();
    });
    
    $('header #myMenu .close-m').click(function() {
        $('body').css('overflow-y', 'visible');
        $('header #myMenu .navbar-nav').animate({right: '-100%'}, 300, 'linear');
        setTimeout(function() {
            $('header #myMenu').hide();
        }, 200);
    });
    
    
    // active page 
    $('#myMenu .nav-link').each(function () {
       var location = window.location.href; 
       var link = this.href; 
        if(location == link) {              
          $(this).parent().addClass('active');  
        }
    });
    
    $('.custom-dropdown-menu .menu-list a').each(function () {
       var location = window.location.href; 
       var link = this.href; 
        if(location == link) {              
          $(this).parent().addClass('active');  
          $(this).parents(3).addClass('active');  
        }
    });
    
    $('footer .footer-list a').each(function () {
       var location = window.location.href; 
       var link = this.href; 
        if(location == link) {              
          $(this).parent().addClass('active');  
        }
    });
    
    
    //open dropdown
    $('.custom-dropdown-menu-wrap .nav-link').click(function() {
        $(this).parent().toggleClass('show');
        $(this).parent().siblings().removeClass('show');
    });
    
    
    // fancybox
    $('.highslide').fancybox({
        loop : true
    });
    
    $('.highslide').attr('data-fancybox','gallery');
    
    
   

    // stop autoplay and start
    $('.owl-nav').on('click', function () {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    });

    $('.custom-navs').on('click', function () {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
    });

    // next and prev items click
    $(document).on('click', '.owl-item>div', function() {
        owl.trigger('stop.owl.autoplay');
        owl.trigger('play.owl.autoplay',[5000]);
        owl.trigger('to.owl.carousel', [$(this).data('position'), 300] );
    });

 
    // products zoom and modal
    
    $(function(){
        $('.big-image').jqZoom({
            selectorWidth: 30,
            selectorHeight: 30,
            viewerWidth: 450,
            viewerHeight: 450
        });
    });
    
    $('.full-content .bullets img').click(function(){
        var thisImg = $(this).attr('src');
        $('.full-content .zoom-box').attr('href', thisImg);
        $('.full-content .big-image').attr('src', thisImg);
        $('.full-content .viewer-box img').attr('src', thisImg);
        $(this).addClass('active').siblings().removeClass('active');
        
    });
   
    $('.full-content .bullets img').first().addClass('active');







 
});

AOS.init();