var numx = 0.0132;
var numy = 0.00655;
var map2dref ;
var map3dref ;
var mappanoramaref;
$(function  () {
    map2dref = getmap2d();
    map3dref = getmap3d();
    mappanoramaref = getpanorama();
})

function getmap2d () {
    return $("#frame2d")[0].contentWindow;
}
function getmap3d () {
    return $("#frame3d")[0].contentWindow;
}
function getpanorama () {
    return $("#framepanorama")[0].contentWindow;
}
//二维地图通知 三维和全景
function PositionAttach(rect){
    map3dref.PositionAttach(rect,numx,numy);
    setpanoramabyrect (rect);
}

//三维地图通知 二维
function Set2DMap() {
    map2dref.setViewport( rectEX(map3dref.getRect()));
};
//全景通知二维
function set2DMapByPt(lng,lat){
    map2dref.set2DMapByPt(lng,lat);
}
function rectEX (rect) {
    return {
        "leftbottomx":rect.leftbottomx + numx,
        "leftbottomy":rect.leftbottomy+numy,
        "righttopx":  rect.righttopx+numx, 
        "righttopy":  rect.righttopy+numy
    }
}
function setpanorama () {
    var rect = map3dref.getRect();
    setpanoramabyrect(rect);
}
function setpanoramabyrect (rect) {
    mappanoramaref.setmapPosition((rect.leftbottomx+rect.righttopx)/2,(rect.leftbottomy+rect.righttopy)/2);
}
function map2dActive(){
    $("#mapcontain")[0].cols="100%,0,*";
}
function map3dActive(){
    $("#mapcontain")[0].cols="0,100%,*";
}
function mapdoubleActive(){
    $("#mapcontain")[0].cols="50%,50%,*";
}
function mappanoramaActive(){
    $("#mapcontain")[0].cols="50%,0,*";
}