select sum(cd.milk) as totalMilk, cs.breed, cd.mo_num, COUNT(cs.id) as head_of_cow
from cow_daily cd
join cows cs on cd.id = cs.id
where cs.id in (select id from cows where ranch_id_owner = ${id})
group by cs.breed, cd.mo_num