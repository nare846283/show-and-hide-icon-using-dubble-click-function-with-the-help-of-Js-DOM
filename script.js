var con = document.querySelector(".container");
var icon = document.querySelector("i");


con.addEventListener('dblclick', function() {
    icon.style.transform = 'translate(-50%,-50%) scale(3)';
    icon.style.opacity = .6;

    setTimeout(function(){
        icon.style.opacity = 0;
    }, 2000);
});
