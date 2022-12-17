CREATE DATABASE crud_re_no_db;
USE crud_re_no_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    contact VARCHAR(40) NOT NULL,
    constraint users_pk primary key (id)
);

INSERT INTO users VALUES (1, 'Admin1', 'admin@gmail.com', '94178529');
INSERT INTO users VALUES (2, 'Joe Root', 'jroot@gmail.com', '94774851');
INSERT INTO users VALUES (3, 'Steve Smith', 'ssmith@gmail.com', '9476895412');
INSERT INTO users VALUES (4, 'MS Dhoni', 'msdhoni@gmail.com', '9472558913');
INSERT INTO users VALUES (5, 'Dasun Shanaka', 'dshanaka@gmail.com', '94714452678');

CREATE USER 'crud_re_no_db_user'@'%' IDENTIFIED WITH mysql_native_password BY 'crud_re_no_db_user';
GRANT ALL PRIVILEGES ON crud_re_no_db.* TO 'crud_re_no_db_user'@'%';
FLUSH PRIVILEGES;