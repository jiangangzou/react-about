const router = require('koa-router')();
const koabody = require('koa-body');
const User = require('../model/user');
router.get('/',async (ctx) => {
        ctx.body = '首页';
});


router.get('/users',async (ctx) => {
    const user =await User.findAll({
        where: {
            isdelete: 0
        }
    })
    
    ctx.body = user;
});

router.post('/user', koabody(), async (ctx) => {
    // console.log(ctx.request.body);
    const user = await User.build(ctx.request.body).save();
    ctx.body = user;
    // console.log(123);
    // ctx.body = {
    //     status: 'ok'
    // }
})

module.exports = router
