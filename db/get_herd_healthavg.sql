select date, avg(milk) as "avgMilk", avg(sleep) as "avgSleep", avg(steps) as "avgSteps", avg(stres_index) as "avgStress", avg(avg_temp) as "avgTemp"
from cow_daily
where id in (select id from cows where ranch_id_owner = ${id})
group by date
order by date desc limit 14