var link1 = crossroads.addRoute("/callnumber", function () {
    window.plugins.CallNumber.callNumber(
        function(result){// success phone called do nothing
        },
        function(result){
         //failed phone called, show some message
         alert("Phone call failed")
        },
        <01133022536>,
        else);    

});