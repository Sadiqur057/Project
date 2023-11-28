let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItemsId');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayHeader()
    displayItemOnHomePage();
    displayBagIcon();
    displayFooter();

}

function displayHeader() {
    let headerContent = document.querySelector('#header');
    headerContent.innerHTML = `
      <nav class="navbar-container container">
        <div class="logo-container">
          <a href="../index.html"
            ><img src="../images/cart.png" class="logo-img" alt=""
          /></a>
        </div>
        <input type="checkbox" id="check" class="hamburger-checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span><span class="line line2"></span
          ><span class="line line3"></span>
        </div>
        <div class="nav-content" id="nav-content">
          <ul class="nav-bar">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Home & Living</a></li>
            <li><a href="#">Beauty</a></li>
            <li>
              <a href="#">Studio<sup>New</sup></a>
            </li>
          </ul>
          <div class="search-bar">
            <span class="material-symbols-outlined search-icon"> search </span>
            <input
              class="search-input"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div class="action-bar">
            <a class="action-container">
              <span class="material-symbols-outlined">person</span>
              <span class="action-name">Profile</span>
              <span class="profile"></span>
            </a>
            <a class="action-container">
              <span class="material-symbols-outlined"> favorite</span>
              <span class="action-name">Wishlist</span>
              <span class="wishlist-item-count">0</span>
            </a>
            <a class="action-container" href="../pages/checkout.html">
              <span class="material-symbols-outlined">shopping_bag </span>
              <span class="action-name">Bag</span>
              <span class="bag-item-count">0</span>
            </a>
          </div>
        </div>
      </nav>
    `

}
function displayFooter() {
    let footerContent = document.querySelector('#footer');
    footerContent.innerHTML = `
      <div class="footer-container">
        <div class="footer-column">
          <h4 class="footer-header">ONLINE SHOPPPING</h4>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
        </div>
        <div class="footer-column">
          <h4 class="footer-header">CUSTOMER POLICIES</h4>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Term Of Use</a>
          <a href="#">Trac Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Grievance Officer</a>
        </div>
        <div class="footer-column">
          <h4 class="footer-header">USEFUL LINKS</h4>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Map</a>
          <a href="#">Corporate Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
        </div>
      </div>
      <div class="copyright">© 2023 TrendyCart. All rights reserved.</div>
    `

}

function addToBag(item) {
    bagItems.push(item);
    localStorage.setItem('bagItemsId', JSON.stringify(bagItems))
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.display = "block";
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.display = "none";
    }
}

function displayItemOnHomePage() {
    let itemsContainerElement = document.querySelector('#items-container');
    if (itemsContainerElement) {
        let innerHTML = '';
        items.forEach(item => {
            innerHTML += `
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
                <a onclick = "addToBag(${item.id})" class="add-to-bag"><span class="material-symbols-outlined bag-icon">shopping_bag </span> Add to Bag
                </a>
                <p class="item-size">Sizes: L, XL</p>
            </div>
            </div>
    `
        });
        itemsContainerElement.innerHTML = innerHTML;
    }
}
