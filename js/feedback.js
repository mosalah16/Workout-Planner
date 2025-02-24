
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var feedback = document.getElementById("feedback").value;

        var feedbackContent = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Feedback:</strong></p>
            <p>${feedback}</p>
        `;

        var feedbackDataDiv = document.getElementById("result").querySelector(".feedbackdata");
        feedbackDataDiv.innerHTML = feedbackContent;

        document.getElementById("result").style.display = "block";
    });

    window.copyFeedback = function() {
        var feedbackText = document.querySelector(".feedbackdata").innerText;
        var textArea = document.createElement("textarea");
        textArea.value = feedbackText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Feedback copied to clipboard! You can now paste it into an email.");
    };
});
