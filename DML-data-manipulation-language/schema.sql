-- Create tables
CREATE TABLE CUSTOMER (
    CustomerID NUMBER PRIMARY KEY,
    FirstName VARCHAR2(50),
    LastName VARCHAR2(50),
    Email VARCHAR2(100)
);

CREATE TABLE PRODUCT (
    ProductID NUMBER PRIMARY KEY,
    ProductName VARCHAR2(100),
    Price NUMBER(10, 2),
    Category VARCHAR2(20)
);

CREATE TABLE ORDERS (
    OrderID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    OrderDate DATE DEFAULT SYSDATE,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMER(CustomerID)
);

CREATE TABLE ORDER_DETAILS (
    OrderID NUMBER,
    ProductID NUMBER,
    Quantity NUMBER,
    PRIMARY KEY (OrderID, ProductID),
    FOREIGN KEY (OrderID) REFERENCES ORDERS(OrderID),
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID)
);

-- Insert into CUSTOMER
INSERT INTO CUSTOMER (CustomerID, FirstName, LastName, Email)
VALUES (1, 'Rimy', 'rim', 'rimy@email.com');

INSERT INTO CUSTOMER (CustomerID, FirstName, LastName, Email)
VALUES (2, 'Raphinha', 'rapha', 'raphinha@email.com');

INSERT INTO CUSTOMER (CustomerID, FirstName, LastName, Email)
VALUES (3, 'Red', 'riim', 'red@email.com');


-- Insert into PRODUCT
INSERT INTO PRODUCT (ProductID, ProductName, Price, Category)
VALUES (101, 'Laptop', 1200.00, 'Electronics');

INSERT INTO PRODUCT (ProductID, ProductName, Price, Category)
VALUES (102, 'Smartphone', 800.00, 'Electronics');

INSERT INTO PRODUCT (ProductID, ProductName, Price, Category)
VALUES (103, 'Desk Chair', 150.00, 'Furniture');

INSERT INTO PRODUCT (ProductID, ProductName, Price, Category)
VALUES (104, 'Notebook', 5.00, 'Stationery');

-- Insert into ORDERS
INSERT INTO ORDERS (OrderID, CustomerID)
VALUES (1001, 1);

INSERT INTO ORDERS (OrderID, CustomerID)
VALUES (1002, 2);

INSERT INTO ORDERS (OrderID, CustomerID)
VALUES (1003, 3);

-- Insert into ORDER_DETAILS
INSERT INTO ORDER_DETAILS (OrderID, ProductID, Quantity)
VALUES (1001, 101, 1);

INSERT INTO ORDER_DETAILS (OrderID, ProductID, Quantity)
VALUES (1001, 104, 3);

INSERT INTO ORDER_DETAILS (OrderID, ProductID, Quantity)
VALUES (1002, 102, 2);

INSERT INTO ORDER_DETAILS (OrderID, ProductID, Quantity)
VALUES (1003, 103, 1);

INSERT INTO ORDER_DETAILS (OrderID, ProductID, Quantity)
VALUES (1003, 104, 5);