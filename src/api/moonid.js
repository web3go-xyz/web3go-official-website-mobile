import request from "@/utils/request";


export function getRecommendList(data) {
    return request({
        url: '/api/v1/web3id/getRecommendList',
        method: 'post',
        data
    })
}
export function getRankingList(data) {
    return request({
        url: '/api/v1/web3id/getRankingList',
        method: 'post',
        data
    })
}
export function getPointsRule(data) {
    return request({
        url: '/api/v1/web3id/getPointsRule',
        method: 'post',
        data
    })
}
export function getMedals(data) {
    return request({
        url: '/api/v1/web3id/getMedals',
        method: 'post',
        data
    })
}
export function discover(data) {
    return request({
        url: '/api/v1/web3id/discover',
        method: 'post',
        data
    })
}