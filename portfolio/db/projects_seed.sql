DROP TABLE IF EXISTS Projects;

CREATE TABLE Projects (
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
('{celebrate}', 'Celebrate', 'Personal Project', 'Celebrate is a simple web app for keeping track of your friends'' birthday celebration preferences. Create a profile, update your preferences, connect with friends and view their profiles to honor their special day the way they would like.', 'React | Redux | JavaScript | HTML/CSS | Node | PostgreSQL | Auth0', 'www.celebrate.meganecallister.com', 'https://github.com/meganecallister'),
('{clonify}', 'Clonify', 'Group Project', 'Clonify is a clone of Spotify. Users with Premium accounts can log in to Clonify and see all their data populated in our clone. They can also search for music and play songs on our player. We also wanted an option to change color themes, which I coded. I focused mainly on styling. I handled the landing page, profile page, and cards.', 'React | Redux | JavaScript | HTML | SASS | Node | PostgreSQL | OAuth', 'https://clonify.precisiond.net/#/', 'https://github.com/clone-zone/spotify-clone');

SELECT * FROM projects;