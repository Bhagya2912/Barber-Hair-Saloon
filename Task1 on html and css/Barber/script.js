
// for form

document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
   

    // Set values in pop-up
    document.getElementById("popup-name").innerText = name;
    document.getElementById("popup-email").innerText = email;
    document.getElementById("popup-phone").innerText = phone;
    document.getElementById("popup-category").innerText = category;
    document.getElementById("popup-date").innerText = date;
  
    // Show the pop-up
    document.getElementById("popup").style.display = "block";
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("appointmentForm").reset(); // Reset form after closing pop-up
}


//pop button 
document.addEventListener("DOMContentLoaded", function () {
    let backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("active"); //add class to Show button
        } else {
            backToTopBtn.classList.remove("active"); // Remove class to hide button
        }
    });
});


//pricing section

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const pricingItems = document.querySelectorAll(".grid-list li");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            this.classList.add("active");
            
            const filterValue = this.getAttribute("data-filter-btn");
            
            pricingItems.forEach(item => {
                if (filterValue === "all" || item.getAttribute("data-filter") === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

//Toggle button

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("[data-header]");
    const navToggler = document.querySelector("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    // Toggle navbar on button click
    navToggler.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Close navbar when clicking a navigation link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });

    // Make header sticky on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky-header");
        } else {
            header.classList.remove("sticky-header");
        }
    });
});


//ratings


document.addEventListener("DOMContentLoaded", function () {
    const ratingLinks = document.querySelectorAll(".navbar-link[data-nav-link]");
    let ratingLink = null;

    // Find the "Ratings" link
    ratingLinks.forEach(link => {
        if (link.textContent.trim() === "Ratings") {
            ratingLink = link;
        }
    });

    if (ratingLink) {
        ratingLink.addEventListener("click", function (event) {
            event.preventDefault();

            // Check if popup already exists
            if (document.querySelector(".rating-popup")) return;

            // Create the rating popup
            const ratingPopup = document.createElement("div");
            ratingPopup.classList.add("rating-popup");
            ratingPopup.innerHTML = `
                <div class="popup-content">
                    <p>Give your rating:</p>
                    <select id="rating-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button id="submit-rating">Submit</button>
                    <button id="close-popup">Close</button>
                </div>
            `;
            document.body.appendChild(ratingPopup);

            // Handle rating submission
            document.getElementById("submit-rating").addEventListener("click", function () {
                const selectedRating = document.getElementById("rating-select").value;
                
                // Update the navbar with the given rating instead of removing it
                // ratingLink.textContent = `Rating: ${selectedRating}/5`;
                
                // Remove popup after submission
                ratingPopup.remove();
            });

            // Close popup without submitting
            document.getElementById("close-popup").addEventListener("click", function () {
                ratingPopup.remove();
            });
        });
    }
});
