gdjs.Escena_32sin_32t_237tuloCode = {};
gdjs.Escena_32sin_32t_237tuloCode.localVariables = [];
gdjs.Escena_32sin_32t_237tuloCode.GDimagen_95951Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDimagen_95951Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDtexto1Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDtexto1Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDseparadorObjects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDseparadorObjects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewText2Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDNewText2Objects2= [];
gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects1= [];
gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects2= [];


gdjs.Escena_32sin_32t_237tuloCode.mapOfGDgdjs_9546Escena_959532sin_959532t_9595237tuloCode_9546GDenlace1Objects1Objects = Hashtable.newFrom({"enlace1": gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects1});
gdjs.Escena_32sin_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
}

}


};gdjs.Escena_32sin_32t_237tuloCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("enlace1"), gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Escena_32sin_32t_237tuloCode.mapOfGDgdjs_9546Escena_959532sin_959532t_9595237tuloCode_9546GDenlace1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("", runtimeScene);
}
{ //Subevents
gdjs.Escena_32sin_32t_237tuloCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Escena_32sin_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Escena_32sin_32t_237tuloCode.GDimagen_95951Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDimagen_95951Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtexto1Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtexto1Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDseparadorObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDseparadorObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewText2Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewText2Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects2.length = 0;

gdjs.Escena_32sin_32t_237tuloCode.eventsList1(runtimeScene);
gdjs.Escena_32sin_32t_237tuloCode.GDimagen_95951Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDimagen_95951Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtexto1Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDtexto1Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDseparadorObjects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDseparadorObjects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewText2Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDNewText2Objects2.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects1.length = 0;
gdjs.Escena_32sin_32t_237tuloCode.GDenlace1Objects2.length = 0;


return;

}

gdjs['Escena_32sin_32t_237tuloCode'] = gdjs.Escena_32sin_32t_237tuloCode;
