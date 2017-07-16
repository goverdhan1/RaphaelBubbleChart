'use strict'

app.factory("details", function($http, $q) {
    return {
        getDetails: function(req) {
            var deferred = $q.defer();
            var details = [{"home":0,"away":1,"percent":5.2632,"splitUp":"20/380"},{"home":0,"away":2,"percent":5.5263,"splitUp":"21/380"},{"home":0,"away":3,"percent":1.8421,"splitUp":"7/380"},{"home":0,"away":4,"percent":0.7895,"splitUp":"3/380"},{"home":0,"away":5,"percent":0.7895,"splitUp":"3/380"},{"home":1,"away":0,"percent":8.6842,"splitUp":"33/380"},{"home":1,"away":1,"percent":11.8421,"splitUp":"45/380"},{"home":1,"away":2,"percent":8.9474,"splitUp":"34/380"},{"home":1,"away":3,"percent":2.1053,"splitUp":"8/380"},{"home":1,"away":4,"percent":0.5263,"splitUp":"2/380"},{"home":1,"away":5,"percent":0.7895,"splitUp":"3/380"},{"home":1,"away":6,"percent":0.5263,"splitUp":"2/380"},{"home":2,"away":0,"percent":7.8947,"splitUp":"30/380"},{"home":2,"away":1,"percent":7.8947,"splitUp":"30/380"},{"home":2,"away":2,"percent":3.6842,"splitUp":"14/380"},{"home":2,"away":3,"percent":2.8947,"splitUp":"11/380"},{"home":2,"away":4,"percent":0.2632,"splitUp":"1/380"},{"home":3,"away":0,"percent":5.5263,"splitUp":"21/380"},{"home":3,"away":1,"percent":6.0526,"splitUp":"23/380"},{"home":3,"away":2,"percent":1.8421,"splitUp":"7/380"},{"home":3,"away":3,"percent":1.3158,"splitUp":"5/380"},{"home":3,"away":5,"percent":0.2632,"splitUp":"1/380"},{"home":4,"away":0,"percent":2.3684,"splitUp":"9/380"},{"home":4,"away":1,"percent":1.0526,"splitUp":"4/380"},{"home":4,"away":2,"percent":0.5263,"splitUp":"2/380"},{"home":4,"away":3,"percent":0.2632,"splitUp":"1/380"},{"home":4,"away":4,"percent":0.5263,"splitUp":"2/380"},{"home":5,"away":0,"percent":1.0526,"splitUp":"4/380"},{"home":5,"away":1,"percent":0.2632,"splitUp":"1/380"},{"home":5,"away":2,"percent":0.5263,"splitUp":"2/380"},{"home":6,"away":0,"percent":0.2632,"splitUp":"1/380"},{"home":6,"away":1,"percent":0.2632,"splitUp":"1/380"},{"home":7,"away":1,"percent":0.2632,"splitUp":"1/380"},{"home":8,"away":2,"percent":0.2632,"splitUp":"1/380"},{"home":0,"away":0,"percent":7.1053,"splitUp":"27/380"}];
            deferred.resolve(details);
            return deferred.promise;
        }
    }
});
