sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        onPress: function() {
            // Define two variables
            let a = 10;
            let b = 2;

            // Divide the variables
            let result = a / b;

            // Display the result
            alert("The division of a by b is: " + result);
        },
        onPress2: function() {
            // Define two variables
            let a = 5;
            let b = 10;

            // Add the variables
            let result = a + b;

            // Display the result
            alert("The sum of a and b is: " + result);
        },
        onNavigateToView2: function() {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("View2");
        }

    });
});