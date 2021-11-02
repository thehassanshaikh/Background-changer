const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.background= randombg();
    console.log(randombg());

} );

function randombg(){
    return `hsl(${Math.floor(Math.random()
        * 360)}, 100%, 30%)`;
}