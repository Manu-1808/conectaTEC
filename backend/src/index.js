const express = require('express');

const usersRoutes = require('./routes/users.routes');

const app = express();

app.use(express.json());

app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('API ConectaTEC funcionando');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor API ConectaTEC corriendo en el puerto ${PORT}`);
});