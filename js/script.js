window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        let oldEnough = document.getElementById("voter");
        oldEnough.setAttribute("class","hidden");
        let baby = document.getElementById("tooYoung");
        baby.setAttribute("class","hidden");
        const age = parseInt(document.querySelector("input#age").value);
        if (age >=18) {
            oldEnough.removeAttribute("class");
        } else {
            baby.removeAttribute("class");
        }
        ;}
    };