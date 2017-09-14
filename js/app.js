var myApp = angular.module("myApp", ['ngAnimate', 'ngTouch'])

myApp.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    TweenMax.set(element, { left: element.parent().width() });
                    TweenMax.to(element, 0.5, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

myApp.controller("myController", function($scope){
	 console.log("In myController");
	 $scope.query = {}
	 $scope.queryBy = '$'
	 $scope.newmovie = {};
	 $scope.clickedmovie = {};
	 $scope.movies = [{Title:"300", Duration:"1.45",Actors :"Jhon",Director :"Oliver"},
	                   {Title:"Game of Thrones", Duration:"1.07",Actors :"Jhon Snow",Director :"Paul"},
					   		 			{Title:"Batman", Duration:"1.35",Actors :"Batman",Director :"Sarra"}
									  ];
	$scope.slides = [
						    		{image: 'images/300.jpg', description: '300'},
						        {image: 'images/got.jpg', description: 'Game Of Thrones'},
						        {image: 'images/batman.jpg', description: 'Batman'}
					       ];

	$scope.currentIndex = 0;
	$scope.setCurrentSlideIndex = function (index) {
				$scope.currentIndex = index;
		};
	$scope.isCurrentSlideIndex = function (index) {
				return $scope.currentIndex === index;
		};
	$scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
  $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
	$scope.savemovie = function(){
	 $scope.movies.push($scope.newmovie);
	 $scope.newmovie = {};
	};

	$scope.selectmovie = function(movie){
		console.log(movie);
		$scope.clickedmovie = movie;
	};
	$scope.updatemovie= function(){

	};
	$scope.deleteMovie = function (Title) {

				if (confirm("sure to delete")) {
					for (counter in $scope.movies) {
							if ($scope.movies[counter].Title == Title) {
									$scope.movies.splice(counter, 1);
							}
    }
		}
			if ($scope.newmovie.Title == Title) $scope.newmovie = {};
			console.log($scope.movies);
	}

});
