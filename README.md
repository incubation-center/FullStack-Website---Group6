# Fullstack-Website---Group6

# TODO

[] Can not delete the recipe, because of the M2M relations

[] update schema

[] create pages for the new tables

## Development

### Set Up Environment Variable 

Copy the following 2 environment variable files and name the new files as described below:

1. Copy `.env.sample` and name the new file as `.env`
2. Copy `dev.env.sample` and name the new file as `dev.env`

### Run with Docker Compose

1. Running The Services

    ```bash
    yarn dkc:dev:up
    ```
    
    > If you update the services docker images, you need to run `yarn dkc:dev:build` instead.

### Run locally

1. Installing The Dependencies

    ```bash
    yarn
    ```

2. Generate The Prisma Client and Migrate 

    ```bash
    yarn prisma:generate 
    yarn prisma:migrate 
    ```


2. Build and Run The NEXT Application

    ```bash
    yarn build
    yarn start
    ```

### Additional Commands

These are the additional commands related to the services inside the docker container:

- Accessing Database Docker Container:

    ```bash
    docker exec -it postgres psql IFood postgres

    # /dt
    ```

- Count Table Rows: 

    1. Display All Tables and The Total Number Of Rows In Each Table

        ```sql
        SELECT schemaname,relname,n_live_tup FROM pg_stat_user_tables ORDER BY n_live_tup DESC;
        ```

- Migrating The Database:

    In case the database container is not up-to-date with the migrations, we can use this command to manually migrate the database with the specified migration versions in `prisma/migrations/`

    ```bash
    docker exec -it next-prisma-docker_app_1 yarn prisma:migrate
    ```

- Reset The Database Migration:

    :warning: **Note** : This command will reset all data and previous migration in the database

    ```bash
    docker exec -it next-prisma-docker_app_1 prisma migrate reset
    ```

- Initialize The Prisma Schema

    ```bash
    npx prisma init
    ```
