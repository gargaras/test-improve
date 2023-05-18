CREATE DATABASE improve_chal;

USE improve_chal;

CREATE USER 'improve-admin'@'localhost' IDENTIFIED BY 'pass123';

GRANT ALL PRIVILEGES ON improve_chal.* TO 'improve-admin'@'localhost' IDENTIFIED BY 'pass123';