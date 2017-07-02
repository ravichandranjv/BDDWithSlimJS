function myApi(){};
myApi.prototype = {
twoscenarios:function(drill,user){
    this.missingwordscenariotest=function(){       
	return "missing ";
    };

    this.addedwordscenariotest=function(){ 
       return " added";
    };    
}        
}
module.exports=new myApi();
