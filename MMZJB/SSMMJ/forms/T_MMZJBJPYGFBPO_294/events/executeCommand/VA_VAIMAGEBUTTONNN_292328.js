

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