$(function() {
    gsap.to(window,0.2,{scrollTo:0})


    var intro = gsap.timeline({
        onComplete:function(){
            gsap.set('body',{'overflow':'auto'})
        }
        
    });

    intro.to('.intro .title span:nth-child(1)',0.5,{opacity:1})
    .to('.intro .title span:nth-child(1)',0.3,{opacity:0})
    .to('.intro .title span:nth-child(2)',0.5,{opacity:1})
    .to('.intro .title span:nth-child(2)',0.3,{opacity:0})
    .to('.intro .title span:nth-child(3)',0.5,{opacity:1})
    .to('.intro .title span:nth-child(3)',0.3,{opacity:0})
    .to('.intro .title span:nth-child(4)',0.5,{opacity:1})
    .to('.intro .title span:nth-child(4)',0.5,{'letter-spacing':'3vw'})
    .addLabel('m1')
    .to(window,1.5,{scrollTo:'.works'},'m1')
    .to('.intro .title span:nth-child(4)',1,{'filter':'blur(50px)'},'m1')
    .set('.intro .title span:nth-child(4)',{'filter':'blur(0px)'},)


    var $grid = $('.grid').isotope({
        itemSelector: '.cont',
        layoutMode: 'fitRows',
        stagger: 100,
    });
    
    $('.filter_area button').on( 'click', function() {

        var value = $(this).attr('data-filter');
            $grid.isotope({ filter: value });

        $(this).addClass('on').siblings().removeClass('on')
    });





})