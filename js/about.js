let overLay2 = document.querySelectorAll('.overlay')

document.addEventListener("scroll", () => {
        // console.log(window.pageYOffset)
        if (window.pageYOffset > 65) {
            document.getElementById("over").style.backgroundColor = `#444141`
            document.querySelector(".head").style.position = "fixed";
            document.getElementById("Hcont").style.height = "60px"
        } else {
            document.getElementById("over").style.backgroundColor = `rgba(21, 21, 21, 0.1)`
            document.getElementById("Hcont").style.height = "90px"
        }
        if (window.pageYOffset >= 623) {
            console.log("done")
            document.getElementById("to-top").style.visibility = "visible"
        } else {
            document.getElementById("to-top").style.visibility = "hidden"
        }
    })
    // document.getElementById("to-top").addEventListener("click", function() {
    //     console.log(window.pageYOffset)
    // })
let click = document.getElementById("sHead")
let menu = document.getElementById("sideB")
let click2 = document.getElementById("sHead2")
    // var pusher = document.querySelector('.st-pusher');
    // var effect;
click.addEventListener("click", function() {
    menu.style.display = "block"
    click.style.display = "none"
    click2.style.display = "block"

});
click2.addEventListener("click", function() {
    click2.style.display = "none"
    click.style.display = "block"
    menu.style.display = "none"
})