const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const getUsers = async (req,res) => {
    try {
        const users = await User.findAll()
        if(users) return res.json(users)
        throw new Error('Unable to fetch request')
    } catch(err) {
        console.error(err);
        return res.send(err)
    }
}

const getUser = async (req,res) => {
    try {
        const userId = req.params.userId
        console.log(userId)

        User.findByPk(userId).then((data) => {
            if(data) {

                console.log('data fetched')
                return res.json(data)
            }
            else {
                console.log('faidflafa')
                throw new Error('failed to fetch')
            }
        }).catch(err => {
            console.log('failed to fetch')
            return res.send(err)
        })
    } catch(err) {
        console.error(err)
        return res.send(err)
    }
}

const addUser = async (req,res) => {
    try {
        const data = req.body
        const {password} = data
        const salt = bcrypt.genSaltSync(10)
        const hash = await bcrypt.hashSync(password,salt)
        data.password = hash
        const user = await User.create(data)
        if(user) return res.send('user created')
        throw new Error('failed to created a recored: user')   
    } catch(err) {
        console.error(err);
        return res.send('error while creating resourcees')
    }
}

const findUserByUsername =  async (req,res) => {
    try {
        const {username} = req.body
        console.log(req.body)
        console.log(username)
        const user = await User.findOne({
            where: {
                username: username
            }
        })
        console.log(user)
        if(user) {
            console.log(user)
            res.send(user)
        } else {
            console.log('user not found')
            res.send('user not found')
        }

    } catch(err) {
        console.log(err)
    }
}


const findUserByEmail =  async (req,res) => {
    try {
        const {email} = req.body
        console.log(req.body)
        console.log(email)
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        console.log(user)
        if(user) {
            console.log(user)
            res.send(user)
        } else {
            console.log('user not found')
            res.send('user not found')
        }

    } catch(err) {
        console.log(err)
    }

}

module.exports = {getUser,getUsers,addUser,findUserByUsername, findUserByEmail}