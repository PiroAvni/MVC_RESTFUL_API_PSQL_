DROP TABLE IF EXISTS bank_details;

create table bank_details (
	bank_id INT GENERATED ALWAYS AS IDENTITY,
	customer_id BIGSERIAL NOT NULL,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	street_number VARCHAR(50),
	street_name VARCHAR(50),
	city VARCHAR(50),
	post_code VARCHAR(50),
	country VARCHAR(50),
	credit_card_no VARCHAR(50),
	credit_card_type VARCHAR(50),
	iban VARCHAR(50),
	PRIMARY KEY(bank_id),
	FOREIGN KEY(customer_id) REFERENCES customer(customer_id)
);
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Shelden', 'Gepp', '75', 'Helena', 'Ford', 'GL54', 'United Kingdom', '5100142536384280', 'mastercard', 'PK50 RHHT 5LHX RWFN HL4C 6B6V');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Willette', 'Andreacci', '7443', 'Erie', 'Craigavon', 'BT66', 'United Kingdom', '5418101792289101', 'mastercard', 'FR73 7672 4857 43BW J3Q2 QY1F J69');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Sandra', 'Aughton', '3753', 'Hoard', 'Birmingham', 'B12', 'United Kingdom','4017956606248', 'visa', 'FR07 7886 2644 74DJ EAH7 XZES Y75');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Kai', 'Betjeman', '8511', 'Farmco', 'Bradford', 'BD7', 'United Kingdom','4267388131675', 'visa', 'MR50 6211 2291 8476 5188 0646 509');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Ariela', 'Kleinplac', '01507', 'Marquette', 'East End', 'BH21', 'United Kingdom','5597358591619911', 'mastercard', 'HU28 2108 2063 5538 2947 5063 8395');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Chevy', 'Asquez', '71758', 'Ridge Oak', 'Newtown', 'RG20', 'United Kingdom','4041373012196840', 'visa', 'BE76 5475 0709 9722');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Isabeau', 'Bazelle', '362', 'Old Shore', 'Belfast', 'BT2', 'United Kingdom','4041599449063', 'visa', 'DO96 0JPV 7100 8116 6823 5195 1418');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Baillie', 'Macauley', '5', 'Mendota', 'Halton', 'LS9', 'United Kingdom','4041595272733', 'visa', 'FO88 6257 6457 3816 35');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Baily', 'Loweth', '9292', 'Carpenter', 'Newbiggin', 'NE46', 'United Kingdom','5358341108421756', 'mastercard', 'IL22 3446 2394 6575 9630 620');
insert into bank_details (first_name, last_name, street_number, street_name, city, post_code, country, credit_card_no, credit_card_type, iban) values ('Mitzi', 'Aizikovich', '807', 'Jana', 'Sutton', 'CT15', 'United Kingdom','4447523138971', 'visa', 'FR32 6507 4285 01R6 PSHU T0HI 026');
