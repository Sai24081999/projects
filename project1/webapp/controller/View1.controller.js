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

            // Multiply the variables
            let result = a * b;

            // Display the result
            alert("The product of a and b is: " + result);
        }
    });
});