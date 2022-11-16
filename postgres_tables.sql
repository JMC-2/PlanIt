
CREATE TABLE users (
  user_id     SERIAL PRIMARY KEY NOT NULL,
  username     VARCHAR(50)  NOT NULL UNIQUE,
  name      VARCHAR(50)  NOT NULL,
  email    VARCHAR(50)  NOT NULL UNIQUE,
  password      VARCHAR(255)  NOT NULL
);

CREATE TABLE calendars (
  calendar_id     SERIAL PRIMARY KEY NOT NULL,
  name      VARCHAR(50) NOT NULL
);

CREATE TABLE tasks (
  task_id     SERIAL PRIMARY KEY NOT NULL,
  user_id     INT NOT NULL,
  name        VARCHAR(50) NOT NULL,
  description        VARCHAR(255) NOT NULL,
  completed        BOOLEAN DEFAULT false,
  date         DATE,
  time         TIME,
  calendar_id  INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (calendar_id) REFERENCES calendars(calendar_id)
);