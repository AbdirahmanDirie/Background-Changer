const red = document.querySelector(".red");
const dark_blue = document.querySelector(".dark-blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const title = document.querySelector(".title");

red.addEventListener("click", (e)=>{
    document.body.style.backgroundColor = "#da2027";
    red.style.backgroundColor = "#fff";
    red.style.color = "#da2027";
    title.style.color = "#fff";

    dark_blue.style.backgroundColor = "#222e65";
    dark_blue.style.color = "#fff";

    green.style.backgroundColor = "green";
    green.style.color = "#fff";

    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "#fff";

})

dark_blue.addEventListener("click", (e)=>{
    document.body.style.backgroundColor = "#222e65";
    dark_blue.style.backgroundColor = "#fff";
    dark_blue.style.color = "#222e65";
    title.style.color = "#fff";

    red.style.backgroundColor = "#da2027";
    red.style.color = "#fff";

    green.style.backgroundColor = "green";
    green.style.color = "#fff";

    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "#fff";
})

green.addEventListener("click", (e)=>{
    document.body.style.backgroundColor = "green";
    green.style.backgroundColor = "#fff";
    green.style.color = "green";
    title.style.color = "#fff";

    red.style.backgroundColor = "#da2027";
    red.style.color = "#fff";

    yellow.style.backgroundColor = "yellow";
    yellow.style.color = "#fff";

    dark_blue.style.backgroundColor = "#222e65";
    dark_blue.style.color = "#fff";
})


yellow.addEventListener("click", (e)=>{
    document.body.style.backgroundColor = "yellow";
    yellow.style.backgroundColor = "#fff";
    yellow.style.color = "yellow";
    title.style.color = "#fff";

    red.style.backgroundColor = "#da2027";
    red.style.color = "#fff";

    dark_blue.style.backgroundColor = "#222e65";
    dark_blue.style.color = "#fff";

    green.style.backgroundColor = "green";
    green.style.color = "#fff";

    
})