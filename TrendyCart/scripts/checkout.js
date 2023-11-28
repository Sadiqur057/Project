let bagItemsObjects;
onLoad();
function onLoad(){
    loadBagItemsObjects();
    displayBagItems();
}


function loadBagItemsObjects(){
    // console.log(bagItems);
    bagItemsObjects = bagItems.map((itemId) =>{
        for(let i=0; i<items.length; i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    })
    console.log(bagItemsObjects);
}



function displayBagItems(){
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML= ''
    bagItemsObjects.forEach(Bagitem => {
        innerHTML += generateItemHTML(Bagitem);
    });
    containerElement.innerHTML = innerHTML;
    
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItemsId', JSON.stringify(bagItems));
    loadBagItemsObjects();
    displayBagIcon();
    displayBagItems();

}

function generateItemHTML(item){
    return `
    <div class="bag-item-container">
    <div class="item-left-part">
      <img src="../${item.itemImage}" alt="" class="bag-item-img" />
    </div>
    <a href="#" class="checkout-close-btn" onclick="removeFromBag(${item.id})">
      <span class="material-symbols-outlined ">
        close
      </span>
    </a>
    <div class="item-right-part">
      <p class="company-name">${item.companyName}</p>
      <p class="item-name">${item.itemName}</p>
      <div class="price-section checkout-price">
        <span class="current-price">BDT ${item.currentPrice}</span>
        <span class="original-price"> BDT ${item.originalPrice}</span>
        <span class="discount">(${item.discount}% OFF)</span>
      </div>
      <div class="return-section">
        <span class="heading-3">${item.returnPeriod} days</span>
        <span class="return-text">return available</span>
      </div>
      <div class="delivery-section">
        <span class="text-sm">Delivery by</span>
        <span class="delivery-date text-sm">${item.deliveryDate}</span>
      </div>
    </div>
  </div>
    `
}