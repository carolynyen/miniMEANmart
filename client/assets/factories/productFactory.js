app.factory('productFactory', ['$http', function($http){
    var factory = {};
    factory.product={};
    factory.index = function(callback) {
        $http.get('/products').then(function(returned_data){
            callback(returned_data.data, factory.product);
        });
    }
  factory.create = function(newproduct, callback) {
      $http.post('/products', newproduct).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      });
  }
  factory.update = function(id, edit, callback) {
      $http.put('/products/' + id, {edit}).then(function(returned_data) {
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  factory.delete = function (id, callback){
      $http.delete('/products/'+id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              callback(returned_data.data);
          }
      })
  }
  factory.show = function (id, callback){
      $http.get('/products/'+id).then(function(returned_data){
          if (typeof(callback) == 'function'){
              factory.product = returned_data.data;
              callback(returned_data.data);
          }
      })
  }
  return factory;
}]);
