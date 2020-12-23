/* variables locales de T_MMZJBLUNRNLXJ_384*/

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

    
        var task = designerEvents.api.formprospecto;
    

    //"TaskId": "T_MMZJBLUNRNLXJ_384"


    	
//ProspectoQuery Entity: Prospecto
task.executeQuery.Q_PROSPCCT_UB39 = function(executeQueryEventArgs){
    
    executeQueryEventArgs.parameters.estado=executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.filtro;
    
     executeQueryEventArgs.parameters.tipo=executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.tipo;
    

    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Prospecto = true;
};

	
//Start signature to Callback event to Q_PROSPCCT_UB39
task.executeQueryCallback.Q_PROSPCCT_UB39 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
