angular.module('ba.tags-service', [
    'ngResource'
]).service('tagsService', function ($resource, mongolabConfigs) {

    var c = mongolabConfigs;
    var url = [c.mongolabUrl, c.dataBase, 'collections', c.collection, ':id'].join('/');
    var Tags = $resource(url, {apiKey: c.apiKey}, {
        update: {method: 'PUT'}
    });
    
    Tags.prototype.countBookmarks = function(bookmarks){
        return bookmarks.reduce((function(count, item){
            return (item.tags.indexOf(this._id.$oid) >= 0) ? count + 1 : count;
        }).bind(this), 0);
    };
    
    return Tags;
    
}).constant('mongolabConfigs',  {
    mongolabUrl: 'https://api.mongolab.com/api/1/databases',
    collection: 'tags',
    dataBase: 'angular-training-bookmarks',
    apiKey: 'KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA'
});