DELETE TABLE IF EXISTS Projects;

CREATE TABLE IF NOT EXISTS Projects (
    id SERIAL PRIMARY KEY,
    img TEXT,
    title TEXT,
    subtitle TEXT,
    description TEXT,
    tech TEXT,
    site_link TEXT,
    github_link TEXT
);

INSERT INTO Projects (img, title, subtitle, description, tech, site_link, github_link)
VALUES
('', 'Celebrate', 'an app', 'celebrate descriptions', 'react', 'www.celebrate.meganecallister.com', 'www.github.com'),
('', 'Clonify', 'an app', 'celebrate descriptions', 'react', 'www.celebrate.meganecallister.com', 'www.github.com');