$(function () {

var link1 = crossroads.addRoute("/home", function () {
    $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaff",
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td><a href='#viewEmailData/" + myData[i].id + "'>" + myData[i].email + "</a></td></tr>";
                    }

                    $("#tblEmail tbody").html(htmlText);
                }

            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
        $("#email").show();
        $("#emailData").hide();
});

    var link2 = crossroads.addRoute("/viewEmailData/{id}", function (id) {
        var id = "id";
        $.ajax({
            
                type: "post",
                url: "http://www.skimtech.my/ClassicModels/GetStaffById",
                datalist: "id=" + id,
                cache: false,
                success: function (mydata) {
                    var myData = JSON.parse(mydata);
                    var lastIndex = myData.length - 1;
                    var htmlText = "";
                    if (myData[lastIndex].status === 1) {
                        for (var i = 0; i < lastIndex; i++) {
                            htmlText = htmlText + "<tr><td>" + myData[i].firstname +
                            "</td><td>" + myData[i].extension +
                            "</td><td>" + myData[i].jobtitle +
                            "</td><td>" + myData[i].id +
                            "</td><td>" + myData[i].email +
                            "</td><td>" + myData[i].lastname +
                            "</td></tr>";
                        }

                    $("#tblEmailData tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

});

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

});