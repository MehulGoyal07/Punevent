let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

// let themeToggler = document.querySelector(".theme-toggler");
// let toggleBtn = document.querySelector(".toggle-btn");

// toggleBtn.onclick = () => {
//     themeToggler.classList.toggle("active");
// };

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--theme-color", color);
    };
});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

function sendwhatsapp() {
    var phoneNumber = "+917597290818";
    var name = document.querySelector('.name').value
    var email = document.querySelector('.email').value
    var number = document.querySelector('.number').value
    var subject = document.querySelector('.subject').value
    var message = document.querySelector('.message').value

    if (!name || !number || !message) {
        prompt("Enter all the details")
    }
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// JavaScript for opening and closing mobile menu
const menuBars = document.getElementById('menu-bars');
const mobileMenu = document.getElementById('mobile-menu');

menuBars.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Adjust the speed of the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        const isVisible = (elem) => {
            const { top, bottom } = elem.getBoundingClientRect();
            const vHeight = (window.innerHeight || document.documentElement.clientHeight);

            return (
                (top > 0 || bottom > 0) && top < vHeight
            );
        };

        const startCounterOnScroll = () => {
            if (isVisible(counter)) {
                updateCount();
                window.removeEventListener('scroll', startCounterOnScroll);
            }
        };

        window.addEventListener('scroll', startCounterOnScroll);
    });
});

var reviewSwiper = new Swiper('.review-slider', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1,
        },
    },
});

// Select only video elements within the container with the class 'reviews-container'
const reviewContainer = document.querySelector('.reviews-container');
const videos = reviewContainer.querySelectorAll('.autoplay-video');

// Calculate the middle video index within this container
const middleVideoIndex = Math.floor(videos.length / 2);
const middleVideo = videos[middleVideoIndex];

// Function to pause all videos except the specified one
function pauseOtherVideos(exceptVideo) {
    videos.forEach(video => {
        if (video !== exceptVideo) {
            video.pause();
        }
    });
}

// Function to handle video play/pause based on visibility
function handleMiddleVideoAutoplay(entries) {
    entries.forEach(entry => {
        // If the middle video is intersecting, play it and pause others
        if (entry.isIntersecting && entry.target === middleVideo) {
            middleVideo.play();
            pauseOtherVideos(middleVideo);
        } else if (entry.target === middleVideo) {
            middleVideo.pause();
        }
    });
}

// Set up an IntersectionObserver to monitor the middle video specifically
const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.7 // Adjust this threshold based on when you want the video to play
};

const observer = new IntersectionObserver(handleMiddleVideoAutoplay, observerOptions);

// Observe only the middle video
observer.observe(middleVideo);

// Add click listeners for each video to manually play/pause when clicked
videos.forEach(video => {
    video.addEventListener('click', () => {
        // Toggle play/pause on click
        if (video.paused) {
            video.play();
            pauseOtherVideos(video);
        } else {
            video.pause();
        }
    });
});

