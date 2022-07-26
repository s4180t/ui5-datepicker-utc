sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.m.sample.DatePicker.Main", {
        onInit: function () {
            const dNow = new Date();
            const dToday = new Date(Date.UTC(dNow.getFullYear(), dNow.getMonth(), dNow.getDate()));
            this.oModel = new JSONModel({
                begda: dToday,
            });
            this.getView().setModel(this.oModel);
            console.log(this.oModel.getProperty("/begda"));
        },

        sBegdaJSON: dBegda => {
            return JSON.stringify(dBegda);
        },
    });
});
