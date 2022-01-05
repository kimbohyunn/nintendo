$(function(){
    //header downhover
    $('header .down').mouseenter(function(){
        $('.down_wrap').stop().fadeIn('fast');
        $('header .down').mouseleave(function(){
            $('.down_wrap').stop().fadeOut('fast');
        });
    });

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.swiper .txt_box').offset().top;

        if(curr >= target){
            $('header').addClass('show');
        }else{
            $('header').removeClass('show');
        }
    });

    //menu_hover
    $('header .gnb').hover(function(){
        $('header').addClass('on');
    },function(){
        $('header').removeClass('on');
    });

    //menu_open
    $('header .menu').click(function(e){
        e.preventDefault();
        $('.menu_open').fadeToggle('fast');
        $('header').toggleClass('active');
        $('header .wrap .menu').toggleClass('active');
        $('body').toggleClass('scroll_h');
    });

    //tm menu_open accodian
    $('header .menu_open .tbgnb').click(function(e){
        e.preventDefault();

        h = $(this).siblings('.sub_nav').children('ul').outerHeight();

        if($(this).siblings('.sub_nav').height() > 0){
            $('.main_nav .sub_nav').stop().animate({height:0},300);
            $('.main_nav .tbgnb').removeClass('on');
        }else{
            $('.main_nav .sub_nav').stop().animate({height:0},300);
            $('.main_nav .tbgnb').removeClass('on');
            $(this).siblings('.sub_nav').animate({height:h},300);

            $(this).addClass('on');
        }
    });

    
    //main_vis
    var main_vis = new Swiper(".sc01", {
        pagination: {
          el: ".sc01 .swiper-pagination",
          //type: "fraction",
        },
        loop: true,
        autoplay: {
            delay: 4000,
        },
      });

      function num(){
        $('.sc01 .curr').text(main_vis.realIndex+1)
        $('.sc01 .total').text(main_vis.slides.length-2)
      }
        num();
     
      main_vis.on("slideChangeTransitionStart",function(){
        num();
      });

      $('.play_btn').click(function(){
          if($(this).hasClass('play')){
            //play
            main_vis.autoplay.start();
            $(this).removeClass('play');
          }else{
            //stop
            main_vis.autoplay.stop();
            $(this).addClass('play');
          }
      })
    

    //text
    $('.txt_motion').each(function(index, item){ 
        gsap.from(item,{
            scrollTrigger:{
                trigger:item,
                start:"top 80%", 
                end:"bottom top",
                //markers:true
            },
            duration:0.5,
            yPercent:40,
            opacity:0,
            stagger:0.1,
        });
    });

    //sc02_product
    fixMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.fix_slide',
            start:"top 95px", 
            end:"+=3000",
            //markers:true,
            scrub:1,
            pin:true
        },
     });

    fixMotion.to('.slide02',{
         top:0
    })
    fixMotion.to('.slide03',{
        top:0
    })
    fixMotion.to('.slide04',{
        top:0
    })

   

    //sc03_soft
    gsap.from('.sc03_soft .wrap > div',{
        scrollTrigger:{
            trigger:'.sc03_soft',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:0.8,
        yPercent:50,
        opacity:0,
        stagger:0.3,
    })

    //sc04_news
    gsap.from('.sc04_news .sc04_01',{
        scrollTrigger:{
            trigger:'.sc04_news',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:0.8,
        xPercent:40,
        opacity:0,
        stagger:0.3,
    })

    gsap.from('.sc04_news .sc04_02',{
        scrollTrigger:{
            trigger:'.sc04_02',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:0.8,
        xPercent:-40,
        opacity:0,
        stagger:0.3,
    })

    gsap.from('.sc04_news .small_news',{
        scrollTrigger:{
            trigger:'.small_news',
            start:"top 80%",
            end:"bottom top",
            //markers:true
        },
        duration:0.8,
        yPercent:50,
        opacity:0,
        stagger:0.3,
    })

    //aside
   /*  $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.sc02_product').offset().top;

        if(curr >= target){
            $('aside .top_btn').addClass('on');
        }else{
            $('aside .top_btn').removeClass('on');
        }
    });

    $('aside .top_btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);
    }) */



});