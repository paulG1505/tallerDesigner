
//ProspectoQuery Entity: Prospecto
task.executeQuery.Q_PROSPCCT_UB39 = function(executeQueryEventArgs){
    
    executeQueryEventArgs.parameters.estado=executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.filtro;
    
     executeQueryEventArgs.parameters.tipo=executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.tipo;
    

    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Prospecto = true;
};