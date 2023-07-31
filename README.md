# Realtime Chat

1. Installation

```bash
yarn install
```

2. Update dependencies

```bash
yarn upgrade-interactive --latest
```

3. Start docker container for MongoDB

```bash
docker-compose up -d
```

4. Run

```bash
# Development
yarn start:dev

# Production
yarn start
```

## Socket.io

For test try to connect to

```bash
http://localhost:<port>/api/sockets
# remember to use connection event
```
