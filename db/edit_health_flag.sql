update cow_watch
set 
  sleep = ${sleep}, 
  steps = ${steps}, 
  stress = ${stress}, 
  temp = ${temp},
  milk = ${milk} 
where ranch_id_owner = ${ownerId}