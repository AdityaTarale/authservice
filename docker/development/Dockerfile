FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5501

CMD [ "npm", "run", "dev" ]

# **Command 1 — Build the image:**
# ```
# docker build -t auth-service:dev -f docker/development/Dockerfile .
# ```
# Builds a Docker image named `auth-service:dev` using the Dockerfile at `docker/development/Dockerfile`, with the current directory as the build context.

# ---

# **Command 2 — Run the container:**
# ```
# docker run --rm -it --name auth-service-dev -v $(pwd):/usr/src/app -v /usr/src/app/node_modules --env-file $(pwd)/.env -p 5501:5501 -e NODE_ENV=development auth-service:dev
# ```
# Runs the `auth-service:dev` image with:
# - Live code sync from current directory into `/usr/src/app`
# - Container's own `node_modules` kept isolated
# - Environment variables loaded from `.env` file
# - Port `5501` exposed on host
# - `NODE_ENV` set to `development`
# - Container auto-removed on stop (`--rm`)