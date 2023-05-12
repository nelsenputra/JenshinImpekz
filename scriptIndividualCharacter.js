const container = document.querySelector(".container-page")
const img = [
    "https://github.com/neisyaholly/JenshinImpekz/blob/main/asset/AssetCharacters/individualBG1.jpg?raw=true",
    "https://github.com/neisyaholly/JenshinImpekz/blob/main/asset/AssetCharacters/individualBG2.jpg?raw=true"
]

var i = 0

setInterval(()=>{
    container.style.backgroundImage = "url(" + img[i%2] +")"
    console.log(i)
    i += 1
}, 5000)