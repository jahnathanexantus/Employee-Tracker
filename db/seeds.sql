USE employee_db

INSERT INTO department
    (name)
VALUES
    ("Engineering"),
    ("HR"),
    ("warehouse"),
    ("Legal");

INSERT INTO role
    (title,salary,department_id)
VALUES
    ("Senior Dev",90000,3),
    ("HR Buidness partner",200000,2)
    ("operations manager",110000,2),
    ("Lawyer",90000,2);


INSERT INTO employee
    (first_name,last_name,role_id)
VALUES
    ("Jahnathan", "Exantus",3),
    ("Dan","Campbell",5),
    ("Marvin","norris",2),
    ("David","pierre",9);



    