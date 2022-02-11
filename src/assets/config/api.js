const ApiRootUrl = 'http://127.0.0.1:8360/api/'
module.exports = {
    IndexUrl: ApiRootUrl+'index/index',//首页数据接口
    CatalogList: ApiRootUrl+'catalog/index',//分类目录全部分类数据接口
    CatalogCurrent: ApiRootUrl + 'catalog/current',//分类目录当前分类数据接口

    AuthLoginByweixin: ApiRootUrl+'auth/loginByWeixin',//微信登录

    GoodsCount: ApiRootUrl+'goods/count',//统计商品总数
    GoodsList: ApiRootUrl+'goods/list',//获得商品列表

    GoodsCategory: ApiRootUrl+'goods/category',//获得分类数据
    
    GoodsDetail: ApiRootUrl+'goods/detail',//获得商品的详情

    GoodsNew: ApiRootUrl+'goods/new',//新品
    GoodsHot: ApiRootUrl+'goods/hot',//热门

    GoodsRelated: ApiRootUrl+'goods/related',//获得商品详情页的关联商品

    BrandList: ApiRootUrl+'brand/list',//品牌列表

    BrandDetail: ApiRootUrl+'brand/detail',//品牌详情



}