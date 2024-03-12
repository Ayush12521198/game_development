'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})



document.getElementById('searchBtn').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput');
    // Toggle visibility of the search input field
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'inline-block';
    } else {
      searchInput.style.display = 'none';
    }
  });
  

  document.getElementById('watchLiveBtn').addEventListener('click', function() {
    window.location.href = 'https://youtu.be/_GvQQuhcbME?si=cCG7f1LeDz4a3Q6m';
  });
  



  
  function loginWithGoogle() {
    window.location.href = "https://accounts.google.com"; // Replace with your Google login URL
}

function loginWithFacebook() {
    window.location.href = "https://www.facebook.com"; // Replace with your Facebook login URL
}

function loginWithGitHub() {
    window.location.href = "https://github.com/login"; // Replace with your GitHub login URL
}

function loginWithInstagram() {
    window.location.href = "https://www.instagram.com"; // Replace with your Instagram login URL
}

  






  




  function closeForm(closeIcon) {
    var formContainer = closeIcon.parentElement.parentElement;
    formContainer.style.display = "none";
    if (formContainer.id === "forgotPasswordForm") {
      document.getElementById("loginForm").style.display = "block"; // Show login form if closing forgot password form
    }
  }
  
  function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    // Add event listener for login form submit event every time the login form is opened
    document.getElementById("loginForm").addEventListener("submit", submitLoginForm);
  }
  
  function openForgotPassword() {
    document.getElementById("forgotPasswordForm").style.display = "block";
    document.getElementById("forgotPasswordForm").classList.add("active");
    document.getElementById("loginForm").style.display = "none";
  }
  
  function closeForgotPassword() {
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function submitLoginForm(event) {
    event.preventDefault(); 
    
  }
  



//   document.addEventListener("DOMContentLoaded", function() {
//     const shareButton = document.querySelector(".share");
//     const socialIcons = document.querySelector(".social-icons1");

//     shareButton.addEventListener("click", function(event) {
//         event.stopPropagation(); 

     
//         if (socialIcons.style.display === "none") {
//             socialIcons.style.display = "block";
          
//             socialIcons.style.top = (shareButton.offsetTop + shareButton.offsetHeight) + "px";
//             socialIcons.style.left = shareButton.offsetLeft + "px";
//         } else {
//             socialIcons.style.display = "none";
//         }
//     });

    
//     document.addEventListener("click", function(event) {
//         if (!socialIcons.contains(event.target) && event.target !== shareButton) {
//             socialIcons.style.display = "none";
//         }
//     });
// });




document.addEventListener("DOMContentLoaded", function() {
  const shareButtons = document.querySelectorAll(".share");
  const socialIconContainers = document.querySelectorAll(".social-icons1");

 
  shareButtons.forEach(function(shareButton) {
      shareButton.addEventListener("click", function(event) {
          event.stopPropagation(); 

         
          const socialIcons = this.nextElementSibling;

          if (socialIcons.style.display === "none") {
             
              socialIcons.style.display = "block";
              socialIcons.style.top = (shareButton.offsetTop + shareButton.offsetHeight) + "px";
              socialIcons.style.left = shareButton.offsetLeft + "px";
          } else {
              
              socialIcons.style.display = "none";
          }
      });
  });

  
  document.addEventListener("click", function(event) {
      socialIconContainers.forEach(function(socialIcons) {
          if (!socialIcons.contains(event.target) && !event.target.classList.contains("share")) {
              socialIcons.style.display = "none";
          }
      });
  });
});




// document.addEventListener("DOMContentLoaded", function() {
//   const addToCartBtn = document.getElementById("addToCartBtn");
//   const popup = document.getElementById("popup");
//   const closeBtn = document.getElementById("closeBtn");

//   addToCartBtn.addEventListener("click", function() {
//       popup.style.display = "block";
//   });

//   closeBtn.addEventListener("click", function() {
//       popup.style.display = "none";
//   });
// });



document.addEventListener("DOMContentLoaded", function() {
  const addToCartBtns = document.querySelectorAll(".addToCartBtn");

  addToCartBtns.forEach(function(btn) {
    const popup = btn.nextElementSibling;
    const closeBtn = popup.querySelector(".closeBtn");

    btn.addEventListener("click", function() {
      popup.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
});
