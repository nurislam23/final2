function myFunction() {
    var x = document.getElementById("minmenu");

    x.style.display = "block";

}
//   let elem=[];
//   document.getElementById("buy-1").onclick = function(){elem[0]={'name':'flower kimono','material':'silk','cost':450};
//     localStorage.setItem(elem[0],JSON.stringify(elem[0]));

//   };
//   function getall(){
//     var retrievedObject=JSON.parse(localStorage.getItem(elem))
//     console.log(elem);
//   }

// document.getElementById("buy-1").setAttribute('onclick', setElem);

function setElem(element) {
    let products_basket = (window.localStorage.getItem("elem")) ? JSON.parse(window.localStorage.getItem("elem")) : [];
    let parent = element.closest('.item');
    console.log(products_basket[parent.dataset.id]);
    if (products_basket[parent.dataset.id]) {
        products_basket[parent.dataset.id].count++;
    } else {
        products_basket[parent.dataset.id] = {
            name: parent.querySelector('h4').textContent,
            description: parent.querySelector('.benefits-text').textContent,
            cost: parent.querySelector('.price').textContent,
            source: parent.querySelector('img').getAttribute('src'),
            count: 1
        };
    }

    window.localStorage.setItem("elem", JSON.stringify(products_basket));
};

function vivod() {
    let fff = document.getElementById("plov");
    if (fff.style.display === "block") {
        fff.style.display = "none"
    } else {
        fff.style.display = "block"
    }
}

function vivod2() {
    let fff = document.getElementById("lagman");
    if (fff.style.display === "block") {
        fff.style.display = "none"
    } else {
        fff.style.display = "block"
    }
}



function vivod3() {
    let fff = document.getElementById("ganfan");
    if (fff.style.display === "block") {
        fff.style.display = "none"
    } else {
        fff.style.display = "block"
    }
}