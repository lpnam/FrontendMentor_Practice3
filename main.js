const submitButton = document.querySelector('.button');

const firstContent = document.querySelector('.first');
const secondContent = document.querySelector('.second');
const ratingCheck = document.querySelectorAll('.rating_number');

const removeAllSelected = () => {
    ratingCheck.forEach((div) => {
        div.classList.remove('selected');
    })
}

ratingCheck.forEach((nth) => {
    nth.addEventListener('click', removeAllSelected);
    nth.addEventListener('click', () => {
        nth.classList.add('selected');
        let getRate = nth.textContent;
        document.querySelector('.result').textContent = "You selected " + getRate + " out of 5";
    });
});

const toogleContent = () => {
    const check = firstContent.getAttribute("show") === "true";
    const isSelected = document.querySelector('.selected') !== null;
    if (isSelected)
    {
        if (check) 
        {
            firstContent.setAttribute("show", "false");
            secondContent.setAttribute("show", "true");
        }
    }
    else {
        alert("Please rate for us");
    }
}

submitButton.addEventListener('click', toogleContent);

