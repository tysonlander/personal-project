create table ranch_users (
  id serial PRIMARY KEY,
  first_name varchar(200),
  last_name varchar(200),
  ranch varchar(200), 
  email varchar(200),
  Password text
);

create table cows (
 id serial primary key,
 ranch_id_owner int REFERENCES ranch_users (id),
 rfid int,
 breed varchar(200),
 gender varchar(200),
 purchase_price DECIMAL(10, 2)
);

create table cow_daily (
  id int REFERENCES cows (id),
  date date,
  steps INT,
  sleep DECIMAL(10, 2),
  high_bpm int,
  low_bpm int,
  avg_bpm int,
  milk DECIMAL(10, 2),
  stres_index DECIMAL(10, 2),
  avg_temp DECIMAL(10, 2)
);

create table cow_watch (
  id serial primary key,
  ranch_id_owner int REFERENCES ranch_users (id),
  sleep int,
  steps int,
  stress DECIMAL(10, 2),
  temp DECIMAL(10, 2),
  milk int
)

create table cow_hourly (
  id_ int references cows (id),
  temp_reading DECIMAL(10, 2),
  heart_bpm DECIMAL(10, 2),
  day TIMESTAMP
);
