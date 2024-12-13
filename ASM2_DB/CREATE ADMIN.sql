CREATE USER c##StoreAdmin IDENTIFIED BY Admin123;

CREATE ROLE c##RAdmin;

GRANT CONNECT TO c##RAdmin;
GRANT CREATE SESSION TO c##RAdmin;
GRANT DBA TO c##RGuest;

GRANT c##RAdmin TO c##StoreAdmin;
ALTER USER C##StoreAdmin QUOTA UNLIMITED ON USERS;