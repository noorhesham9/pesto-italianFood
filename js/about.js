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



let testnum1 = document.querySelector(".img1")
let testnum2 = document.querySelector(".img2")
let testnum3 = document.querySelector(".img3")
let testnum4 = document.querySelector(".img4")
let testcontent1 = document.querySelector(".JoannaSmith")
let testcontent2 = document.querySelector(".JamesWilliams")
let testcontent3 = document.querySelector(".KateMcMillan")
let testcontent4 = document.querySelector(".PeterWilson")

testnum1.addEventListener("click", function() {
    testnum1.classList.add("active")
    testnum2.classList.remove("active")
    testnum3.classList.remove("active")
    testnum4.classList.remove("active")
    testcontent1.classList.add("active", "show")
    testcontent1.classList.remove("disapper")
    testcontent2.classList.remove("active", "show")
    testcontent3.classList.remove("active", "show")
    testcontent4.classList.remove("active", "show")
    testcontent2.classList.add("disapper")
    testcontent3.classList.add("disapper")
    testcontent4.classList.add("disapper")

})
testnum2.addEventListener("click", function() {
    testnum1.classList.remove("active")
    testnum2.classList.add("active")
    testnum3.classList.remove("active")
    testnum4.classList.remove("active")

    testcontent1.classList.remove("active", "show")
    testcontent2.classList.add("active", "show")
    testcontent3.classList.remove("active", "show")
    testcontent4.classList.remove("active", "show")
    testcontent2.classList.remove("disapper")
    testcontent1.classList.add("disapper")
    testcontent3.classList.add("disapper")
    testcontent4.classList.add("disapper")
})
testnum3.addEventListener("click", function() {
    testnum1.classList.remove("active")
    testcontent1.classList.remove("active", "show")
    testnum2.classList.remove("active")
    testnum3.classList.add("active")
    testnum4.classList.remove("active")
    testcontent2.classList.remove("active", "show")
    testcontent3.classList.add("active", "show")
    testcontent4.classList.remove("active", "show")
    testcontent3.classList.remove("disapper")
    testcontent1.classList.add("disapper")
    testcontent2.classList.add("disapper")
    testcontent4.classList.add("disapper")
})
testnum4.addEventListener("click", function() {
    testnum1.classList.remove("active")
    testcontent1.classList.remove("active", "show")
    testnum2.classList.remove("active")
    testnum3.classList.remove("active")
    testnum4.classList.add("active")
    testcontent2.classList.remove("active", "show")
    testcontent3.classList.remove("active", "show")
    testcontent4.classList.add("active", "show")
    testcontent4.classList.remove("disapper")
    testcontent2.classList.add("disapper")
    testcontent3.classList.add("disapper")
    testcontent1.classList.add("disapper")
})