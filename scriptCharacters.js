//  section teyvat
let sideBar = document.querySelector(".side-bar")
const teyvat = document.querySelector("#teyvat")
const teyvatObs = new IntersectionObserver(function(entries, teyvatObs){
    entries.forEach(entry=> {
        if(entry.isIntersecting){
            sideBar.style.right = "-100%"
            sideBar.style.transitionDuration = "800ms"
        }else if(!entry.isIntersecting){
            sideBar.style.right = "-1%"
            sideBar.style.transitionDuration = "800ms"
        }
    })
}, option1)

teyvatObs.observe(teyvat)

// mondstadt
const mondstadt = document.querySelector("#mondstadt")
const mondstadtObs = new IntersectionObserver(function(entries, mondstadtObs){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".mondstadt-bar").style.transitionDuration = "300ms";
            document.querySelector(".mondstadt-bar").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            document.querySelector(".container-line img").src = 'https://github.com/neisyaholly/JenshinImpekz/blob/main/asset/AssetMaps/side_bar2.png?raw=true'
            // document.querySelector(".mondstadt-bar").style.opacity = 1;
            /* background-color: rgba(255, 255, 255, 0.3); */
        }else if(!entry.isIntersecting){
            document.querySelector(".mondstadt-bar").style.backgroundColor = "transparent";
            // document.querySelector(".mondstadt-bar").style.opacity = 0.2;
        }
    })
}, option)

mondstadtObs.observe(mondstadt)

// liyue
const liyue = document.querySelector("#liyue")
const liyueObs = new IntersectionObserver(function(entries, liyueObs){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".liyue-bar").style.transitionDuration = "300ms";
            document.querySelector(".liyue-bar").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            document.querySelector(".container-line img").src = 'https://github.com/neisyaholly/JenshinImpekz/blob/main/asset/AssetMaps/side_bar3.png?raw=true'
            // document.querySelector(".mondstadt-bar").style.opacity = 1;
            /* background-color: rgba(255, 255, 255, 0.3); */
        }else if(!entry.isIntersecting){
            document.querySelector(".liyue-bar").style.backgroundColor = "transparent";
            // document.querySelector(".mondstadt-bar").style.opacity = 0.2;
        }
    })
}, option)

liyueObs.observe(liyue)

// inazuma
const inazuma = document.querySelector("#inazuma")
const inazumaObs = new IntersectionObserver(function(entries, inazumaObs){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".inazuma-bar").style.transitionDuration = "300ms";
            document.querySelector(".inazuma-bar").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            document.querySelector(".container-line img").src = 'https://github.com/neisyaholly/JenshinImpekz/blob/main/asset/AssetMaps/side_bar4.png?raw=true'
            // document.querySelector(".mondstadt-bar").style.opacity = 1;
            /* background-color: rgba(255, 255, 255, 0.3); */
        }else if(!entry.isIntersecting){
            document.querySelector(".inazuma-bar").style.backgroundColor = "transparent";
            // document.querySelector(".mondstadt-bar").style.opacity = 0.2;
        }
    })
}, option)

inazumaObs.observe(inazuma)

// sumeru
const sumeru = document.querySelector("#sumeru")
const sumeruObs = new IntersectionObserver(function(entries, sumeruObs){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".sumeru-bar").style.transitionDuration = "300ms";
            document.querySelector(".sumeru-bar").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            document.querySelector(".container-line img").src = 'https://github.com/neisyaholly/JenshinImpekz/blob/main/asset/AssetMaps/side_bar5.png?raw=true'
            // document.querySelector(".mondstadt-bar").style.opacity = 1;
            /* background-color: rgba(255, 255, 255, 0.3); */
        }else if(!entry.isIntersecting){
            document.querySelector(".sumeru-bar").style.backgroundColor = "transparent";
            // document.querySelector(".mondstadt-bar").style.opacity = 0.2;
        }
    })
}, option)

sumeruObs.observe(sumeru)
