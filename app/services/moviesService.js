//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('moviesService', function ($scope, $http) {
    this.getmovies = function () {

        var irishMovies = "http://data.linkedmdb.org/sparql?query=SELECT+%3Fs%0D%0AWHERE+%7B%0D%0A%3Fs+%3Chttp%3A%2F%2Fdata.linkedmdb.org%2Fresource%2Fmovie%2Fcountry%3E+%3Chttp%3A%2F%2Fdata.linkedmdb.org%2Fresource%2Fcountry%2FIE%3E+.%0D%0A%7D";


        $http.get(irishMovies)
            .then(function(response) {
                $scope.movies = response.data;
            });
    };
});