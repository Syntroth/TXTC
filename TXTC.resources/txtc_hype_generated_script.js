//	HYPE.documents["TXTC"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "TXTC.resources";
	var documentName = "TXTC";
	var documentLoaderFilename = "txtc_hype_generated_script.js";
	var mainContainerID = "txtc_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_150 == "undefined") {
		if(typeof window.HYPE_150_DocumentsToLoad == "undefined") {
			window.HYPE_150_DocumentsToLoad = new Array();
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=150';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_150();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,sceneOid:"135",transition:1}],v:{"126":{aV:8,w:"^",x:"visible",a:-13,Z:"break-word",b:251,j:"absolute",r:"inline",c:97,z:"9",aS:8,aT:8,d:95,k:"div",t:144,y:"preserve",aU:8,G:"#000000",v:"bold"},"127":{aV:8,w:"^",x:"visible",a:393,Z:"break-word",b:251,j:"absolute",r:"inline",c:97,z:"10",aS:8,aT:8,d:95,k:"div",t:144,y:"preserve",aU:8,G:"#000000",v:"bold"},"124":{aV:8,w:"( &nbsp; &nbsp; )",x:"visible",a:52,Z:"break-word",b:274,j:"absolute",r:"inline",c:412,z:"1",aS:8,aT:8,d:262,k:"div",t:180,y:"preserve",aU:8,G:"#000000"},"128":{aV:8,w:",,,",x:"visible",a:128,Z:"break-word",b:243,j:"absolute",r:"inline",c:353,z:"2",aS:8,aT:8,d:397,k:"div",t:288,y:"preserve",aU:8,G:"#000000"},"120":{aU:8,G:"#000000",c:81,aV:8,r:"inline",d:49,t:36,Z:"break-word",v:"bold",w:"[^]",j:"absolute",x:"visible",k:"div",y:"preserve",z:"8",aS:8,aT:8,a:191,F:"center",b:727},"122":{c:538,d:466,I:"None",J:"None",K:"None",t:588,L:"None",M:0,w:"..",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",O:0,P:0,C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:86,b:-113}},n:"C",T:{kTimelineDefaultIdentifier:{d:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"125"},{x:1,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,sceneOid:"125",transition:1}],v:{"131":{aV:8,w:"( &nbsp; &nbsp; )",x:"visible",a:52,Z:"break-word",b:274,j:"absolute",r:"inline",c:412,z:"2",aS:8,aT:8,d:262,k:"div",t:180,y:"preserve",aU:8,G:"#000000"},"129":{c:538,d:466,I:"None",J:"None",K:"None",t:400,L:"None",M:0,w:"--",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",O:0,P:0,C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:124,b:140},"132":{aV:8,w:"^",x:"visible",a:393,Z:"break-word",b:251,j:"absolute",r:"inline",c:97,z:"10",aS:8,aT:8,d:95,k:"div",t:144,y:"preserve",aU:8,G:"#000000",v:"bold"},"133":{aU:8,G:"#000000",c:81,aV:8,r:"inline",d:49,t:36,Z:"break-word",v:"bold",w:"[^]",j:"absolute",x:"visible",k:"div",y:"preserve",z:"8",aS:8,aT:8,a:191,F:"center",b:727},"130":{aV:8,w:",,,",x:"visible",a:128,Z:"break-word",b:243,j:"absolute",r:"inline",c:353,z:"1",aS:8,aT:8,d:397,k:"div",t:288,y:"preserve",aU:8,G:"#000000"},"134":{aV:8,w:"^",x:"visible",a:-13,Z:"break-word",b:251,j:"absolute",r:"inline",c:97,z:"9",aS:8,aT:8,d:95,k:"div",t:144,y:"preserve",aU:8,G:"#000000",v:"bold"}},n:"C 2",T:{kTimelineDefaultIdentifier:{d:1,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"135"},{x:2,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,sceneOid:"135",transition:1}],v:{"138":{aV:8,w:"( &nbsp; &nbsp; )",x:"visible",a:52,Z:"break-word",b:274,j:"absolute",r:"inline",c:412,z:"1",aS:8,aT:8,d:262,k:"div",t:180,y:"preserve",aU:8,G:"#000000"},"140":{aU:8,G:"#000000",c:81,aV:8,r:"inline",d:49,t:36,Z:"break-word",v:"bold",w:"[^]",j:"absolute",x:"visible",k:"div",y:"preserve",z:"8",aS:8,aT:8,a:191,F:"center",b:727},"139":{aV:8,w:"^",x:"visible",a:393,Z:"break-word",b:251,j:"absolute",r:"inline",c:97,z:"10",aS:8,aT:8,d:95,k:"div",t:144,y:"preserve",aU:8,G:"#000000",v:"bold"},"136":{c:538,d:466,I:"None",J:"None",K:"None",t:588,L:"None",M:0,w:"..",N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",O:0,P:0,C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:86,b:-113},"141":{aV:8,w:"^",x:"visible",a:-13,Z:"break-word",b:251,j:"absolute",r:"inline",c:97,z:"9",aS:8,aT:8,d:95,k:"div",t:144,y:"preserve",aU:8,G:"#000000",v:"bold"},"137":{aV:8,w:",,,",x:"visible",a:128,Z:"break-word",b:243,j:"absolute",r:"inline",c:353,z:"2",aS:8,aT:8,d:397,k:"div",t:288,y:"preserve",aU:8,G:"#000000"}},n:"C 3",T:{kTimelineDefaultIdentifier:{d:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"142"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

