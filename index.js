$(function () {
  $("#toolbar button").click(function(){
    $("#toolbar button").eq($(this).index()).addClass("active").siblings().removeClass("active");
  })

  var mapcontain = $("#mapcontain iframe")[0].contentWindow
  $("#to23d").click(function(){
  	mapcontain.mapdoubleActive();
  })
  $("#to2d").click(function(){
  	mapcontain.map2dActive();
  })
  $("#to3d").click(function(){
  	mapcontain.map3dActive();
  })


})

