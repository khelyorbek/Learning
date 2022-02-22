-- CREATE TABLE posts (
--     title TEXT,
--     username TEXT,
--     link TEXT
-- )

-- INSERT INTO posts
-- (title, username, link)
-- VALUES
-- ('lol look at that big cat', 'catlady666', 'www.fatcats.com');

DROP DATABASE reddit_db;
CREATE DATABASE reddit_db;
\c reddit_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    comment_text TEXT NOT NULL
);

CREATE TABLE subreddits (
    id SERIAL PRIMARY KEY,
    -- below references the id of the users table.
    -- each subreddit will need a user_id that exists in users table id column
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INT CHECK (subscribers > 0) DEFAULT 1,
    is_private BOOLEAN DEFAULT false
);

INSERT INTO users (username, password)
VALUES
('graylady','asdfsaf'), -- id = 1
('stevie-chicks','asfdsffff'); -- id = 2

INSERT INTO subreddits (name, user_id)
VALUES
-- 
('chickens', 2), -- stevie-chicks
('waterluvers', 1); -- graylady