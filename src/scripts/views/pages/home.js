import RestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero-image">
      <picture>
        <source media="(max-width: 600px)" class="lazyload" data-srcset="./images/sharp/hero-image_2-small.webp">
        <img class="lazyload" data-src="./images/sharp/hero-image_2-large.webp" alt="Featured Image">
      </picture>
    </div>
    <div class="content">
    <h2 class="content__heading">Explorer Now</h2>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
