document.addEventListener("DOMContentLoaded", function() {
    // Get the home and about sections
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");

    // Content for each section
    const aboutContent = "<h2>About Me</h2><p>Welcome to my portfolio! I am a passionate web developer...</p>";

   

    // Function to update the content of the home section based on the clicked navigation link
    function updateContent(section, content) {
        section.innerHTML = content;
    }

    // Add event listeners to each navigation link
    document.querySelector("a[href='#about']").addEventListener("click", function() {
        updateContent(homeSection, ""); // Clear content from the home section
        updateContent(aboutSection, aboutContent);
    });

    // Add event listeners for other sections if needed...
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the about section
    const aboutSection = document.getElementById("about");

    // Content for the about section
    const aboutContent = "<h2>About Me</h2><p>I thrive on the challenges of coding and the excitement of bringing innovative concepts to life. My journey in web development is fueled by a deep-seated passion for creating seamless and visually appealing online experiences.</p>";

    // Function to update the content of the about section
    function updateContent(section, content) {
        section.innerHTML = content;
    }

    // Add event listener to update content when the "About" link is clicked
    document.querySelector("a[href='#about']").addEventListener("click", function() {
        updateContent(aboutSection, aboutContent);
    });

    // Add event listeners for other sections if needed...
});
