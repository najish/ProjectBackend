const sequelize = require('../config/database.js');
const {DataTypes} = require('sequelize')

const Student = sequelize.define('Student', {
    StudentId: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    StudentName : {
        type: DataTypes.STRING,
        allowNull: false,   
    },
    StudentAddress: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
})

async function createStudent() {
    try {
       Student.sync().then(() => {
        console.log('student model created')
       })
    } catch(err) {
        console.log(err)
    }
}

createStudent()

module.exports = Student;