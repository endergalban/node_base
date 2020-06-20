import Sequelize from 'sequelize';
import sequelize from '../../config/sequelize';

const structure = {
  id: {
    allowNull: false,
    comment: 'Clave primaria.',
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  name: {
    allowNull: false,
    comment: 'Nombre del usuario',
    type: new Sequelize.STRING(100),
  },
  email: {
    allowNull: false,
    comment: 'Correo electrónico.',
    type: new Sequelize.STRING(250),
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    allowNull: false,
    comment: 'Contraseña encriptada.',
    type: Sequelize.TEXT,
  },
  enabled: {
    allowNull: false,
    comment: 'Indica si el registro está activo.',
    type: Sequelize.BOOLEAN,
  },
};
const options = {
  comment: 'Almacena los usuarios de la aplicación.',
  sequelize,
  modelName: 'users',
};

const User = sequelize.define('users', structure, options);

export { User, structure, options };
