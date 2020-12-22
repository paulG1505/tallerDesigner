

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