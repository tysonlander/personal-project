insert into cow_watch (ranch_id_owner, sleep, steps, stress, temp, milk)
values(${ownerId}, ${sleep}, ${steps}, ${stress}, ${temp}, ${milk})
returning sleep, steps, stress, temp, milk