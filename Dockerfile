FROM node:4.2
COPY . /src
RUN cd /src && npm install
RUN npm install elastic-apm-node --save
EXPOSE 4000
CMD ["node", "/src/server.js"]
