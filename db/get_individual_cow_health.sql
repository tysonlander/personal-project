select * from cow_daily
where id = ${cowId}
order by date desc limit 14