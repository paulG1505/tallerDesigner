
//Start signature to Callback event to CM_TMMZJBTF_J1T
task.executeCommandCallback.CM_TMMZJBTF_J1T = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RL23_CYN42');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};
