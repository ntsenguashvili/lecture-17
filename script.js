//task 1

function removeButton() {
    let button = document.getElementById("buttonId");
    button.remove();
}

//task 2
document.addEventListener("DOMContentLoaded", function(){
let img = document.createElement("img");
img.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
img.setAttribute("alt", "working");
document.body.appendChild(img);
});


