# Fullstack-Website---Group6
## Development

### Set Up Environment Variable 

Rename the following 2 environment variable files:

1. Rename `.env.sample` to `.env`
2. Rename `dev.env.sample` to `dev.env`

### Run with Docker Compose

1. Running The Services

    ```bash
    docker-compose up
    ```

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
