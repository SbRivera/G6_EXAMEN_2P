import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class Usuario extends Model {
  public id!: number;
  public nombreUsuario!: string;
  public contrasena!: string;
}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombreUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: true,
});


sequelize.sync().then(() => {
  console.log('Tabla de usuarios creada.');
});
