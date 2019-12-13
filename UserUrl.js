;(function(w){
    let baseURL = 'http://localhost:8080/api/v1';

    let BigNew = {
        baseURL : baseURL,
        user_search:      baseURL + '/index/search',//用户搜索
        user_hotpic:      baseURL + '/index/hotpic',//热点图
        user_rank:      baseURL + '/index/rank',//文章热门排行
    }

    w.BigNew = BigNew; // 暴露接口
})(window)