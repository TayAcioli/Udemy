mdlProgress('mdl-progress-1',70,0);
mdlProgress('mdl-progress-2',40,60);

function mdlProgress(id,progress,buffer){
    document.querySelector('#'+id).addEventListener('mdl-componentupgraded', function() {
        this.MaterialProgress.setProgress(progress);
        if(buffer != 0){
            this.MaterialProgress.setBuffer(buffer);
        }
    });
}