import { Sequelize} from 'sequelize';
  class DatabaseConnection {
    constructor() {
      if (!DatabaseConnection._instance) {
        DatabaseConnection.connectDB = null;
        DatabaseConnection._instance = this;
      }
      return DatabaseConnection._instance;
    }
  
    connect() {
      return this._connection();
    }
  
     _connection() {
        if(DatabaseConnection._connection){
            return DatabaseConnection._connection;
        }
        const sequelize =  new Sequelize(
        "postgres://qrjwmrov:b94w8iIUlkSxxGHofTX7BTSkhEdwY925@rajje.db.elephantsql.com/qrjwmrov"
      );
      
      DatabaseConnection._connection = sequelize;
      return sequelize;
      
    }
  }
  const databaseConnection = new DatabaseConnection();
  export default databaseConnection.connect();