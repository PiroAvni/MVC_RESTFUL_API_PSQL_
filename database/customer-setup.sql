DROP TABLE IF EXISTS customer;

create table customer (
	customer_id INT GENERATED ALWAYS AS IDENTITY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50)NOT NULL,
	street_number VARCHAR(10) NOT NULL,
	street_name VARCHAR(50) NOT NULL,
	city VARCHAR(50) NOT NULL,
	post_code VARCHAR(10) NOT NULL,
	country VARCHAR(20) NOT NULL,
	email VARCHAR(120) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	PRIMARY KEY(customer_id)
);
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Shelden', 'Gepp', '75', 'Helena', 'Ford', 'GL54', 'United Kingdom', 'sgepp0@reddit.com', '+44 196 796 7844');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Willette', 'Andreacci', '7443', 'Erie', 'Craigavon', 'BT66', 'United Kingdom', 'wandreacci1@newsvine.com', '+44 300 923 3926');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Sandra', 'Aughton', '3753', 'Hoard', 'Birmingham', 'B12', 'United Kingdom', 'saughton2@hexun.com', '+44 961 686 4177');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Kai', 'Betjeman', '8511', 'Farmco', 'Bradford', 'BD7', 'United Kingdom', 'kbetjeman3@mozilla.org', '+44 418 801 9708');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Ariela', 'Kleinplac', '01507', 'Marquette', 'East End', 'BH21', 'United Kingdom', 'akleinplac4@privacy.gov.au', '+44 449 941 2018');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Chevy', 'Asquez', '71758', 'Ridge Oak', 'Newtown', 'RG20', 'United Kingdom', 'casquez5@tripod.com', '+44 220 920 1845');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Isabeau', 'Bazelle', '362', 'Old Shore', 'Belfast', 'BT2', 'United Kingdom', 'ibazelle6@biblegateway.com', '+44 456 284 5549');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Baillie', 'Macauley', '5', 'Mendota', 'Halton', 'LS9', 'United Kingdom', 'bmacauley7@nhs.uk', '+44 545 813 7452');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Baily', 'Loweth', '9292', 'Carpenter', 'Newbiggin', 'NE46', 'United Kingdom', 'bloweth8@latimes.com', '+44 999 241 9644');
insert into customer (first_name, last_name, street_number, street_name, city, post_code, country, email, phone) values ('Mitzi', 'Aizikovich', '807', 'Jana', 'Sutton', 'CT15', 'United Kingdom', 'maizikovich9@drupal.org', '+44 880 791 2062');
