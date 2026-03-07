document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById('app')
    body.innerHTML = `
    <nav>
        <p>alayna_devs</p>
        <div><a href="/resume.html">Resume</a></div>
        <div><a href="/cover-letter.html">Cover Letter</a></div>
        <div><a href="/career-goals.html">Career Goals</a></div>
    </nav>

    <footer id="footer">
        <div>
            <p>&copy&nbsp</p>
            <p class="year-tag"></p>
            <p> &nbspAlayna Taylor. All rights reserved.</p>
        </div>

        <div>
            <p><i class="fa-solid fa-location-dot"></i>Chicago, IL</p>
            <p><i class="fa-solid fa-phone"></i>+1 (708)-506-2319</p>
            <p><i class="fa-solid fa-envelope"></i>alaynaonetay@gmail.com</p>
        </div>
    </footer>
    `
})
