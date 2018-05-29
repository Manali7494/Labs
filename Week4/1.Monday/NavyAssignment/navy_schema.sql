
DROP TABLE IF EXISTS fleets CASCADE;
DROP TABLE IF EXISTS ships CASCADE;
DROP TABLE IF EXISTS ship_fleet CASCADE;
DROP TABLE IF EXISTS sailors CASCADE;
DROP TABLE IF EXISTS sailor_assignment CASCADE;
DROP TABLE IF EXISTS sailor_ship CASCADE;
DROP TABLE IF EXISTS assignments CASCADE;
DROP TABLE IF EXISTS assignment_rank CASCADE;
DROP TABLE IF EXISTS rank CASCADE;

CREATE TABLE fleets(id BIGSERIAL PRIMARY KEY, name VARCHAR(50));
INSERT INTO fleets(name) VALUES ('FleetA');
INSERT INTO fleets(name) VALUES ('FleetB');

CREATE TABLE ships(id BIGSERIAL PRIMARY KEY, name VARCHAR(50), date_built DATE);
INSERT INTO ships(name, date_built) VALUES ('ShipA', '1990-01-01');
INSERT INTO ships(name, date_built) VALUES ('ShipB', '1994-01-01');

CREATE TABLE ship_fleet(id BIGSERIAL PRIMARY KEY, fleetid INTEGER, shipid INTEGER);
INSERT INTO ship_fleet(fleetid,shipid) VALUES (1,1);
INSERT INTO ship_fleet(fleetid, shipid) VALUES (2,2);

CREATE TABLE sailors(id BIGSERIAL PRIMARY KEY, name VARCHAR(50), date_of_birth DATE);
INSERT INTO sailors(name, date_of_birth) VALUES('Max Edmonds', '1992-07-03');
INSERT INTO sailors(name, date_of_birth) VALUES('Matthew Black', '1989-04-01');


CREATE TABLE sailor_assignment(id BIGSERIAL PRIMARY KEY, sailorid INTEGER, assignmentid INTEGER);
INSERT INTO sailor_assignment(sailorid, assignmentid) VALUES (1,1);
INSERT INTO sailor_assignment(sailorid, assignmentid) VALUES (2,2);

CREATE TABLE sailor_ship (id BIGSERIAL PRIMARY KEY , sailorid INTEGER, shipid INTEGER);
INSERT INTO sailor_ship(sailorid, shipid) VALUES (1,1);
INSERT INTO sailor_ship(sailorid, shipid) VALUES (2,2);

CREATE TABLE assignments(id BIGSERIAL PRIMARY KEY, name VARCHAR(50), start_date DATE, end_date DATE);
INSERT INTO assignments(name,start_date,end_date) VALUES('Assignment1','2000-01-01', '2010-05-02');
INSERT INTO assignments(name, start_date, end_date) VALUES ('Assignment2', '2001-05-06', '2008-03-03');

CREATE TABLE assignment_rank(id BIGSERIAL PRIMARY KEY, assignmentid INTEGER, rankid INTEGER);
INSERT INTO assignment_rank(assignmentid, rankid) VALUES(1,1);
INSERT INTO assignment_rank(assignmentid, rankid) VALUES(2,2);


CREATE TABLE rank(id BIGSERIAL PRIMARY KEY, name VARCHAR(50));
INSERT INTO rank(name) VALUES('rank1');
INSERT INTO rank(name) VALUES('rank2');



