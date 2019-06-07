select * from cows
where ranch_id_owner = ${id}

-- if I need to add in a join to pull milk production
-- select * 
-- from cows
-- left join cow_daily
-- ON cows.id = cow_daily.id
-- where date = '2019-06-05' 