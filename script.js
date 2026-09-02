const loginForm = document.getElementById("loginForm");
const demoButton = document.getElementById("demoButton");
const trainingModal = document.getElementById("trainingModal");
const closeModal = document.getElementById("closeModal");

function showTrainingMessage() {
    trainingModal.classList.add("show");
}

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Training demo only — nothing is saved or sent.
    showTrainingMessage();

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

demoButton.addEventListener("click", function() {
    showTrainingMessage();
});

closeModal.addEventListener("click", function() {
    trainingModal.classList.remove("show");
});

trainingModal.addEventListener("click", function(event) {
    if (event.target === trainingModal) {
        trainingModal.classList.remove("show");
    }
});
