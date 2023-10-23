document.addEventListener("DOMContentLoaded", function() {
    // Get the contact section
    const contactSection = document.getElementById("contact");

    // Content for the contact section
    const contactContent = "<h2>Contact Me</h2>" +
        "<p>Email: lukkaroshini@gmail.com</p>" +
        "<p>LinkedIn: <a href='https://www.linkedin.com/in/lukka-roshini-125a7928a/' target='_blank'>linkedin.com/in/lukka-roshini-125a7928a</a></p>" +
        "<p>GitHub: <a href='https://github.com/roshinilukka' target='_blank'>github.com/roshinilukka</a></p>";

    // Function to update the content of the contact section
    function updateContent(section, content) {
        section.innerHTML = content;
    }

    // Add event listener to update content when the "Contact" link is clicked
    document.querySelector("a[href='#contact']").addEventListener("click", function() {
        updateContent(contactSection, contactContent);
    });

    // Add event listeners for other sections if needed...
});
