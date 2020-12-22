/* variables locales de T_MMZJBOCOGRIDN_472*/

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

    
        var task = designerEvents.api.formpersona;
    

    //"TaskId": "T_MMZJBOCOGRIDN_472"


    	

//Entity: Persona
//Persona.estado (ComboBox) View: FormPersona
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADODBIQGUFUW_707284 = function(  entities, changedEventArgs ) {
let estado=changedEventArgs.newValue;
	
	if(estado == "SO"){
		changedEventArgs.commons.api.viewState.hide('VA_NOMBRECNWVDSHBV_508284');
		changedEventArgs.commons.api.viewState.hide('VA_APELLIDOCILKJTO_592284');

	}else{
		changedEventArgs.commons.api.viewState.show('VA_NOMBRECNWVDSHBV_508284');
		changedEventArgs.commons.api.viewState.show('VA_APELLIDOCILKJTO_592284');
	}

    changedEventArgs.commons.execServer = false;

};

	

//Entity: Persona
//Persona.idPersona (TextInputBox) View: FormPersona
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_IDPERSONAIPGITB_221284 = function(  entities, changedEventArgs ) {
    
let estado=changedEventArgs.value;
	
	if(estado == 0){
		changedEventArgs.commons.api.viewState.hide('VA_IDPERSONAIPGITB_221284');
		changedEventArgs.commons.api.viewState.hide('CM_TMMZJBOC_9TM');

	}else{
		changedEventArgs.commons.api.viewState.show('VA_IDPERSONAIPGITB_221284');
		changedEventArgs.commons.api.viewState.show('CM_TMMZJBOC_9TM');
	}
    changedEventArgs.commons.execServer = false;

};

	


// (Button) 
task.executeCommand.CM_TMMZJBOC_9TM = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};

	
//Start signature to Callback event to CM_TMMZJBOC_9TM
task.executeCommandCallback.CM_TMMZJBOC_9TM = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RD85_WCU72');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};


	


// (Button) 
task.executeCommand.CM_TMMZJBOC_SC6 = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;
    
};

	
//Start signature to Callback event to CM_TMMZJBOC_SC6
task.executeCommandCallback.CM_TMMZJBOC_SC6 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RD85_WCU72');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};




}));
