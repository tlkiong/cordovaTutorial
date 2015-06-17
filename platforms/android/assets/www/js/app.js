// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function() {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new EmployeeService();

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    EmployeeListView.prototype.template =
        Handlebars.compile($("#employee-list-tpl").html());

    service.initialize().done(function() {
        // console.log("Service initialized");
        $('body').html(new HomeView(service).render().$el);
    });

    /* --------------------------------- Event Registration -------------------------------- */

    document.addEventListener('deviceready', function() {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function(message) {
                navigator.notification.alert(
                    message, // message
                    null, // callback
                    "Workshop", // title
                    "OK" // buttonName
                );
            };
        }

        FastClick.attach(document.body);
    }, false);
    /* ---------------------------------- Local Functions ---------------------------------- */

}());
