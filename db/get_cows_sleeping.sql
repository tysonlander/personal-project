select c.id, c.rfid, c.ranch_id_owner, cd.date, cd.sleep, cd.steps, cd.stres_index, cd.avg_temp, cd.milk
from cows c
join cow_daily cd on c.id = cd.id
where cd.date = ${ydaDate} and cd.sleep < ${sleepFlag} and c.ranch_id_owner = ${id}
order by cd.date;