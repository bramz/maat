-- -- mysql/mariadb
-- create table if not exists data_user (
--     uuid varchar(36) primary key not null,
--     email varchar(255) not null,
--     password text not null,
--     perms varchar(25) not null
-- );

-- create table if not exists data_dashboard (
--     uuid varchar(36) primary key not null,
--     user_uuid varchar(36) not null,
--     type varchar(25) not null,
--     constraint `fk_user_uuid` foreign key (user_uuid) references data_user(uuid)
-- );

--postgres 
create table if not exists data_user (
    uuid varchar(36) not null,
    email varchar(255) not null,
    password text not null,
    perms varchar(25) not null,
    primary key (uuid)
);

create table if not exists data_dashboard (
    uuid varchar(36) not null,
    user_uuid varchar(36) not null,
    type varchar(25) not null,
    primary key (uuid),
    constraint fk_user_uuid foreign key (user_uuid) references data_user(uuid)
);


