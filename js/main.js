$(document).ready(function(){
    var productTemplate = _.template($("#productTemplate").html());
    var targetTable = $("#tbodyProductTable");
    var data = JSON.parse($("#hidJSONData").html());

    $(productTemplate({list:data})).appendTo(targetTable);
});