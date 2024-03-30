const router = require('express').Router()
const User = require('../models/user.js')

router.get('/',async (req,res) => {
    try {
        const users = await User.findAll()
        if(users) return res.json(users)
        throw new Error('Unable to fetch request')
    } catch(err) {
        console.error(err);
        return res.send(err)
    }
})

router.get('/:userId',async (req,res) => {
    try {
        const userId = req.params.userId
        console.log(userId)
        // const user = await User.findByPk(userId)
        // if(user) {
        //     console.log('yes')
        //     return res.send(user)
        // }else {
        //     throw new Error('User Not Found')
        // }

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
    
})


router.post('/',async (req,res) => {
    try {
        console.log(req.body)
        const data = req.body
        const user = User.create(data)
        if(user) return res.send('user created')
        throw new Error('failed to created a recored: user')   
    } catch(err) {
        console.error(err);
        return res.send('error while creating resourcees')
    }
    
})


module.exports = router