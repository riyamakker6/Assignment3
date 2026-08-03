const form = document.getElementById("feedbackForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const course = document.getElementById("course");
const feedback = document.getElementById("feedback");

const storedData = document.getElementById("storedData");
const sessionUser = document.getElementById("sessionUser");

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearError(id) {
    document.getElementById(id).textContent = "";
}

// Remove errors automatically
name.addEventListener("input", () => {
    if (name.value.trim() !== "") clearError("nameError");
});

email.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pattern.test(email.value.trim())) {
        clearError("emailError");
    }
});

course.addEventListener("change", () => {
    if (course.value !== "") clearError("courseError");
});

feedback.addEventListener("input", () => {
    if (feedback.value.trim() !== "") clearError("feedbackError");
});

function displayData() {

    const data = JSON.parse(localStorage.getItem("feedback"));

    if (data) {
        storedData.innerHTML = `
            <p><b>Name:</b> ${data.name}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Course:</b> ${data.course}</p>
            <p><b>Feedback:</b> ${data.feedback}</p>
        `;
    } else {
        storedData.innerHTML = "No feedback stored.";
    }

    const currentUser = sessionStorage.getItem("studentName");

    if (currentUser) {
        sessionUser.innerHTML = "Current Session User: " + currentUser;
    } else {
        sessionUser.innerHTML = "";
    }
}

displayData();

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let valid = true;

    if (name.value.trim() === "") {
        showError("nameError", "Name must contain at least 3 characters.");
        valid = false;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        showError("emailError", "Email is required");
        valid = false;
    }
    else if (!pattern.test(email.value.trim())) {
        showError("emailError", "Enter a valid email");
        valid = false;
    }

    if (course.value === "") {
        showError("courseError", "Please select a course.");
        valid = false;
    }

    if (feedback.value.trim() === "") {
        showError("feedbackError", "Please enter feedback!.");
        valid = false;
    }

    if (!valid) return;

    const student = {
        name: name.value,
        email: email.value,
        course: course.value,
        feedback: feedback.value
    };

    // Local Storage
    localStorage.setItem("feedback", JSON.stringify(student));

    // Session Storage
    sessionStorage.setItem("studentName", name.value);

    displayData();

    form.reset();
});

document.getElementById("deleteBtn").addEventListener("click", function(){

    localStorage.removeItem("feedback");
    sessionStorage.removeItem("studentName");

    storedData.innerHTML = "No feedback stored.";
    sessionUser.innerHTML = "";
});