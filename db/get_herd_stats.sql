select date, sum(milk) as "totalMilk", sum(steps) as "totalSteps", avg(stres_index) as "avgStress"
from cow_daily
where id in (select id from cows where ranch_id_owner = ${id})
group by date
order by date asc limit 30