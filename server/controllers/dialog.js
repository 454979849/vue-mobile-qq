const messageModel = require("../models/message");

let dialog = async function (ctx, next) {
    let content = ctx.request.body.content || '';
    let fromId = ctx.request.body.fromId || '';
    let toId = ctx.request.body.toId || '';
    let createTime = ctx.request.body.createTime || '';
    let isRead = ctx.request.body.isRead || 0;
    const row = await messageModel.sendMessage(content, fromId, toId, createTime, isRead);
    const res = JSON.parse(JSON.stringify(row));
    if (res.affectedRows) {
        ctx.body = {
            code: 200,
            success: true,
            message: '发送成功'
        }
    } else {
        ctx.body = {
            code: 202,
            success: false,
            message: '发送失败，请检查参数是否有效'
        }
    }
}

let setIsRead = async function (ctx, next) {
    let fromId = ctx.request.body.fromId || '';
    let toId = ctx.request.body.toId || '';
    const row=await messageModel.setIsRead(fromId,toId);
    const res = JSON.parse(JSON.stringify(row));
    console.log(res);
    ctx.body={
        code:200,
        success:true,
        message:'设置已读成功'
    }
}

module.exports={
    dialog,
    setIsRead
}
