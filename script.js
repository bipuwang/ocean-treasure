/* ===========================
   OCEAN TREASURE
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    /* Hero Slider */

    const slides = document.querySelectorAll(".slide");

    let current = 0;

    function showSlide(index){

        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");

    }

    function nextSlide(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    }

    if(slides.length > 0){

        setInterval(nextSlide,5000);

    }


    /* Smooth Scroll */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });


    /* Header */

    const header=document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>80){

            header.style.background="rgba(4,20,32,.96)";

        }else{

            header.style.background="rgba(7,28,44,.88)";

        }

    });


    /* Scroll Animation */

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(".card,.destination-card,.service-box,.contact-card").forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });


    /* Mobile Menu */

    const mobile=document.querySelector(".mobile-menu");

    const nav=document.querySelector("nav");

    if(mobile){

        mobile.addEventListener("click",()=>{

            nav.classList.toggle("open");

        });

    }

});
