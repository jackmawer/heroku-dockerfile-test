FROM node:carbon
EXPOSE 80
COPY index.js .
CMD node index.js
