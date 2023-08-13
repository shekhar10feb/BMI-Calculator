const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height.';
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight.';
    } else {
        const bmi =  (weight / ((height * height) / 10000)).toFixed(2)

        if(bmi < 18.6) {
            results.innerHTML = `<p>${bmi}</p><p>You are under weight!</p>`;
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `
                 <span>${bmi}</span>
                 <span>You are Normal weight!</span>`;

        } else {
            results.innerHTML = `
                 <p>${bmi}</p>
                 <p>You are Over weight!</p>`;
        }
    }
})