-- mysql
-- insert into data_user(
--     uuid,
--     email,
--     password,
--     perms
-- ) values (
--     uuid(),
--     'brock@saqus.com',
--     '$2a$14$dZ.c0r52.ylLLxY4qTbXLuMl82evrLHToemgubORMgzbA.QeBc2q6',
--     'admin'
-- );

-- postgresql

insert into data_user(
    id,
    email,
    password,
    perms
) values (
    uuid_generate_v4(),
    'managingbr8@gmail.com',
    '$2a$14$dZ.c0r52.ylLLxY4qTbXLuMl82evrLHToemgubORMgzbA.QeBc2q6',
    'admin'
);