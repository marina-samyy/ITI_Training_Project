var nameInput = document.querySelector(`#userName`);
var ageInput = document.querySelector(`#userAge`);
var jobInput = document.querySelector(`#userJob`);
var submitBtn = document.querySelector(`.btn-submit`);

submitBtn.addEventListener(`click`, function(){

    var userName = nameInput.value;
    var userAge = ageInput.value;
    var userJob = jobInput.value;

    if (userName == `` || userAge == `` || userJob == ``) {
        alert(`Please fill all fields`);
    } else {
        console.log(`Name: ${userName}`);
        console.log(`Age: ${userAge}`);
        console.log(`Job: ${userJob}`);

        // Bonus: check the age
        if (userAge < 18) {
            alert(`You are under age`);
        } else {
            alert(`Registration Completed`);
        }
    }
});
