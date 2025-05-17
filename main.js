const birthDateEl = document.getElementById('birthDate');
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');


btnEl.addEventListener('click', function () {
    const dateValue = birthDateEl.value;
    const dateYear = new Date(dateValue);
    const year = dateYear.getFullYear();
    
    
    const todayDateStr = new Date();
    const todayYear = todayDateStr.getFullYear();
    const todayDateNum = new Date(todayYear);

    const finalDate = todayDateNum - year;
    


    if (isNaN(dateYear.getTime())) {
        resultEl.innerHTML = 'Please enter a date to calculate';
    } else {
        resultEl.innerHTML = `You are ${finalDate} years old.`;
    }

})


