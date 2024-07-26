import { Request, Response } from 'express';
import { Usuario } from '../models/usuarioModel';

// Registrar un nuevo usuario
export const registrarUsuario = async (req: Request, res: Response) => {
  const { nombreUsuario, contrasena } = req.body;
  try {
    const nuevoUsuario = await Usuario.create({ nombreUsuario, contrasena });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario', error });
  }
};

// Iniciar sesión
export const iniciarSesion = async (req: Request, res: Response) => {
  const { nombreUsuario, contrasena } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { nombreUsuario, contrasena } });
    if (!usuario) {
      return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos' });
    }
    res.json({ mensaje: 'Inicio de sesión exitoso', usuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
  }
};
