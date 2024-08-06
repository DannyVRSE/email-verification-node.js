import { Sequelize, DataTypes } from "sequelize";
import userModel from "./userModel.js";
import tokenModel from "./token.js";
import env from "dotenv";
env.config();

//db conection
const sequelize = new Sequelize (process.env.DATABASE_URL);

try{
    await sequelize.authenticate();
    console.log("connected to db successfully");
}catch(error){
    console.error("unable to connect to db");
}

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

//connect models
db.users=userModel(sequelize, DataTypes);
db.tokens=tokenModel(sequelize, DataTypes);

//relationships
db.users.hasOne(db.tokens, {
    as: 'token',
    foreignKey:"userId"
});

db.tokens.belongsTo(db.users, {
    as: "user",
    foreignKey:"userId"
});

export default db;

