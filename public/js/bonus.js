(function(){
    let fly = document.createElement("img");
    fly.src= "./img/fly.gif";
    fly.style=`
    position: fixed;
    background: radial-gradient(20px,#343a4014, 18px, transparent);
    width: 68px;
    top: 80%;
    right: 88%;`;
    document.body.appendChild(fly);
})();