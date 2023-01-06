// Register the `program` component on the `program` module,
angular.
module('program').
component('program', {
    templateUrl: 'program/program.template.html',
    controller: ['$http',
        function PeopleController($http) {
            var self = this;
            $http.get('people/people.json').then(function(response) {
                console.log(response.data);
                let abstracts = {}
                for(let i in response.data) {
                    let person = response.data[i]
                    abstracts[person.last_name.replaceAll(" ", "_")] = person.abstract;
                }
                $(".session").each(function(i) {
                    let lastname = $(this).data("last-name")
                    if(lastname !== undefined) {
                        let ln = lastname.replaceAll(" ", "_");
                        if(ln in abstracts) {
                            console.log(ln, abstracts[ln]);
                            $(this).popover({
                                'content': abstracts[ln],
                                'trigger': 'hover'
                            });
                        }
                    }
                });
            });

        }
    ]
});
