document.getElementById('Survey').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const hours = document.querySelector('input[name="hours"]:checked').value;
    const questionOne = document.querySelector(".question-1");
    const questionTwo = document.querySelector(".question-2");
    const questionThree = document.querySelector(".question-3");
    const questionFour = document.querySelector(".question-4");
    const questionFive = document.querySelector(".question-5");
    const btnNext = document.querySelector(".btn-Next");
    const btnYes = document.querySelector(".btn-Yes");
    const btnNo = document.querySelector(".btn-No");
    const imageOne = document.querySelector(".image-1");
    const audioOne = document.querySelector(".audio-1");
    const container = document.querySelector(".container");
    console.log(questionFour, imageOne, questionFive, btnYes, btnNo);

    function getrandomnumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    btnNo.addEventListener("click", () => {
        const containerRect = container.getBoundingClientRect();
        const btnRect = btnNo.getBoundingClientRect();
        const newTop = getrandomnumber(0, containerRect.height - btnRect.height);
        const newLeft = getrandomnumber(0, containerRect.width - btnRect.width);
    
        btnNo.style.position = "absolute";
        btnNo.style.top = `${newTop}px`;
        btnNo.style.left = `${newLeft}px`;
    });

    btnNext.addEventListener("click", () => {
        btnYes.classList.remove("hide");
        btnNo.classList.remove("hide");
        btnNext.classList.add("hide");
        questionOne.classList.add("hide");
        questionTwo.classList.add("hide");
        questionThree.classList.add("hide");
        questionFour.classList.remove("hide");
    });

    btnYes.addEventListener("click", () => {
        questionFour.classList.add("hide");
        questionFive.classList.remove("hide");
        btnYes.classList.add("hide");
        btnNo.classList.add("hide");
        imageOne.classList.remove("hide");
        audioOne.classList.remove("hide");
    });
});