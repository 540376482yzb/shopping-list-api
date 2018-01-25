'use strict'

//=========  get data from server ================
const API = function () {
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/zhou'
  
  
  function getItems(callback){
    // const endPoint = `${BASE_URL}/${end}`
    $.getJSON(`${BASE_URL}/items`,callback)
  }

  //========== post data to server=====================
  // createItem accepts 'pears' as input
  // pass the object {pears}, which received from server, to callback function
  function createItem(itemName, callback){
    const newItem = JSON.stringify({name: itemName})
    const settings = {
      url: `${BASE_URL}/items`,
      method:'POST',
      contentType:'application/json',
      data:newItem,
      success: callback
    }
    $.ajax(settings)
  
  }

  //============ update data to server=============================
  //api update the server data with matching id. callback does not received data
  function updateItem(id, updateData, callback){
    const item = JSON.stringify(updateData)
    const settings = {
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType:'application/json',
      data:item,
      success:callback
    }
    $.ajax(settings)
  }

  //============ delete data from server ===============================
  function deleteItem(id, callback) {
    const settings = {
      url:`${BASE_URL}/items/${id}`,
      method:'DELETE',
      contentType:'application/json',
      success: callback
    }
    $.ajax(settings)
  }

  return{
    getItems,
    createItem,
    updateItem,
    deleteItem
  }
}()