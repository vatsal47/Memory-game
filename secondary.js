// Navigating back to main page
document.getElementById('replay').addEventListener('click', () => {
    location.replace('index.html')
})

document.getElementById('guess').addEventListener('click',() => {
    // Getting input value and stored value
    let inputValue = document.getElementById('input').value.split("")
    let storedValue = localStorage.getItem("number").split("")
    let count = 0
    
    // Alert Error message if input is empty
    if(inputValue.length === 0) {
        alert('Enter a valid number')
    } else {
        // Iterate over storedNumber and check how many values match with inputNumber
        for (let element in storedValue) {
            if (inputValue[element] === storedValue[element]) {
                count++
            }
        }
    }
    // if (inputValue.length === 0) {
    //     alert('Enter a valid number')
    // } else {
    //     count = storedValue.filter((number,index) => number === inputValue[index]).length
    // }

    // Display Resultant Statement
    document.getElementById('result').innerHTML = `${count} correct guesses` 
})


