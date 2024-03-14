FROM node:20.11

USER node

WORKDIR /home/node/app

COPY --chown=node . .

RUN chmod +x .docker/entrypoint.sh
ENTRYPOINT .docker/entrypoint.sh

EXPOSE 8080

CMD npm start
