update cows
set 
  rfid = ${rfid}, 
  breed = ${breed}, 
  gender = ${gender}, 
  purchase_price = ${purchasePrice} 
where id = ${cowId}