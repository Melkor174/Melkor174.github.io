// slider 

const slides = document.querySelectorAll('.slider_item'),
      slideNav = document.querySelectorAll('.slider_nav_item'),

    //   -----sectionSlider
      //tabs 
      sliderTabs = document.querySelectorAll('.section_slider__tab'),
      sliderTabsPages = document.querySelectorAll('.section_slider_inner'),
      nextArrow = document.querySelector('.section_slider_nav_next'),
      prewArrow = document.querySelector('.section_slider_nav_prew'),
      sliderPages = document.querySelectorAll('.section_slider_pages'),
      sliderLines = document.querySelectorAll('.slider_line'),

    //-----------main_text
      showText = document.querySelector('.hide_content'),
      showBtn = document.querySelector('.show_btn'),
      hideBtn = document.querySelector('.show_btn_hide');
    


let slideIndex  = 0;
let sectionSlideIndex = 0;
let a = 0;
let offset = 0; //смещение от левого края

showSlides(slideIndex);
// showSectionSlides(sectionSlideIndex);



//  -------------------------------------------------------MainSlider


function showSlides() {

    // let arr = slideNav;
    if (slideNav[0]) {
        
        slideNav[0].addEventListener('click', function () {
            slides[0].style.display = 'block';
            slides[1].style.display = 'none';
            slides[2].style.display = 'none';
            slides[3].style.display = 'none';
            slides[4].style.display = 'none';

            slideNav[0].classList.add('slider_nav_item_active');
            slideNav[1].classList.remove('slider_nav_item_active');
            slideNav[2].classList.remove('slider_nav_item_active');
            slideNav[3].classList.remove('slider_nav_item_active');
            slideNav[4].classList.remove('slider_nav_item_active');
        });
    }

    if (slideNav[1]) {
        slideNav[1].addEventListener('click', function () {
            slides[1].style.display = 'block';
            slides[0].style.display = 'none';
            slides[2].style.display = 'none';
            slides[3].style.display = 'none';
            slides[4].style.display = 'none';
            slideNav[1].classList.add('slider_nav_item_active');
            slideNav[0].classList.remove('slider_nav_item_active');
            slideNav[2].classList.remove('slider_nav_item_active');
            slideNav[3].classList.remove('slider_nav_item_active');
            slideNav[4].classList.remove('slider_nav_item_active');
        });
    }

    if (slideNav[2]) {
        slideNav[2].addEventListener('click', function () {
            slides[2].style.display = 'block';
            slides[1].style.display = 'none';
            slides[0].style.display = 'none';
            slides[3].style.display = 'none';
            slides[4].style.display = 'none';

            slideNav[2].classList.add('slider_nav_item_active');
            slideNav[0].classList.remove('slider_nav_item_active');
            slideNav[1].classList.remove('slider_nav_item_active');
            slideNav[3].classList.remove('slider_nav_item_active');
            slideNav[4].classList.remove('slider_nav_item_active');
        });
    }

    if (slideNav[3]) {
        slideNav[3].addEventListener('click', function () {
            slides[3].style.display = 'block';
            slides[1].style.display = 'none';
            slides[2].style.display = 'none';
            slides[0].style.display = 'none';
            slides[4].style.display = 'none';

            slideNav[3].classList.add('slider_nav_item_active');
            slideNav[0].classList.remove('slider_nav_item_active');
            slideNav[2].classList.remove('slider_nav_item_active');
            slideNav[1].classList.remove('slider_nav_item_active');
            slideNav[4].classList.remove('slider_nav_item_active');
        });
    }

    if (slideNav[4]) {
        
        slideNav[4].addEventListener('click', function () {
            slides[4].style.display = 'block';
            slides[1].style.display = 'none';
            slides[2].style.display = 'none';
            slides[0].style.display = 'none';
            slides[3].style.display = 'none';

            slideNav[4].classList.add('slider_nav_item_active');
            slideNav[0].classList.remove('slider_nav_item_active');
            slideNav[2].classList.remove('slider_nav_item_active');
            slideNav[3].classList.remove('slider_nav_item_active');
            slideNav[1].classList.remove('slider_nav_item_active');
        });
    }



}



// ---------------------------------------------------------section slider

nextArrow.addEventListener('click', function() {
    offset -= 980;
    if( offset < -1960) {
        offset = 0;
    } 
    sliderLines[0].style.left = offset + 'px';
    console.log(offset);
});


prewArrow.addEventListener('click', function() {
    offset += 980;
    if( offset > 0) {
        offset = -1960;
    } 
    sliderLines[0].style.left = offset + 'px';
    console.log(offset);
});






sliderTabs[1].addEventListener('click' , function(){
    sliderTabsPages[0].style.display = 'none';
    sliderTabs[0].classList.remove('section_slider__tab_active');
    sliderTabsPages[1].style.display = 'block';
    sliderTabs[1].classList.add('section_slider__tab_active');

    nextArrow.addEventListener('click', function() {
        offset -= 980;
        if( offset < -1960) {
            offset = 0;
        } 
        sliderLines[1].style.left = offset + 'px';
        console.log(offset);
    });
    
    
    prewArrow.addEventListener('click', function() {
        offset += 980;
        if( offset > 0) {
            offset = -1960;
        } 
        sliderLines[1].style.left = offset + 'px';
        console.log(offset);
    });

});

sliderTabs[0].addEventListener('click' , function(){
    sliderTabsPages[1].style.display = 'none';
    sliderTabs[1].classList.remove('section_slider__tab_active');
    sliderTabsPages[0].style.display = 'block';
    sliderTabs[0].classList.add('section_slider__tab_active');

    
});




// function showSectionSlides(n) {

//     if (n > sliderPages.length) {
//         sectionSlideIndex = 0;
//     }

//     if (n < 0) {
//         sectionSlideIndex = sliderPages.length;
//     }


//     sliderPages.forEach(function(item){
//         item.style.display = 'none';
//     });
    
//     sliderPages[sectionSlideIndex].style.display = "block";


// }

// function plussSlides(n) {
//     showSectionSlides(sectionSlideIndex += n);
// }

// nextArrow.addEventListener('click', () => {
//     plussSlides(1);
// });

// prewArrow.addEventListener('click', () => {
//     plussSlides(-1);
// });


// -----------------------------------------MAinText

showBtn.addEventListener('click', () => {
    showText.style.display = "block";
    showText.removeAttribute('background');
    showBtn.style.display = "none";
    hideBtn.style.display = "block";
});


hideBtn.addEventListener('click', () => {
    showText.style.display = "none";
    showBtn.style.display = "block";
    hideBtn.style.display = "none";
});




// reviews

// const addReview = document.querySelector('.reviews_btn'),
//       newReview = document.querySelector('.modal_review'),
//       oldReciew = document.querySelector('.reviews');


// addReview.addEventListener('click', () =>{
//     oldReciew.style.display = 'none';
//     newReview.style.display = 'block';
// });







// cart
const cartText = document.querySelector('.basket_text');
const cartTitle = document.querySelector('.basket_title_hidden');
const cartSpace = document.querySelector('.basket_content');
const order = document.querySelector('.basket_order');
let productName = document.querySelector('.basket_product_name');
let productPrice = document.querySelector('.basket_product_price');



// plus minus
const cartPlus = document.querySelector('.basket_plus');
const cartMinus = document.querySelector('.basket_minus');

// total price and count
let totalPrice = document.querySelector('.total_price');

let cart = {

    'product1' : {
        'name' : 'Набор пивной',
        'price' : '1150',
    },

    'product2' : {
        'name' : 'Сет паназиатский',
        'price' : '1350',
    },

    'product3' : {
        'name' : 'Сет роллы и суши',
        'price' : '1450',
    },


    'product4' : {
        'name' : 'Суши японское море',
        'price' : '1650',
    },

    'product5' : {
        'name' : 'Суши якудза',
        'price' : '1980',
    },

    'product6' : {
        'name' : 'Саломон сет',
        'price' : '1500',
    },

    'product7' : {
        'name' : 'Филадельфия и лосось сет',
        'price' : '1150',
    },

    'product8' : {
        'name' : 'Самая большая Филадельфия',
        'price' : '2300',
    },

    'product9' : {
        'name' : 'Греческая',
        'price' : '750',
    },

    'product10' : {
        'name' : 'Сырная большая',
        'price' : '980',
    },

    'product11' : {
        'name' : 'Балийская острая',
        'price' : '1100',
    },

    'product12' : {
        'name' : 'Запеченый тунец',
        'price' : '400',
    },


    'product13' : {
        'name' : 'Запеченый острый',
        'price' : '350',
    },

    'product14' : {
        'name' : 'большая Филадельфия',
        'price' : '450',
    },

    'product15' : {
        'name' : 'Суши сет ассроти',
        'price' : '1100',
    },

    'product16' : {
        'name' : 'Креветка',
        'price' : '110',
    },

    'product17' : {
        'name' : 'Суши с угрем',
        'price' : '115',
    },

    'product18' : {
        'name' : 'Запеченая креветка',
        'price' : '350',
    },

    'product19' : {
        'name' : 'Нежная канада',
        'price' : '390',
    },

    'product20' : {
        'name' : 'Калифорния',
        'price' : '410',
    },

    'product21' : {
        'name' : 'Якудза сет',
        'price' : '2800',
    },

    'product22' : {
        'name' : 'Фудзияма и лосось сет',
        'price' : '1920',
    },

    'product23' : {
        'name' : 'Сет пьяный',
        'price' : '1600',
    },


   
};






const addFunction = (id) => {
    let one = +1;
    price = +cart[id].price;
    priceOne = +cart[id].price;
    allPrice = +document.querySelectorAll('product_price');


    let cartName = cart[id].name;
    let cartPrice = +cart[id].price;
    let div = document.createElement('div');
    let addName = document.createElement('div');
    let addPrice = document.createElement('div');
    let cartBtns = document.createElement('div');
    let countProduct = document.createElement('div');
   
    div.classList.add('add_products');
    addName.classList.add('add_product_name');
    addPrice.classList.add('product_price');
    cartBtns.classList.add('basket_btns');
    order.prepend(div);
    div.prepend(addName);
    div.prepend(addPrice);
    div.appendChild(cartBtns);
    
    addName.innerHTML = cartName;
    addPrice.innerHTML = +cartPrice;

    btnPlus = document.createElement('div');
    btnPlus.classList.add('basket_btn');
    cartBtns.appendChild(btnPlus);
    btnPlus.innerHTML = '+'

    btnMinus = document.createElement('div');
    btnMinus.classList.add('basket_btn');
    cartBtns.appendChild(btnMinus);
    btnMinus.innerHTML = '-'

    cartBtns.appendChild(countProduct);
    countProduct.innerHTML = one;

    totalPrice.innerHTML = price;



    btnPlus.addEventListener('click', function(){
        addPrice.innerHTML = cartPrice += price;
        countProduct.innerHTML = ++one;
        totalPrice.innerHTML = allPrice += allPrice;
        
    });
    



    
    btnMinus.addEventListener('click', function(){
        addPrice.innerHTML = cartPrice -= price;
        countProduct.innerHTML = --one;
        if(one <= 0) {
            div.style.display = 'none';
        }


    });







    // let cartName = cart[id].name;
    // let cartPrice = cart[id].price;
    // document.createComment(order);
    // order.appendChild(cartName);

    


    // productName.appendChild(cartName);

        // productName.innerHTML = cartName;
        // productPrice.innerHTML = cartPrice;
        // totalPrice.innerHTML = cartPrice;
   

}

document.addEventListener('click', function(event) {
    console.log(event.target.dataset.id);
    if (event.target.classList.contains('section_btn')){
        addFunction(event.target.dataset.id)
        cartText.style.display = 'none';
        cartTitle.style.display = 'block';
        order.style.display = 'block';
    }
  
});




// burger 

const burger = document.querySelector('.burger');
const mainContent = document.querySelector('.main_content');
const navHidden = document.querySelector('.hidden_nav');
const back = document.querySelector('.nav_back');

burger.addEventListener('click', function(){
    mainContent.style.display = 'none';
    navHidden.style.display = 'block';
});

back.addEventListener('click', function(){
    mainContent.style.display = 'block';
    navHidden.style.display = 'none';
});
