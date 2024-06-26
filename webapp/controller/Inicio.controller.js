sap.ui.define([
    'sap/ui/Device',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'sap/m/Popover',
	'sap/m/Button',
	'sap/m/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function ( Device, Controller, JSONModel, Popover, Button, mobileLibrary) {
        "use strict";

        return Controller.extend("project2basic.controller.Inicio", {
            onInit : function() {
                this.oModel = new JSONModel();
                //this.oModel.loadData(sap.ui.require.toUrl("project2-basic/model/model.json"), null, false);
                //this.getView().setModel(this.oModel);
            },
    
            onItemSelect : function(oEvent) {
                var item = oEvent.getParameter('item');
                this.byId("pageContainer").to(this.getView().createId(item.getKey()));
            },
    
            onMenuButtonPress : function() {
                var toolPage = this.byId("toolPage");
    
                toolPage.setSideExpanded(!toolPage.getSideExpanded());
            }

        });
    });
