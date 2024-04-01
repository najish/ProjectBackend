const seqeulize = require('../config/database.js')
const {DataTypes} = require('sequelize')

const User = seqeulize.define('user',{
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    name: {
        type:DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
    username: {
        type: DataTypes.STRING,
        allowNull: null,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }


},{
    freezeTableName: true,
    timestamps: false
})


function tableCreated() {
    try {
        if(!User) {
            throw new Error('failed to created table')
        }
        User.sync({alter: true})
        console.log('table created: User')
    } catch(err) {
        console.error(err);
    }
}   


tableCreated()

module.exports = User


