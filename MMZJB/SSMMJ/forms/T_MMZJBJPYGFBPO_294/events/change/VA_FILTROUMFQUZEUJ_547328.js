

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