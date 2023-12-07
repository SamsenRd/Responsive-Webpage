const countDownDate = new Date("December 20, 2023 15:37:25").getTime()

let x = setInterval(function(){
    let now = new Date().getTime()
    let distance = countDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`

    if(distance < 0){
        clearInterval(x)
        document.getElementById("timer").innerHTML = `My book is now available for purchase!`
    }
}, 1000)