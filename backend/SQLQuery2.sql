DROP DATABASE IF EXISTS `Parks_and_Recreation`;
DROP TABLE  IF EXISTS `users`;

CREATE DATABASE `Parks_and_Recreation`;
USE `Parks_and_Recreation`;



CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(50),
	email VARCHAR(50),
  PRIMARY KEY (id)
);

insert into users (username,password,email,full_name) values ('akis','test12345','akis@gmail.com','akis xenos');
select * from users;
