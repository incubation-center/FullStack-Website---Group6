## Development

### Run with Docker Compose

```bash
docker-compose up
```

### Database 

- Access: `docker exec -it postgres psql IFood postgres`

- Migration: `docker exec -it next-prisma-docker_app_1 yarn prisma:migrate`

- Only once while initializing: npx prisma init

- Warning (will reset all your data) | Reset migration: docker exec -it next-prisma-docker_app_1 prisma migrate reset
