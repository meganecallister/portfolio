DROP TABLE IF EXISTS Projects;

CREATE TABLE Projects (
    id SERIAL PRIMARY KEY,
    img TEXT,
    title TEXT,
    subtitle TEXT,
    description TEXT,
    tech TEXT,
    site_link TEXT,
    github_link TEXT,
    pic1 TEXT,
    pic2 TEXT,
    pic3 TEXT
);

INSERT INTO Projects (img, title, subtitle, description, tech, site_link, github_link, pic1, pic2, pic3)
VALUES
('https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=jKVCVQdZsVpuzq8rrutkdWTzURQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjoKsDdL-T3pUBFeypTjQBnLu21SDiwQ47oIoy7e41x3p_iI5L5agYUbhl4lWdI', 'Celebrate', 'Personal Project', 'Celebrate is a simple web app for keeping track of your friends'' birthday celebration preferences. Create a profile, update your preferences, connect with friends and view their profiles to honor their special day the way they would like.', 'React | Redux | JavaScript | HTML/CSS | Node | PostgreSQL | Auth0', 'www.celebrate.meganecallister.com', 'https://github.com/meganecallister', 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=ewV8O2qab%2Bgb2QzbyiYGXpM6U0Q%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjpLZKNfbekp0AULCoGjQA0eO-1STDmFo7uforvLNRx2pW0JJP5agYUbhl4lWdI', 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=QHGTKxWUN5XTJqKJlAqXW%2FQx4Cc%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjtKpOMeLP3rUBHeX8EjQBkLbu1SGa0EI61eNntfNoijpGxdcL5agYUbhl4lWdI', 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Ivm6OINSa7%2BDBIfDEjs23iMZM5k%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfpbXfeT1pEAWfi1TjQBke-y1SDm0F46-KInsL4l32ZHndcH5agYUbhl4lWdI'),
('https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Yv8jbkmkf8R0sXKc9B6V62eB7R4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhccXZf7Hyp0BAKn4IjQA6d-a1STfjRo64KYO5dIh52ZHkIpH5agYUbhl4lWdI', 'Clonify', 'Group Project', 'Clonify is a clone of Spotify. Users with Premium accounts can log in to Clonify and see all their data populated in our clone. They can also search for music and play songs on our player. We also wanted an option to change color themes, which I coded. I focused mainly on styling. I handled the landing page, profile page, and cards.', 'React | Redux | JavaScript | HTML | SASS | Node | PostgreSQL | OAuth', 'https://clonify.precisiond.net/#/', 'https://github.com/clone-zone/spotify-clone', 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=P5HQGyVQiUIHHWvjS2Ufc9UYM6k%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjgfZPWKLKj9UBAeS5VjQAwfLy1SDiyRo60LYvpdIhxicbtd8P5agYUbhl4lWdI', 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=PncxysoRJFasOoTH6Y1Amp6h5BA%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvL8_acLWi8kAXcHoIjQA1er61EjK1FI66eYLmeY5yjcHgcJX5agYUbhl4lWdI', 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=Luoh5edV%2FWIVC%2BOZ0PuHo%2FPGP7E%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi6KpOMcLr09UAVfSgHjQA2e-a1SWawQI7qKYjmL4l235fkd5b5agYUbhl4lWdI');

SELECT * FROM projects;