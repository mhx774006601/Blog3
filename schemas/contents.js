/**
 * Created by Administrator on 2017/8/10.
 */
var mongoose = require('mongoose');
//类的表结构
module.exports = new mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
   title:String,
    //关联字段 - 用户id
    user: {
        //类型
        type: mongoose.Schema.Types.ObjectId,
        //引用
        ref: 'User'
    },

    //添加时间
    addTime: {
        type: Date,
        default: new Date()
    },
    //阅读量
    views: {
        type: Number,
        default: 0
    },

    description:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    },
    //评论
    comments: {
        type: Array,
        default: []
    }

});