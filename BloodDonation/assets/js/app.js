// Preloader

window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function() {
        document.querySelector(".preloader").style.display = 'none';
    }, 1000)
})

// Navbar

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}

// Fetch Blood Banks

// fetch("js/Blood_Banks.json").then((res) => res.json()).then((data) => {
//     data.forEach((user) => {
//         $("#data").append(`
//             <tr>
//                 <td>${user.Blood_Bank_Name}</td>
//                 <td>${user.State}</td>
//                 <td>${user.City}</td>
//                 <td>${user.Address}</td>
//                 <td>${user.Contact_No}</td>
//             </tr>
//         `);
//     });
// });

// Search for Blood Banks

// const search = () => {
//     let filter = document.getElementById('myInput').value.toUpperCase();
//     let myTable = document.getElementById('myTable');
//     let tr = myTable.getElementsByTagName('tr');

//     for (var i = 0; i < tr.length; i++) {
//         let td = tr[i].getElementsByTagName('td')[3];
//         if (td) {
//             let textvalue = td.textContent || td.innerHTML;
//             if (textvalue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

// Modi Image Toggler

/* const arrowBtnToggler = document.querySelector(".arrow-btn-toggler");
arrowBtnToggler.addEventListener('click', function() {
    arrowBtnToggler.classList.toggle("transform");
    document.querySelector(".arrow-btn").classList.toggle("open");
}); */

// Register and Login Toggler

// function toggleSignup() {
//     document.getElementById("login-toggle").style.backgroundColor = "#fff";
//     document.getElementById("login-toggle").style.color = "#222";
//     document.getElementById("signup-toggle").style.backgroundColor = "red";
//     document.getElementById("signup-toggle").style.color = "#fff";
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("signup-form").style.display = "block";
// }

// function toggleLogin() {
//     document.getElementById("login-toggle").style.backgroundColor = "red";
//     document.getElementById("login-toggle").style.color = "#fff";
//     document.getElementById("signup-toggle").style.backgroundColor = "#fff";
//     document.getElementById("signup-toggle").style.color = "#222";
//     document.getElementById("signup-form").style.display = "none";
//     document.getElementById("login-form").style.display = "block";
// }

// Password Toggler 1

// function passwordToggler1() {
//     var pass1 = document.getElementById("pass1");
//     var hide1 = document.getElementById("hide1");
//     var hide2 = document.getElementById("hide2");

//     if (pass1.type === "password") {
//         pass1.type = "text";
//         hide1.style.display = "block";
//         hide2.style.display = "none";
//     } else {
//         pass1.type = "password";
//         hide1.style.display = "none";
//         hide2.style.display = "block";
//     }
// }

// Hide Alerts after 5 seconds

setTimeout(function() {
    $("#alert-message").fadeOut('slow');
}, 5000);