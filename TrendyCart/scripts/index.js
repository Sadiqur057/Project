let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItemsId');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemOnHomePage();
    displayBagIcon();
}

function addToBag(item){
    bagItems.push(item);
    localStorage.setItem('bagItemsId', JSON.stringify(bagItems))
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.display = "block";
        bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.display = "none";
    }
}

function displayItemOnHomePage(){
    let itemsContainerElement = document.querySelector('#items-container');
let innerHTML = '';
items.forEach(item =>{
    innerHTML+= `
        <div class="item-content">
        <div class="item-image-container">
            <img class="item-image" src="${item.itemImage}" alt="">
        </div>
        <div class="rating">
            <p class="rating-text"> ${item.rating.star} <i class="fa-solid fa-star rating-icon"></i>  | ${item.rating.numOfRevies}</p>
        </div>
        <div class="item-desc">
            <h4 class="company-name">${item.companyName}</h4>
            <p class="item-name">${item.itemName}</p>
            <div class="price-section">
                <span class="current-price">BDT. ${item.currentPrice}</span>
                <span class="original-price">BDT. ${item.originalPrice}</span>
                <span class="discount">${item.discount}% OFF</span>
            </div>
        </div>
        <div class="bag-container">
            <a href="#" onclick = "addToBag(${item.id})" class="add-to-bag"><span class="material-symbols-outlined bag-icon">shopping_bag </span> Add to Bag
            </a>
            <p class="item-size">Sizes: L, XL</p>
        </div>
        </div>
`
});
itemsContainerElement.innerHTML = innerHTML;
}
