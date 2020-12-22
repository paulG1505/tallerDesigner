
//Start signature to Callback event to CM_TMMZJBOC_SC6
task.executeCommandCallback.CM_TMMZJBOC_SC6 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RD85_WCU72');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};
