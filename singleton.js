var obj = (function(){

  var instance;
    
  function createInstance(){
    return new Object('New Instance');
  }
  
  return {
    getInstance: function(){
      return !instance ?  instance = createInstance() :  instance;
    }
  };
  
})();
