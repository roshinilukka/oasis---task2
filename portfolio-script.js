document.addEventListener("DOMContentLoaded", function() {
    // Get the portfolio section
    const portfolioSection = document.getElementById("portfolio");

    // Content for the portfolio section
    const portfolioContent = "<h2>Portfolio</h2>" +
        "<div class='work'>" +
            "<h3>Recently I am working on a React project</h3>" +
            "<h3>Online Bookstore</h3>" +
            "<p>A React project for an online bookstore.</p>" +
            "<p>We came up with a problem statement to clearly understand the problem that we are working with. Here’s the problem statement:</p>" +
            "<p><strong>Problem Statement:</strong> The goal of this project is to build an online bookstore using the MERN stack (MongoDB, Express, React, Node.js). The website should allow users to browse and purchase books, create accounts, and manage their orders. Additionally, the website should have an administrative panel for managing inventory, orders, and user accounts. The project should prioritize user experience and security.</p>" +
            "<p><strong>About the project:</strong> The online bookstore MERN project is an ambitious project that seeks to build a fully featured platform from the ground up. The project utilizes the MERN stack, which is a popular combination of technologies used for building web applications. MongoDB is used for data storage, Express is used for building the server, React is used for the front-end, and Node.js is used for the back-end. This combination of technologies is known for being fast, efficient, and scalable, making it an ideal choice for a project of this scope.</p>" +
            "<div class='screenshots'>" +
                "<img src='onlinebookstore.jpg' alt='Screenshot 1'>" +
            "</div>" +
        "</div>";

    // Function to update the content of the portfolio section
    function updateContent(section, content) {
        section.innerHTML = content;
    }

    // Add event listener to update content when the "Portfolio" link is clicked
    document.querySelector("a[href='#portfolio']").addEventListener("click", function() {
        updateContent(portfolioSection, portfolioContent);
    });

    // Add event listeners for other sections if needed...
});

