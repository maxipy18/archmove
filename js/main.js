$(document).ready(function(){


    $('.slider-box').slick({ 
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',       
        slidesToShow: 3,                
        initialSlide: 0,
        infinite: false,
        variableWidth: true, 
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,                    
                }
            },
        ]       
    });

    $('.feed-slider-box').slick({
        infinite: false,        
        initialSlide: 0,
        prevArrow: '<button type="button" class="slick-prev feed-btn"></button>',
        nextArrow: '<button type="button" class="slick-next feed-btn"></button>',
    });


    const signUpBtn = document.querySelector('.signup-btn');
    const modal = document.querySelector('.modal');
    const modalSignUp = document.querySelector('.modal-signup');
    const closeBtn = document.querySelectorAll('.close-btn');
    const searchBtn = document.querySelector('.search-btn');
    const headerSearch = document.querySelector('.header-search');
    const consultBtn = document.querySelectorAll('.consult-btn');
    const modalConsult = document.querySelector('.modal-consult');


    signUpBtn.addEventListener('click', ()=>{
        modal.classList.add('active');
        modalSignUp.classList.add('active');
    });

    closeBtn.forEach(item=>{
        item.addEventListener('click', ()=>{
            modal.classList.remove('active');
            modalSignUp.classList.remove('active');
            modalConsult.classList.remove('active');
        });
        
    });
    

    searchBtn.addEventListener('click', ()=>{
        headerSearch.classList.toggle('active');
    });

    consultBtn.forEach(item=>{
        item.addEventListener('click', ()=>{
            modalConsult.classList.add('active');
            modal.classList.add('active');
        });
    });


  });