-- SQL schema and sample data for Student Result Portal

CREATE TABLE students (
  roll_no VARCHAR(20) PRIMARY KEY,
  name VARCHAR(100),
  math INTEGER,
  science INTEGER,
  english INTEGER,
  total INTEGER,
  percentage DECIMAL(5,2)
);

INSERT INTO students (roll_no,name,math,science,english,total,percentage) VALUES
('1001','Alice Kumar',85,92,78,255,85.00),
('1002','Bob Rao',75,80,70,225,75.00),
('1003','Charan',68,74,71,213,71.00);
