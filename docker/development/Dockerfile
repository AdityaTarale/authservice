FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5501

CMD [ "npm", "run", "dev" ]

# **Command 1 — Build the image:**
# docker build -t auth-service:dev -f docker/development/Dockerfile .
# Builds a Docker image named `auth-service:dev` using the Dockerfile at
# `docker/development/Dockerfile`, with the current directory as the build context.

# ---

# **Command 2 — Run the auth service container:**
# docker run --rm -it --name auth-service-dev -v $(pwd):/usr/src/app -v /usr/src/app/node_modules --env-file $(pwd)/.env -p 5501:5501 -e NODE_ENV=development auth-service:dev
# Runs the `auth-service:dev` image with:
# - Live code sync from current directory into `/usr/src/app`
# - Container's own `node_modules` kept isolated
# - Environment variables loaded from `.env` file
# - Port `5501` exposed on host
# - `NODE_ENV` set to `development`
# - Container auto-removed on stop (`--rm`)

# ---

# **Command 3 — Run the PostgreSQL container:**
# docker run --name mernpg-container -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -v mernpgdata:/var/lib/postgresql/data -p 5432:5432 -d postgres:17
# Runs postgres:17 with:
# - Named volume `mernpgdata` auto-created by Docker if it doesn't exist
# - Volume mounted at `/var/lib/postgresql/data` for data persistence
# - Data survives container stop/rm — only lost if `docker volume rm mernpgdata` is run
# - Port `5432` exposed on host
# - `--rm` intentionally omitted so container can be restarted without data loss
# - Pinned to postgres:17 to avoid breaking changes from postgres:18+ (new mount path convention)
