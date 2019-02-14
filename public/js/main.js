function goShopping() {
	// alert("click");
	window.location.href = "shopping.html";
} 

function goBackToHomepage() {
	// alert("click");
	window.location.href = "homepage.html";
}


/***************************/   
/*-- IMAGE FLIP FUNCTION --*/
/***************************/
function flipImg(e) {
    e.classList.toggle('flipped');
}


let summary = document.querySelector('.shopping-cart-summary');
/****************************/    
/*-- ADD TO CART FUNCTION --*/
/****************************/
let cartCount = 0;
const cartItems = {};
function addToCart(e, id) {
  cartCount++;
  const product = document.querySelector(`#${id}`);
  const image = product.querySelector('.card-face-front img').src;
  const title = product.querySelector('h3').innerHTML;
  const price = product.querySelector('p').innerHTML;
  if (cartItems[id]) {
    cartItems[id].count++;
  } else {
    cartItems[id] = {
      id,
      image,
      title,
      price,
      count: 1,
    };
  }
  // console.log(cartItems);
  document.querySelector('#countItem').innerHTML = cartCount;
  cartSummary();
  summary.style.display = "block";
  setTimeout(function(){
    summary.style.display = "none";
  }, 1000)

}

/**********************************/    
/*-- SHOW CART SUMMARY FUNCTION --*/
/**********************************/
function showCart(e, id) {
  // let summary = document.querySelector(`.${id}`);
  if(summary.style.display === "block"){
    summary.style.display = "none";
  } else {
    cartSummary();
    // console.log(summary);
    summary.style.display = "block";
    }
}


function cartSummary() {
  let cart = summary.querySelector('cart-total');
  let item = summary.querySelector('grid-container-of-2-cart');
  let html='';
  let total = 0;
  if(cartCount > 0) {
   if(cart){
    cart.parentNode.removeChild(cart);
   } 
   if(item) {
    item.parentNode.removeChild(item);
   }
    for(let key in cartItems){
      let priceValue = cartItems[key].price.slice(1);
      // console.log(priceValue);
      total += parseFloat(priceValue) * cartItems[key].count;
      total = Math.round(total*100)/100;
      html += '<div class="grid-container-of-2-cart">' +
              `<img src="${cartItems[key].image}" width="100%">` +
              '<div class="description">' +
              `<h5>${cartItems[key].title}</h5>` +
              `<p class="cartText">${cartItems[key].price}</p>`+
              `<p class="cartText" style="font-weight:300;">Quantity: ${cartItems[key].count}</p>`+
              '</div>' + 
              '</div>'
      }
      html += '<table class="order-total">' +
              '<tbody>' +
              '<tr>' +
              '<th class="cartText" style="font-weight:300; padding: 1% 5%;">ORDER VALUE:</th>' +
              `<td class="cartText" style="font-weight:300;">${total}</td>` +
              '</tr>' +  
              '<tr>' +
              '<th class="cartText" style="font-weight:300; padding: 1% 5%;">STANDAND SHIPPING:</th>' +
              '<td class="cartText" style="font-weight:300;">FREE</td>' +
              '</tr>' +   
              '</tbody>' +
              '<tfoot>' +
              '<tr>' +
              '<th class="cartText" style="padding: 3% 5%;">TOTAL</th>' +
              `<td class="cartText">${total}</td>` +
              '</tr>' +
              '</tfoot>' +
              '</table>'
        summary.innerHTML = html;
    }
}


/***********************/    
/*-- ROTATE FUNCTION --*/
/***********************/

let cube = document.querySelector('.cube');
let radioGroup = document.querySelector('.radio-group');
let reason = document.getElementsByClassName('reason');
let currentClass = '';
if (radioGroup) {
  let count = 0;
  let radio = $("input[type=radio]");
  setInterval(function() {
    count++;
    if(count < radio.length){
      // console.log(count);
        radio[count].checked = true;
        radioGroup.dispatchEvent(new Event('change'));
    } else {
      count = -1;
    }
    
  }, 1500);


  function changeSide() {
    if (!radioGroup) {
      return;
    }
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = 'show-' + checkedRadio.value;


    for(let i = 0; i < reason.length; i++) {
      if(i === (parseInt(checkedRadio.value, 10)-1)) {
        reason[i].hidden = false;
      } else {
        reason[i].hidden = true;
      }
    }

    if ( currentClass ) {
      cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
  }

  changeSide();

  radioGroup.addEventListener( 'change', changeSide );
}


/*************************/  
/*-- NARBAR FUNCTION --*/
/*************************/
window.onscroll = function changeNav() {
  let nav = document.querySelector('nav');
  if(nav) {
    if (window.pageYOffset > 200) {
      nav.className = 'navbar-show';
    } else {
      nav.className = '';
    }
  }
}

/*************************/  
/*-- HAMBUGER FUNCTION --*/
/*************************/
let nav = document.querySelector('.js--nav-icon');
let navIcon = document.querySelector('.js--nav-icon i');
let mainNav = document.querySelector('.main-nav');
if (nav) {
  nav.addEventListener('click', function () {
    navIcon.classList.toggle('fa-times');
    navIcon.classList.toggle('fa-bars');

    if (mainNav.classList.contains('is-visible')) {
        mainNav.classList.remove('is-visible');
    } else {
      let getHeight = function () {
        mainNav.style.display = 'block'; 
        let height = mainNav.scrollHeight + 'px'; 
        mainNav.style.display = ''; 
        return height;
      };
      
      let height = getHeight(); 
      mainNav.classList.add('is-visible'); 
      mainNav.style.height = height; 

      window.setTimeout(function () {
        mainNav.style.height = '';
      }, 350);
    }
  });
}



/**********************************/	
/*-- BACK GROUP CHANGE FUNCTION --*/
/**********************************/
// function changeBgr(e){
// 	let hpHeader = document.querySelector("header.homepage");
// 	hpHeader.classList.add("background");
// }

// function backToBgr(e){
// 	let hpHeader = document.querySelector("header.homepage");
//   hpHeader.classList.remove("background");
// }








 



