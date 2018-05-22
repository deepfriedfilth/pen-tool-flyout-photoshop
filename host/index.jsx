function penTool() {
  app.currentTool = 'penTool';
}
function addAnchor() {
  app.currentTool = 'addKnotTool';
}
function delAnchor() {
  app.currentTool = 'deleteKnotTool';
}
function convertPt() {
  app.currentTool = 'convertKnotTool';
}
function pathSelect() {
  app.currentTool = 'pathComponentSelectTool';
}
function dirSelect() {
  app.currentTool = 'directSelectTool';
}