//task 1

function removeButton() {
    let button = document.getElementById("buttonId");
    button.remove();
}

document.addEventListener("DOMContentLoaded", function () {

    //task2
    let img = document.createElement("img");
    img.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
    img.setAttribute("alt", "working");
    document.body.appendChild(img);

    //task4
    let ptag = document.getElementById("calculated");
    const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }] 

    ptag.innerHTML = calculateSum(productData)

    //task5
    createCards(0);
    createCards(1);
    createCards(2);
    createCards(3);
});

//task3
function changeValue(){
    document.getElementById("savedText").innerHTML = document.getElementById("textInput").value
}

//task 4

function calculateSum(inData){
    let sum =0;
    inData.forEach(element => {
        sum +=element.amount
    });
    return sum;
}
    
// Task5
const users = [
    {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    image: "https://picsum.photos/200/300&quot;:"
    },
    {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    image: "00",
    },
    {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    image: "00",
    },
    {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    image: "00",
    },
    {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    image: "00",
    },
    {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    image: "00",
    }
    ];

function createCards(cardId){
    let myCard = document.createElement("div");
    let name = document.createElement("p");
    name.innerHTML = ` ${users[cardId].first_name} ${users[cardId].last_name}`
    myCard.appendChild(name);
    let img = document.createElement("img");
    img.setAttribute("src", "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
    img.setAttribute("alt", "Card Image");
    myCard.appendChild(img);    
    document.getElementById("user-list").appendChild(myCard)
}