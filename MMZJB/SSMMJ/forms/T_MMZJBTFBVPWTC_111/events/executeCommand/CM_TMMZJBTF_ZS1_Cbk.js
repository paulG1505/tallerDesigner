
//Start signature to Callback event to CM_TMMZJBTF_ZS1
task.executeCommandCallback.CM_TMMZJBTF_ZS1 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
      executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_RL23_CYN42');//REFRESH
    
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};
