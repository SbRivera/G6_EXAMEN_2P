import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database';
import tareaRoutes from './routes/tareaRoutes';
import authRoutes from './routes/authRoutes';
import usuarioRoutes from './routes/usuarioRoutes'; // Asegúrate de importar esto

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tareas', tareaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes); // Asegúrate de usar la ruta de usuarios

sequelize.sync().then(() => {
  console.log('Conexión establecida correctamente.');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
