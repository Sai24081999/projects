sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        onPress: function() {
            // Define two variables
            let a = 5;
            let b = 10;

            // Add the variables
            let result = a + b;

            // Display the result
            alert("The sum of a and b is: " + result);
        }
    });
});