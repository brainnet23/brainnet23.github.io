// Register the `people` component on the `people` module,
angular.
module('people').
component('people', {
    templateUrl: 'people/people.template.html',
    controller: ['$http',
        function PeopleController($http) {
            var self = this;
            self.orderProp = '-name';            $http.get('people/people.json').then(function(response) {
                self.people = response.data;
            });

        }
    ]

});
