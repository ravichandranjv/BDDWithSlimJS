var jsDiff = require("diff");

var test1={
Test1:function(drill,user){
       var str="";
        var diff = jsDiff.diffWords(drill, user);
       
       this.missingwordscenariotest=function(){       
            diff.forEach(function(part){
            if(part.removed){
                str+=part.value;
            }  
            });              
       return str;
    };
    var diff1 = jsDiff.diffWords(drill, user);
    this.addedwordscenariotest=function(){ 
        str="";       
            diff1.forEach(function(part){
            if(part.added){
                str+=part.value;
            }  
            });              
       return str;
    };    
    
}    
};
module.exports.test1=test1;