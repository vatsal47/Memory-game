document.getElementById('generate').addEventListener('click', () => {
    //Generate a random six-digit number
    const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000)

    let randomNumber = generateRandomNumber().toString()

    //Display that six-digit number
    document.getElementById('number').innerHTML = randomNumber

    //Storing that number to local storage
    localStorage.setItem('number', randomNumber)

    //Loading secondary page after 5 seconds
    setTimeout(() => location.replace('secondary.html'), 5000)
})



