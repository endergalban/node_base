import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import * as User from '../models/user';

const saltRounds = 10;
const password = bcrypt.hashSync('123456', saltRounds);

module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(User.options.modelName, [{
        id: uuidv4(),
        name: 'John Doe',
        email: 'jhondoe@exampe.com',
        password,
        enabled: true,
      }],
      { transaction },
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete(User.options.modelName, null, {});
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
