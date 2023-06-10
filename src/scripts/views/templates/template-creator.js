import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" crossorigin="anonymous"/>
  <div class="restaurant__info">
    <h3>Kota</h3>
    <p>${restaurant.city}</p>
    <h3>Alamat</h3>
    <p>${restaurant.address}</p>
    </div>
    <div class="deskripsi">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
    </div>
    
    <h3 id="resto-detail-form-review-title"><span>List Menu</span></h3>
        <div class="restaurant-detail__menu-list">
          <div class="foods">
          <h3>Food</h3>
          </hr>
            <ul class="restaurant-detail__foods">
              ${restaurant.menus.foods
    .map(
      (food) => `
              <li>${food.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
          <div class="drinks">
          <h3>Drink</h3>
          </hr>
            <ul class="restaurant-detail__drinks">
              ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li>${drink.name}</li>`,
    )
    .join('')}
            </ul>
          </div>
        </div>

    <h3 id="resto-detail-form-review-title"><span>Reviews</span></h3>
    <div class="detail-review">
      ${restaurant.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
        <div class="body-review">
          ${review.review}
        </div>
      </div>
      `,
    )
    .join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div tabindex="0" class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like" onclick="alert('Berhasil menyimpan restaurant ke daftar favorit.')">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="unlike" onclick="alert('Berhasil menghapus restaurant dari daftar favorit.')">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
