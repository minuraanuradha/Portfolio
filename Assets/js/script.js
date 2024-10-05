    /*----------------------------------------------------------*/
    //Section Scroll Animation

        ScrollReveal().reveal('.inout', {
            duration: 1000,  // Animation duration in milliseconds
            distance: '50px', // Distance the element moves
            origin: 'bottom', // Direction the element comes from ('bottom', 'top', 'left', 'right')
            easing: 'ease-in-out', // Easing function
            reset: true // This allows the animation to run again when scrolled back up
        });

        ScrollReveal().reveal('.sideout', {
            duration: 1000,  // Animation duration in milliseconds
            distance: '50px', // Distance the element moves
            origin: 'left', // Direction the element comes from ('bottom', 'top', 'left', 'right')
            easing: 'ease-in-out', // Easing function
            reset: true // This allows the animation to run again when scrolled back up
        });


    /*----------------------------------------------------------*/
    //Name Typing

        const name1 = "Minura";
        const name2 = "Anuradha";
        const greeting = "Hello, my name is Minura Anuradha. Nice to meet you! I would like to welcome you to my personal portfolio.";
        
        let i = 0, j = 0, k = 0;

        // Typing effect for the first name
        function typeFirstName() {
            if (i < name1.length) {
                document.getElementById('name1').innerHTML += name1.charAt(i);
                i++;
                setTimeout(typeFirstName, 100); // Typing speed (150ms delay)
            } else {
                typeSecondName();
            }
        }

        // Typing effect for the second name
        function typeSecondName() {
            if (j < name2.length) {
                document.getElementById('name2').innerHTML += name2.charAt(j);
                j++;
                setTimeout(typeSecondName, 100); // Typing speed
            } else {
                typeGreeting();
            }
        }

        // Typing effect for the greeting text
        function typeGreeting() {
            if (k < greeting.length) {
                document.getElementById('greeting').innerHTML += greeting.charAt(k);
                k++;
                setTimeout(typeGreeting, 15); // Faster typing for the paragraph
            }
        }

        // Start the typing effect when the page loads
        window.onload = function() {
            typeFirstName();
        };



    /*----------------------------------------------------------*/
    //Home Page - About Section - Counter

        document.addEventListener("DOMContentLoaded", function() {
            const counters = document.querySelectorAll('.counter');
            const speed = 500; // Slower speed (adjust this value as needed)

            // Function to update the counter
            const updateCount = (counter) => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(() => updateCount(counter), 50); // Delay for smoother animation
                } else {
                    counter.innerText = target;
                }
            };

            // Intersection Observer callback
            const handleIntersection = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        updateCount(counter);
                        observer.unobserve(counter); // Stop observing once the counter has started
                    }
                });
            };

            // Create Intersection Observer
            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5 // Starts when 50% of the counter is in view
            });

            // Observe each counter
            counters.forEach(counter => {
                observer.observe(counter);
            });
        });

    /*----------------------------------------------------------*/
    //Courser Chnager

    document.addEventListener('mousemove', function (e) {
        // Create a new circle element
        const circle = document.createElement('div');
        circle.classList.add('circle');
        
        // Set the position of the circle
        circle.style.left = `${e.pageX}px`;
        circle.style.top = `${e.pageY}px`;

        // Append the circle to the body
        document.body.appendChild(circle);

        // Remove the circle after the fade-out animation completes
        setTimeout(() => {
            circle.remove();
        }, 500); // Matches the duration of the fade-out animation (0.5s)
    });


    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        this.classList.toggle('clicked');
    });


    /*----------------------------------------------------------*/
    //Portfolio Chnager

    // Select all filter links
    const filterLinks = document.querySelectorAll('.filter-link');
    const cards = document.querySelectorAll('.p_card');

    // Function to filter cards
    function filterCards(filter) {
        cards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';  // Show all cards if 'all' is selected
            } else {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.style.display = 'block'; // Show cards that match the filter
                } else {
                    card.style.display = 'none';  // Hide cards that don't match
                }
            }
        });
    }

    // Add event listeners to filter links
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove 'active' class from all links
            filterLinks.forEach(link => link.classList.remove('active'));
            
            // Add 'active' class to the clicked link
            e.target.classList.add('active');
            
            // Get the filter value (data-filter) from the clicked link
            const filter = e.target.getAttribute('data-filter');
            
            // Call filter function
            filterCards(filter);
        });
    });
