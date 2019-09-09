SELECT id, username, password, profile_pic
FROM users
WHERE email = $1;