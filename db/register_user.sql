insert into ranch_users (first_name, last_name, ranch, email, password)
values(${firstName}, ${lastName}, ${ranch}, ${email}, ${password})
returning id, first_name