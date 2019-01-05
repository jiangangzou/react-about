const Sequelize = require('sequelize')
//数据库 sql 
//koa 数据json
const sequelize = new Sequelize('antd','root','123456',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases:true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define:{
        timestamps:false
    }
})

sequelize
    .authenticate().then(()=>{
        console.log('ok')
    })
    .catch(err=>{
        console.log('failed',err)
    })

module.exports = sequelize
