$(document).ready(function(){


    $('.slider-box').slick({ 
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',       
        slidesToShow: 3,                
        initialSlide: 0,
        infinite: false,
        variableWidth: true,        
    });

    $('.feed-slider-box').slick({
        infinite: false,        
        initialSlide: 0,
        prevArrow: '<button type="button" class="slick-prev feed-btn"></button>',
        nextArrow: '<button type="button" class="slick-next feed-btn"></button>',
    });


    

  });