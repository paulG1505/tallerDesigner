/* variables locales de T_MMZJBJPYGFBPO_294*/

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

    
        var task = designerEvents.api.formfiltro;
    

    //"TaskId": "T_MMZJBJPYGFBPO_294"


    	

//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona.filtro (ComboBox) View: FormFiltro
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_FILTROUMFQUZEUJ_547328 = function(  entities, changedEventArgs ) {
let valor = changedEventArgs.newValue;

    if(valor === "PE"){
		changedEventArgs.commons.api.viewState.hide('QV_TM23_NKO34');
        changedEventArgs.commons.api.viewState.show('QV_GV85_LBM45');

	}else{
        changedEventArgs.commons.api.viewState.hide('QV_GV85_LBM45');
		changedEventArgs.commons.api.viewState.show('QV_TM23_NKO34');
	}

    changedEventArgs.commons.execServer = false;

};

	

//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona. (ImageButton) View: FormFiltro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_292328 = function(  entities, executeCommandEventArgs ) {

    let valor = entities.FiltroBusquedaPersona.filtro;
    if(valor=='PE'){
       executeCommandEventArgs.commons.api.grid.refresh('QV_GV85_LBM45');
        changedEventArgs.commons.api.viewState.hide('QV_TM23_NKO34');
       }else {
            executeCommandEventArgs.commons.api.grid.refresh('QV_TM23_NKO34');//REFRESH
       changedEventArgs.commons.api.viewState.hide('QV_GV85_LBM45');
       }

    executeCommandEventArgs.commons.execServer = false;
};

	
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIEENNT_KK23 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;
};

	
//Start signature to Callback event to Q_CLIEENNT_KK23
task.executeQueryCallback.Q_CLIEENNT_KK23 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
};


	
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
