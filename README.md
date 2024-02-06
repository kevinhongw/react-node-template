# react-node-template

### Create new migration

```
    cd src/server/src
    npx knex migrate:make create_users_table
    npx knex migrate:latest
```

### Seed

```
    cd src/server/src
    npx knex seed:make 01-users
    npx knex seed:run
```
