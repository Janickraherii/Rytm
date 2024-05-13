// Importer Express
const express = require('express');
const app = express();

// Définir un point de terminaison pour tester
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Démarrez le serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
