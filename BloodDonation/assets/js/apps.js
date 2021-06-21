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

fetch("js/Blood_Banks.json").then((res) => res.json()).then((data) => {
    data.forEach((user) => {
        $("#data").append(`
            <tr>
                <td>${user.Blood_Bank_Name}</td>
                <td>${user.State}</td>
                <td>${user.City}</td>
                <td>${user.Address}</td>
                <td>${user.Contact_No}</td>
            </tr>
        `);
    });
});

// Search for Blood Banks

const search = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[2];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Modi Image Toggler

const arrowBtnToggler = document.querySelector(".arrow-btn-toggler");
arrowBtnToggler.addEventListener('click', () => {
    arrowBtnToggler.classList.toggle("transform");
    document.querySelector(".arrow-btn").classList.toggle("open");
});

// Register and Login Toggler

function toggleSignup() {
    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "red";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function toggleLogin() {
    document.getElementById("login-toggle").style.backgroundColor = "red";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Password Toggler 1

function passwordToggler1() {
    var pass1 = document.getElementById("pass1");
    var hide1 = document.getElementById("hide1");
    var hide2 = document.getElementById("hide2");

    if (pass1.type === "password") {
        pass1.type = "text";
        hide1.style.display = "block";
        hide2.style.display = "none";
    } else {
        pass1.type = "password";
        hide1.style.display = "none";
        hide2.style.display = "block";
    }
}

// Password Toggler 2

function passwordToggler2() {
    var pass2 = document.getElementById("pass2");
    var hide3 = document.getElementById("hide3");
    var hide4 = document.getElementById("hide4");

    if (pass2.type === "password") {
        pass2.type = "text";
        hide3.style.display = "block";
        hide4.style.display = "none";
    } else {
        pass2.type = "password";
        hide3.style.display = "none";
        hide4.style.display = "block";
    }
}

// Password Toggler 3

function passwordToggler3() {
    var pass3 = document.getElementById("pass3");
    var hide5 = document.getElementById("hide5");
    var hide6 = document.getElementById("hide6");

    if (pass3.type === "password") {
        pass3.type = "text";
        hide5.style.display = "block";
        hide6.style.display = "none";
    } else {
        pass3.type = "password";
        hide5.style.display = "none";
        hide6.style.display = "block";
    }
}

// Hide Alerts after 5 seconds

setTimeout(function() {
    $("#alert-message").fadeOut('slow');
}, 5000);