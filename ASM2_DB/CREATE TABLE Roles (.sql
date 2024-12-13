CREATE TABLE Roles (
    RoleID NUMBER PRIMARY KEY,
    RoleName VARCHAR2(50) UNIQUE NOT NULL,
    Description VARCHAR2(255)
);

CREATE TABLE Permissions (
    PermissionID NUMBER PRIMARY KEY,
    PermissionName VARCHAR2(50) UNIQUE NOT NULL,
    Description VARCHAR2(255)
);

CREATE TABLE RolePermissions (
    RoleID NUMBER NOT NULL,
    PermissionID NUMBER NOT NULL,
    PRIMARY KEY (RoleID, PermissionID),
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID) ON DELETE CASCADE,
    FOREIGN KEY (PermissionID) REFERENCES Permissions(PermissionID) ON DELETE CASCADE
);

CREATE TABLE UserRoles (
    UserID NUMBER NOT NULL,
    RoleID NUMBER NOT NULL,
    PRIMARY KEY (UserID, RoleID),
    FOREIGN KEY (UserID) REFERENCES UserGroup(UserID) ON DELETE CASCADE,
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID) ON DELETE CASCADE
);

CREATE OR REPLACE TRIGGER trg_assign_default_role
AFTER INSERT ON USERGROUP
FOR EACH ROW
BEGIN
    INSERT INTO USERROLES (USERID, ROLEID)
    VALUES (:NEW.USERID, (SELECT ROLEID FROM ROLES WHERE ROLENAME = 'Customer'));
END;
/

CREATE OR REPLACE TRIGGER trg_prevent_admin_role_deletion
BEFORE DELETE ON Roles
FOR EACH ROW
BEGIN
    IF :OLD.RoleName = 'Admin' THEN
        RAISE_APPLICATION_ERROR(-20001, 'The Admin role cannot be deleted.');
    END IF;
END;
/

CREATE SEQUENCE Roles_seq
START WITH 1
INCREMENT BY 1;



-- Procedure to Insert Manager and Admin Roles
CREATE OR REPLACE PROCEDURE InsertEssentialRoles AS
    v_manager_role_id NUMBER;
    v_admin_role_id NUMBER;
BEGIN
    -- Check if Manager role exists; if not, insert it
    BEGIN
        SELECT RoleID INTO v_manager_role_id
        FROM Roles
        WHERE RoleName = 'Manager';
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            INSERT INTO Roles (RoleID, RoleName, Description)
            VALUES (Roles_seq.NEXTVAL, 'Manager', 'Responsible for overseeing operations');
    END;

    -- Check if Admin role exists; if not, insert it
    BEGIN
        SELECT RoleID INTO v_admin_role_id
        FROM Roles
        WHERE RoleName = 'Admin';
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            INSERT INTO Roles (RoleID, RoleName, Description)
            VALUES (Roles_seq.NEXTVAL, 'Admin', 'Full access to the system');
    END;
    
    -- Commit the transaction
    COMMIT;
END;
/
