const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //verified?
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        { timestamps: true },)

    return User
}

export default userModel