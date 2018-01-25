'use strict'
/* global shoppingList, store, API */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  
  API.getItems( items => {
    items.forEach(item => {
      store.items.push(item)
    })
    shoppingList.render()
  })
});

