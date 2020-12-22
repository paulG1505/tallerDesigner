/* variables locales de T_MMZJBTFBVPWTC_111*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.formcliente;
    

    //"TaskId": "T_MMZJBTFBVPWTC_111"


    	


// (Button) 
task.executeCommand.CM_TMMZJBTF_J1T = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};

	
//Start signature to Callback event to CM_TMMZJBTF_J1T
task.executeCommandCallback.CM_TMMZJBTF_J1T = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RL23_CYN42');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};


	


// (Button) 
task.executeCommand.CM_TMMZJBTF_ZS1 = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};

	
//Start signature to Callback event to CM_TMMZJBTF_ZS1
task.executeCommandCallback.CM_TMMZJBTF_ZS1 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RL23_CYN42');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};




}));
