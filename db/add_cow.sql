insert into cows (ranch_id_owner, rfid, breed, gender, purchase_price, location)
values(${ownerId}, ${rfid}, ${breed}, ${gender}, ${purchasePrice}, ${location})
returning rfid, breed, gender, purchase_price, location