// services-script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the services section
    const servicesSection = document.getElementById("services");

    // Content for the services section
    const servicesContent = "<h2>Services</h2><p>I offer a range of web development services tailored to meet your needs. Whether you're looking for a responsive website, a dynamic web application, or custom solutions, I've got you covered.</p><p>My expertise includes front-end technologies such as HTML, CSS, and JavaScript, as well as back-end technologies like Node.js and Express. I'm dedicated to delivering high-quality, efficient, and scalable solutions that enhance your online presence.</p><p>Let's collaborate to turn your ideas into digital reality. Your success is my priority!</p>";

    // Function to update the content of the services section
    function updateContent(section, content) {
        section.innerHTML = content;
    }

    // Add event listener to update content when the "Services" link is clicked
    document.querySelector("a[href='#services']").addEventListener("click", function() {
        updateContent(servicesSection, servicesContent);
    });

    // Add event listeners for other sections if needed...
});
