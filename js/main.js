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
document.getElementById("to-top").addEventListener("click", function() {

    console.log(window.pageYOffset)

})

let click = document.getElementById("sHead")
let menu = document.getElementById("sideB")
let click2 = document.getElementById("sHead2")
    // var pusher = document.querySelector('.st-pusher');
    // var effect;
click.addEventListener("click", function() {
    menu.style.display = "block"
    click.style.display = "none"
    click2.style.display = "block"
    console.log(`click1`)

});
click2.addEventListener("click", function() {
    click2.style.display = "none"
    click.style.display = "block"
    menu.style.display = "none"
})

let mains = document.querySelector(".num1")
let deserts = document.querySelector(".num2")
let drinks = document.querySelector(".num3")
let tapnum1 = document.getElementById("tabs-1-1")
let tapnum2 = document.getElementById("tabs-1-2")
let tapnum3 = document.getElementById("tabs-1-3")
mains.addEventListener("click", function() {
    mains.classList.add("active", "show")
    tapnum1.classList.add("active", "show")
    deserts.classList.remove("active", "show")
    tapnum2.classList.remove("active", "show")
    tapnum3.classList.remove("active", "show")
    drinks.classList.remove("active", "show")

})
deserts.addEventListener("click", function() {
    deserts.classList.add("active", "show")
    tapnum2.classList.add("active", "show")
    mains.classList.remove("active", "show")
    tapnum1.classList.remove("active", "show")
    tapnum3.classList.remove("active", "show")
    drinks.classList.remove("active", "show")
})
drinks.addEventListener("click", function() {
    drinks.classList.add("active", "show")
    tapnum3.classList.add("active", "show")
    deserts.classList.remove("active", "show")
    tapnum1.classList.remove("active", "show")
    tapnum2.classList.remove("active", "show")
    mains.classList.remove("active", "show")
})
let Close1 = document.getElementById("cls")
let Close2 = document.getElementById("cls1")
let Close3 = document.getElementById("cls2")
let Close4 = document.getElementById("cls3")
let Close5 = document.getElementById("cls4")
let zoom1 = document.getElementById("zoom1")
let zoom2 = document.getElementById("zoom2")
let zoom3 = document.getElementById("zoom3")
let zoom4 = document.getElementById("zoom4")
let zoom5 = document.getElementById("zoom5")
let full1 = document.querySelector(".full1")
let full2 = document.querySelector(".full2")
let full3 = document.querySelector(".full3")
let full4 = document.querySelector(".full4")
let full5 = document.querySelector(".full5")
zoom1.addEventListener("click", function() {
    full1.style.visibility = "visible"
        // full1.addEventListener("click", () => {
        //     full1.style.visibility = "hidden"
        // })
})
zoom2.addEventListener("click", function() {
    full2.style.visibility = "visible"
        // full2.addEventListener("click", () => {
        //     full2.style.visibility = "hidden"
        // })
})

zoom3.addEventListener("click", function() {
    full3.style.visibility = "visible"

    // full3.addEventListener("click", () => {
    //     full3.style.visibility = "hidden"
    // })
})
zoom4.addEventListener("click", function() {
    full4.style.visibility = "visible"
        // full4.addEventListener("click", () => {
        //     full4.style.visibility = "hidden"
        // })
})
zoom5.addEventListener("click", function() {
    full5.style.visibility = "visible"
        // full5.addEventListener("click", () => {
        //     full5.style.visibility = "hidden"
        // })
})

Close1.addEventListener("click", function() {
    full1.style.visibility = "hidden"
})
Close2.addEventListener("click", function() {
    full2.style.visibility = "hidden"

})
Close3.addEventListener("click", function() {
    full3.style.visibility = "hidden"

})
Close4.addEventListener("click", function() {
    full4.style.visibility = "hidden"

})
Close5.addEventListener("click", function() {
    full5.style.visibility = "hidden"
})

let share_d = document.querySelector(".full1 .share")
let share_d1 = document.querySelector(".full2 .share")
let share_d2 = document.querySelector(".full3 .share")
let share_d3 = document.querySelector(".full4 .share")
let share_d4 = document.querySelector(".full5 .share")
share_d.addEventListener("click", function() {
    if (document.querySelector(".full1 .share ul").classList.contains("show")) {
        document.querySelector(".full1 .share ul").classList.remove("show")
    } else {
        document.querySelector(".full1 .share ul").classList.add("show")
    }
})

share_d1.addEventListener("click", function() {
        if (document.querySelector(".full2 .share ul").classList.contains("show")) {
            document.querySelector(".full2 .share ul").classList.remove("show")
        } else {
            document.querySelector(".full2 .share ul").classList.add("show")
        }
    }

)
share_d2.addEventListener("click", function() {
        if (document.querySelector(".full3 .share ul").classList.contains("show")) {
            document.querySelector(".full3 .share ul").classList.remove("show")
        } else {
            document.querySelector(".full3 .share ul").classList.add("show")
        }
    }

);
Close1.addEventListener("click", function() {
    document.querySelector(".full1 .share ul").classList.remove("show")
})
share_d3.addEventListener("click", function() {
    if (document.querySelector(".full4 .share ul").classList.contains("show")) {
        document.querySelector(".full4 .share ul").classList.remove("show")
    } else {
        document.querySelector(".full4 .share ul").classList.add("show")
    }
})
share_d4.addEventListener("click", function() {
    if (document.querySelector(".full5 .share ul").classList.contains("show")) {
        document.querySelector(".full5 .share ul").classList.remove("show")
    } else {
        document.querySelector(".full5 .share ul").classList.add("show")
    }
})

Close2.addEventListener("click", function() {
    document.querySelector(".full2 .share ul").classList.remove("show")

})
Close3.addEventListener("click", function() {
    document.querySelector(".full3 .share ul").classList.remove("show")

})
Close4.addEventListener("click", function() {
    document.querySelector(".full4 .share ul").classList.remove("show")

})
Close5.addEventListener("click", function() {
    document.querySelector(".full5 .share ul").classList.remove("show")
})
let dot1 = document.querySelector(".firstdot")
let dot2 = document.querySelector(".secdot")
let dot3 = document.querySelector(".thirddot")
let contentdot1 = document.querySelector(".dot1")
let contentdot2 = document.querySelector(".dot2")
let contentdot3 = document.querySelector(".dot3")

dot1.addEventListener("click", () => {
    dot1.classList.add("active")
    dot2.classList.remove("active")
    dot3.classList.remove("active")
    contentdot1.style.display = "block"
    contentdot2.style.display = "none"
    contentdot3.style.display = "none"
})
dot2.addEventListener("click", () => {
    dot2.classList.add("active")
    dot1.classList.remove("active")
    dot3.classList.remove("active")
    contentdot1.style.display = "none"
    contentdot2.style.display = "block"
    contentdot3.style.display = "none"
})
dot3.addEventListener("click", () => {
    dot3.classList.add("active")
    dot2.classList.remove("active")
    dot1.classList.remove("active")
    contentdot1.style.display = "none"
    contentdot2.style.display = "none"
    contentdot3.style.display = "block"
})