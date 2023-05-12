const imgDehya = document.querySelector("#img-dehya")
const descDehya = document.querySelector("#desc-dehya")
const imgMika = document.querySelector("#img-mika")
const descMika = document.querySelector("#desc-mika")

var x = window.matchMedia("(min-width: 500px)")


// console.log(vw)
setInterval(() => {
    // location.reload()
    var vw = window.innerWidth
    if(vw > 770){
        // descDehya.style.display = "none"
        // imgMika.style.opacity = "1"
        // descMika.style.display = "none"
        // imgDehya.style.opacity = "1"

        imgDehya.addEventListener("mouseover", function() {
            // if(x.matches){
                descDehya.style.display = "block"
                imgMika.style.opacity = "0"
            // }
            // console.log(1)
        })
        
        imgDehya.addEventListener("mouseout", function() {
            // console.log(1)
            // if(x.matches){
                descDehya.style.display = "none"
                imgMika.style.opacity = "1"
            // }
        })
        
        imgMika.addEventListener("mouseover", function() {
            // console.log(1)
            // if(x.matches){
                descMika.style.display = "block"
                imgDehya.style.opacity = "0"
            // }
        })
        
        imgMika.addEventListener("mouseout", function() {
            // if(x.matches){
                descMika.style.display = "none"
                imgDehya.style.opacity = "1"
        
            // }
            // console.log(1)
        })
    } else{
        // descDehya.style.display = "block"
        // imgMika.style.opacity = "1"
        // descMika.style.display = "block"
        // imgDehya.style.opacity = "1"
    }
}, 100);








// var y = window.matchMedia("(max-width: 499px)")

// imgDehya.addEventListener("mouseover", function() {
//     if(y.matches){
//         descDehya.style.display = "block"
//         imgMika.style.opacity = "1"
//     }
//     // console.log(1)
// })

// imgDehya.addEventListener("mouseout", function() {
//     // console.log(1)
//     if(y.matches){
//         descDehya.style.display = "block"
//         imgMika.style.opacity = "1"
//     }
// })

// imgMika.addEventListener("mouseover", function() {
//     // console.log(1)
//     if(y.matches){
//         descMika.style.display = "block"
//         imgDehya.style.opacity = "1"
//     }
// })

// imgMika.addEventListener("mouseout", function() {
//     if(y.matches){
//         descMika.style.display = "block"
//         imgDehya.style.opacity = "1"

//     }
//     // console.log(1)
// })
