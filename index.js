//https://www.youtube.com/watch?v=BtOrr7oTH_8
var containerElement = document.getElementsByClassName("container");

for(var i=0; i < containerElement.length ; i++){
	containerElement[i].addEventListener('click',eventPhaseFunc,true)
}
function eventPhaseFunc(e){
	//e.stopPropagation();
	//console.log(e.eventPhase);
	var phase = e.eventPhase;
	var phaseName ="" ;
	if(phase=="1"){
		phaseName ="capturing";
	}
	if(phase=="2"){
		phaseName = "Target";
	}
	if(phase=="3"){
		phaseName = "Bubbling";
	}
//	console.log("Box : "+ this.id+ " - "+phaseName);
	if(e.target.id == this.id){
		console.log("Box : "+ this.id+ " - "+phaseName);
		console.log("Box : "+ e.target.id+ " - "+phaseName);
	}
	
}