let bagItemsObjects;
const CONVENIENCE_FEES = 99;
onLoad();
function onLoad(){
    loadBagItemsObjects();
    displayBagItems();
    displayBagSummary();

}

function displayBagSummary(){
  let displayBagSummaryElement = document.querySelector('.bag-summary');
  let totalItems = bagItemsObjects.length;
  let totalMRP = 2;
  let totalDiscount = 2;
  bagItemsObjects.forEach((bagItem)=>{
    totalMRP += bagItem.originalPrice;
    totalDiscount += bagItem.originalPrice-bagItem.currentPrice;
  })
  let totalPayment =  totalMRP-totalDiscount +CONVENIENCE_FEES;
  displayBagSummaryElement.innerHTML = `
  <div class="bag-details-container">
  <p class="price-header">PRICE DETAILS (${totalItems} Items)</p>
  <div class="price-item">
    <span class="price-item-tag">Total BDT</span>
    <span class="price-item-value">-BDT. ${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on BDT</span>
    <span class="price-item-value price-base-discount">-BDT. ${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">-BDT. 99</span>
  </div>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">-BDT. ${totalPayment}</span>
  </div>
  </div>
    <a class="btn-place-order" href="#">Place Order</a>
  </div>
  `
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
    displayBagSummary();
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