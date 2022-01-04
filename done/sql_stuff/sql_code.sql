DROP TABLE IF EXISTS lookingforgame_lfg;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS boardgames;
DROP TABLE IF EXISTS players;

CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    avg_rating NUMERIC(2, 1) NOT NULL,
    max_players INTEGER NOT NULL,
    category VARCHAR(50) NOT NULL
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fav_category VARCHAR(50) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    boardgame_id INTEGER REFERENCES boardgames (id)
  --  FOREIGN KEY (boardgame_id) REFERENCES boardgames(id)
);


ALTER TABLE players ADD COLUMN prefers_video_games BOOLEAN DEFAULT false;


INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');

    INSERT INTO players (name, fav_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', DEFAULT),
    ('Nathaniel', 'Cooperative', DEFAULT),
    ('Dan', 'Adventure', DEFAULT),
    ('Rawaha', 'Economic', true),
    ('Geoffrey', 'Strategy', DEFAULT),
    ('Adrian', 'Economic', DEFAULT);

INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really like this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);


-- UPDATE players
-- SET prefers_video_games = true
-- WHERE name = 'Alec';

-- UPDATE players
-- SET prefers_video_games = true
-- WHERE name IN ('Alec', 'Adrian') AND prefers_video_games = false;

-- DELETE FROM boardgames
-- WHERE id NOT IN (2, 5, 6);

-- DELETE FROM boardgames
-- WHERE category IN ('Adventure', 'Economic');

-- SELECT name, (avg_rating * 10) AS percent_rating FROM boardgames
-- WHERE avg_rating > 8.5;

-- SELECT * FROM reviews
-- WHERE boardgame_id = 5;

-- SELECT name, category FROM boardgames
-- WHERE NOT category = 'Adventure' AND avg_rating > 8.35;

-- SELECT name, category FROM boardgames
-- WHERE NOT category = 'Adventure' AND avg_rating > 8.35
-- LIMIT 1;

-- SELECT name FROM boardgames
-- WHERE name LIKE '%Brass%';

-- SELECT boardgames.name, boardgames.id, reviews.boardgame_id, reviews.content FROM boardgames
-- JOIN reviews ON (boardgames.id = reviews.boardgame_id);

CREATE TABLE lookingforgame_lfg (
    id SERIAL PRIMARY KEY,
    game_id INTEGER REFERENCES boardgames (id),
    player_id INTEGER REFERENCES players (id)
);

INSERT INTO lfg (player_id, game_id)
VALUES
    (1, 5),
    (1, 2),
    (3, 1),
    (5, 5),
    (2, 2),
    (4, 4),
    (6, 4),
    (1, 4);


-- SELECT boardgames.name, boardgames.id, lookingforgame_lfg.game_id,lookingforgame_lfg.player_id, players.id, players.name
-- FROM boardgames
-- JOIN lookingforgame_lfg ON (boardgames.id = lookingforgame_lfg.game_id)
-- JOIN players ON (lookingforgame_lfg.player_id = players.id)
-- WHERE boardgames.name = 'Terraforming Mars';


-- SELECT boardgames.name, reviews.content FROM boardgames
-- JOIN reviews ON (boardgames.id = reviews.boardgame_id)
-- WHERE reviews.content LIKE 'T%';


-- SELECT boardgames.name FROM boardgames
-- WHERE boardgames.id IN (
--     SELECT boardgame_id FROM reviews
--     WHERE content LIKE 'T%');


-- SELECT players.name FROM players                                                 //grabs the name of players with ids matching the nested query
-- WHERE players.id IN (
--     SELECT lookingforgame_lfg.player_id FROM lookingforgame_lfg                  //grabs all the player ids from the lfg table
--     WHERE game_id = (
--         SELECT * FROM boardgames                                                 //grabs the boardgame id
--         WHERE boardgames.name = 'Terraforming Mars'));


-- SELECT boardgames.name FROM boardgames
-- WHERE category = (
--     SELECT fav_category FROM players
--     WHERE players.name = 'Alec'
-- );
