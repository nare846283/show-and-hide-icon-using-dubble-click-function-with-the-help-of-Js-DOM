var btn = document.querySelector("button")
var changeText = document.querySelector("h2")
var icon = document.querySelector("i")
var check = 0;

btn.addEventListener('click', function() {

    if(check == 0){
        changeText.innerHTML = "&#129309 Friends";
        changeText.style.color = "green";
        icon.style.opacity = "0";
        btn.innerHTML = "Remove Friend";
        btn.style.backgroundColor = "red";

        check = 1;
    }else{
        
        changeText.innerHTML = "Friendship";
        changeText.style.color = "red";
        icon.style.opacity = "1";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "green";

        check = 0;
    }
})
