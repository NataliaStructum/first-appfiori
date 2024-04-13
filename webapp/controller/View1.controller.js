sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project2basic.controller.View1", {
            onInit: function () {

                console.log("Hola")

            },

            onChangeTheme: function (oEvent) {
                var sSelectedTheme = oEvent.getSource().getSelectedKey();
                sap.ui.getCore().applyTheme(sSelectedTheme);
            },


            pressButton: function(element){

                var dialog = this.getView().byId("dialog1")
                dialog.open()

                console.log(element)
            },

            pressButton1: function(element){

                var dialog = this.getView().byId("dialog2")
                dialog.open()

                console.log(element)
            },

            onCancelCareerPlan: function(){

                var dialog = this.getView().byId("dialog1")
                dialog.close()

            },

            onCancelProdut: function(){
                var dialog = this.getView().byId("dialog2")
                dialog.close()
            },

            pressEliminar: function(){

                var oModel = this.getView().getModel()
                var tabla = this.getView().byId("_IDGenTable1")
                var indices = tabla.getSelectedIndices()

                indices.forEach(element => {

                    var contexto = tabla.getContextByIndex(element)
                    var path = contexto.getPath()

                    oModel.remove(path, {
                        success: function (menssage) {
                            sap.m.MessageToast.show("Eliminado con éxito!");
                            
                            
                        },
                        error: function (oError) {
                            sap.m.MessageToast.show("Error al eliminar");
    
                           
                        }
                    });
                    
                });

            },

            formatAvailableToObjectState: function(bAvailable) {
                console.log(bAvailable)
            
                return bAvailable > 1000 ? "Success" : "Error";
            },

            formatAvailableToObjectStateStock: function(bAvailable){
                return bAvailable > 10 ? "Information" : "Error";
            },


            onSaveProduct: function(){

                var oModel = this.getView().getModel()
                var tabla = this.getView().byId("_IDGenTable1")
                var indices = tabla.getSelectedIndices()

                console.log(indices)

            },


            onSaveCareerPlan: function(){

                var oModel = this.getView().getModel()
                var name = this.getView().byId("name")
                var price = this.getView().byId("price")
                var dialog = this.getView().byId("dialog1")
                var category = this.getView().byId("category")
                
                

                var res = {
                    NAME_PRODUCT : name.getValue(),
                    PRICE : price.getValue(),
                    CATEGORY_ID_CATEGORY : category.getSelectedKey()
                }


                oModel.create("/Product", res, {
                    success: function (menssage) {
                        sap.m.MessageBox.success("Producto creado con éxito!");

                        

                        name.setValue("");
                        price.setValue("");
                        category.clearSelection()

                        
                        
                    },
                    error: function (oError) {
                        sap.m.MessageToast.show("Error al crear el producto");
                        name.setValue("");
                        price.setValue("");

                        dialog.close();
                    }
                });

                
                

            }

        });
    });
