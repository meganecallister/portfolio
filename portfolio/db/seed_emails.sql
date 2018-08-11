DROP TABLE IF EXISTS Emails;

CREATE TABLE Emails (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    subject TEXT,
    message TEXT
);

INSERT INTO Emails (name, email, subject, message)
VALUES
('', '', '', '');

SELECT * FROM Emails;