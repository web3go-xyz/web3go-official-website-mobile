import request from "@/utils/request";

export function webUserList(data) {
    return request({
        url: '/website/webUser/list',
        method: 'get',
        data
    })
}
export function webNewsList(data) {
    return request({
        url: '/website/webNews/list',
        method: 'get',
        data
    })
}
export function numberConfig(data) {
    return request({
        url: '/website/numberConfig/list',
        method: 'get',
        data
    })
}

// 新增
export function addEmail(data) {
    return request({
        url: '/website/subscribeManage',
        method: 'post',
        data: data
    })
}