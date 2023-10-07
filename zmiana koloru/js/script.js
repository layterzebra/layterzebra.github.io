var button = document.querySelector("#changeColorText");
        var text = document.querySelector("#mainText");
        var isEnlarged = false;

        button.onclick = function() {
            if (isEnlarged) {
                text.classList.remove("textGreen");
                isEnlarged = false;
            } else {
                text.classList.add("textGreen");
                isEnlarged = true;
            }
        };