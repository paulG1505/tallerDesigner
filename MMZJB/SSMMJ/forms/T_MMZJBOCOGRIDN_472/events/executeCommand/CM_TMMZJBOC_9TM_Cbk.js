
//Start signature to Callback event to CM_TMMZJBOC_9TM
task.executeCommandCallback.CM_TMMZJBOC_9TM = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RD85_WCU72');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};
