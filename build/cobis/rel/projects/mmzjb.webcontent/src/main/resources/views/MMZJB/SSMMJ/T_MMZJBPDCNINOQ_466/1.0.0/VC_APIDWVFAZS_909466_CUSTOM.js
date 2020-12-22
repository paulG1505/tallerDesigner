/* variables locales de T_MMZJBPDCNINOQ_466*/

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

    
        var task = designerEvents.api.formconsulta;
    

    //"TaskId": "T_MMZJBPDCNINOQ_466"


    	
//PersonaQuery Entity: Persona
task.executeQuery.Q_PERSANOO_FF85 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Persona = true;
};

	
//Start signature to Callback event to Q_PERSANOO_FF85
task.executeQueryCallback.Q_PERSANOO_FF85 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};




}));
