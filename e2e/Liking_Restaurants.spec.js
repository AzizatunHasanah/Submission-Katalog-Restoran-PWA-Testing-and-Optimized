/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/home');
});

Scenario('Like and Unlike a Restaurant', ({ I }) => {
  I.click('.restaurant-item__content');

  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.waitForElement('#restaurant');

  I.waitForClickable('.like');
  I.click('.like');
  I.seeInPopup('Berhasil menyimpan restaurant ke daftar favorit.');

  I.waitForClickable('.unlike');
  I.click('.unlike');
  I.seeInPopup('Berhasil menghapus restaurant dari daftar favorit.');
});
