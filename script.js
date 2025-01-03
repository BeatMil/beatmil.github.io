document.getElementById('stuff-I-made-button').addEventListener('click', function() {
	document.getElementById('stuffImade').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-me-button').addEventListener('click', function() {
	document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('my-skills-button').addEventListener('click', function() {
	document.getElementById('my-skills').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-me-button').addEventListener('click', function() {
	document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth' });
});


const img = document.getElementById('hoverImage');

// Change the image source when the mouse enters the image
img.addEventListener('mouseenter', () => {
	img.src = 'img/beat_bridge_crop.png'; // The new image you want to show on hover
	img.title='you found the real me > /// <'
});

// Change it back when the mouse leaves the image
img.addEventListener('mouseleave', () => {
	img.src = 'img/kaisouko_normal_default_bg2.png'; // The original image
});


const img2 = document.getElementById('hoverImageAboutMe');

// Change the image source when the mouse enters the image
img2.addEventListener('mouseenter', () => {
	img2.src = 'img/beat_about_me.png'; // The new image you want to show on hover
});

// Change it back when the mouse leaves the image
img2.addEventListener('mouseleave', () => {
	img2.src = 'img/about_me2.png'; // The original image
});


const img3 = document.getElementById('hoverImageSkills');

// Change the image source when the mouse enters the image
img3.addEventListener('mouseenter', () => {
	img3.src = 'img/beat_skills2.png'; // The new image you want to show on hover
});

// Change it back when the mouse leaves the image
img3.addEventListener('mouseleave', () => {
	img3.src = 'img/gura_512_512.png'; // The original image
});


const img4 = document.getElementById('hoverImageContact');

// Change the image source when the mouse enters the image
img4.addEventListener('mouseenter', () => {
	img4.src = 'img/beat_contact.png'; // The new image you want to show on hover
});

// Change it back when the mouse leaves the image
img4.addEventListener('mouseleave', () => {
	img4.src = 'img/vanilla_block.png'; // The original image
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
	}, {
		root: null, // Use the viewport as the container
		threshold: 0.2, // 50% of the element should be in view
		rootMargin: '0px 0px -20% 0px' // Adjust when the element starts to trigger (20% from the bottom)
	});

    sections.forEach((section) => {
        observer.observe(section);
    });
});

