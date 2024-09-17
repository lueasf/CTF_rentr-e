# Utiliser une image Node.js de base
FROM node:18

# Créer un répertoire de travail
WORKDIR /app

# Copier le package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposer le port 3000 pour l'application Express.js
EXPOSE 3000

# Commande pour lancer le serveur
CMD ["node", "index.js"]
