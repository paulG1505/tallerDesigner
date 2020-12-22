

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