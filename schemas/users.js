/**
 * Created by Administrator on 2017/8/7.
 */
var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    username:String,
    password:String,
    isAdmin:{
       type:Boolean,
       default:false
    }
    });