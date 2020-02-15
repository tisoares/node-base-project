import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

const PROTECTED_ATTRIBUTES = ['password', 'passwordHash']

export default class User extends Model {
  public toJSON (): {} & object {
    // hide protected fields
    let attributes = Object.assign({}, this.get())
    for (let a of PROTECTED_ATTRIBUTES) {
      delete attributes[a as keyof object] // remove attributes
    }
    return attributes
  }

  public static initialize (sequelize: Sequelize.Sequelize): User {
    User.init({
      usrId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usrName: Sequelize.STRING,
      usrEmail: Sequelize.STRING,
      usrPassword: Sequelize.VIRTUAL,
      usrPasswordHash: Sequelize.STRING
    }, {
      tableName: 'users',
      sequelize: sequelize
    })
    // Criptografa a senha antes de salvar
    this.addHook('beforeSave', async (user: User): Promise<void> => {
      if (user.usrPassword) {
        user.usrPasswordHash = await bcrypt.hash(user.usrPassword, 8)
      }
    })

    return new User()
  }
  public usrId!: number;
  public usrName!: string;
  public usrEmail!: string
  public usrPasswordHash!: string
  public usrPassword!: string
}
