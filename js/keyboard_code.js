let item = null;
let container_body = document.getElementById("container_body");
let shift_status = null;
let ctrl_status = null;
let data_pattern = [
	["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],
	["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],
	["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
	["ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],
	["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]
];
let input_container;

function keyPressed(){
	input_container = document.getElementById("input_container");
	
	for (let r=0; r<5; r++){	
		for (let k=0; k<data_pattern[r].length; k++){
			if(data_pattern[r][k] === event.code){
				keyInputKeyboard(r,k);
				if(data_id[r][k].substring(0,3) === "Key"){input_container.placeholder += data_id[r][k].substring(3,4);}	
				else if(data_id[r][k].substring(0,5) === "Digit"){input_container.placeholder += data_id[r][k].substring(5,6);}
				else if(data_id[r][k] === "Backquote"){input_container.placeholder += "`";}
				else if(data_id[r][k] === "Minus"){input_container.placeholder += "-";}
				else if(data_id[r][k] === "Equal"){input_container.placeholder += "=";}
				else if(data_id[r][k] === "Backslash"){input_container.placeholder += "\\";}
				else if(data_id[r][k] === "Slash"){input_container.placeholder += "/";}
				else if(data_id[r][k] === "BracketLeft"){input_container.placeholder += "[";}
				else if(data_id[r][k] === "BracketRight"){input_container.placeholder += "]";}
				else if(data_id[r][k] === "Semicolon"){input_container.placeholder += ";";}
				else if(data_id[r][k] === "Quote"){input_container.placeholder += "'";}
				else if(data_id[r][k] === "Comma"){input_container.placeholder += ",";}
				else if(data_id[r][k] === "Period"){input_container.placeholder += ".";}
				k = data_pattern[r].length;
			}
		}
			
	}

	if(shift_status&&event.code === "ControlLeft"||shift_status&&event.code === "ControlRight"){ changeLanguageSettings();}
	else if(ctrl_status&&event.code === "ShiftLeft"||ctrl_status&&event.code === "ShiftRight"){ changeLanguageSettings();}
	else if(event.code === "ControlLeft"||event.code === "ControlRight"){ctrl_status = true;}
	else if(event.code === "ShiftLeft"||event.code === "ShiftRight"){shift_status = true;}
}

function keyDepressed(){
	if(event.code === "ControlLeft"||event.code === "ControlRight"){ctrl_status = null;}
	else if(event.code === "ShiftLeft"||event.code === "ShiftRight"){shift_status = null;}
	
	for (let r=0; r<5; r++){	
		for (let k=0; k<data_pattern[r].length; k++){
			if(data_pattern[r][k] === event.code){
				
				let temp = document.getElementById(data_id[r][k]);
				if(temp){
					if(temp.className.substring(temp.className.length - 8,temp.className.length) === " pressed"){
						temp.className = temp.className.substring(0,temp.className.length - 8);
					}
				}							
				k = data_pattern[r].length;
			}
		}	
	}
}

container_body.addEventListener("keydown", keyPressed, false);
container_body.addEventListener("keyup", keyDepressed, false);

let i = null,data_main,data_id;

function setRusLanguage(){
	current_language = "rus";
	data_main = [
	["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
	["Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\\","DEL"],
	["Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","ENTER"],
	["Shift","\\","Я","Ч","С","М","И","Т","Ь","Б","Ю","/","up","Shift"],
	["Ctrl","Win","Alt","Space","Alt","Ctrl","left","down","right"]
	];
	
	data_id = [
	["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],
	["Tab","KeyЙ","KeyЦ","KeyУ","KeyК","KeyЕ","KeyН","KeyГ","KeyШ","KeyЩ","KeyЗ","KeyХ","KeyЪ","Backslash","Delete"],
	["Caps Lock","KeyФ","KeyЫ","KeyВ","KeyА","KeyП","KeyР","KeyО","KeyЛ","KeyД","KeyЖ","KeyЭ","ENTER"],
	["ShiftLeft","Backslash","KeyЯ","KeyЧ","KeyС","KeyМ","KeyИ","KeyТ","KeyЬ","KeyБ","KeyЮ","Slash","ArrowUp","ShiftRight"],
	["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]

	];
}

function setEngLanguage(){	
	current_language = "eng";
	data_main = [
	["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
	["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\","DEL"],
	["Caps Lock","A","S","D","F","G","H","J","K","L",";","'","ENTER"],
	["Shift","\\","Z","X","C","V","B","N","M",".",",","/","up","Shift"],
	["Ctrl","Win","Alt","Space","Alt","Ctrl","left","down","right"]
	];
	
	data_id = [
	["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],
	["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete"],
	["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
	["ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],
	["ControlLeft","MetaLeft","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]
	];
}

let data_width = [
["single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","double-width"],
["single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width"],
["double-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","double-width"],
["double-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width","single-width"],
["one-and-half-width","single-width","single-width","sixth-width","single-width","single-width","single-width","single-width","one-and-half-width"]
];

let screen_keyboard = null;
let screen_info;	
let screen_keyboard_row = null;

function keyKeyboard(i,r){
	item = document.createElement("div");
	item.setAttribute("class","screen-button " + data_width[r][i]);
	item.textContent = data_main[r][i];
	item.id = data_id[r][i];
	item.addEventListener("click", keyInput, false);	
	screen_keyboard_row.appendChild(item);
}

function keyInput(){
	input_container = document.getElementById("input_container");
	if(event.currentTarget.id.substring(0,3) === "Key"){input_container.placeholder += event.currentTarget.id.substring(3,4);}
	else if(event.currentTarget.id.substring(0,5) === "Digit"){input_container.placeholder += event.currentTarget.id.substring(5,6);}
}

function keyInputKeyboard(r,k){
	let temp = null;
	
	temp = document.getElementById(data_id[r][k]);
	if(temp){
			if(temp.className.substring(temp.className.length - 8,temp.className.length)===" pressed"){}
			else{temp.className += " pressed";}
	}
}

function showNewKeyboard(){
	screen_keyboard = document.createElement("div");
	screen_keyboard.setAttribute("id","screen_keyboard");
	screen_keyboard.setAttribute("class","screen-keyboard");
	
	for (let r=0; r<5; r++){
		screen_keyboard_row = document.createElement("div");
		screen_keyboard_row.setAttribute("class","screen-keyboard-row");
		for (let k=0; k<data_main[r].length; k++){
			keyKeyboard(k,r);
		}
		screen_keyboard.appendChild(screen_keyboard_row);
	}
	container_body.appendChild(screen_keyboard);
	
	screen_info = document.createElement("div");
	screen_info.setAttribute("class","screen-info");
	screen_info.textContent = "OS: Win; Change language: CTRL + Shift";
	
	container_body.appendChild(screen_keyboard);
	container_body.appendChild(screen_info);
}

screen_input = document.createElement("textarea");
screen_input.setAttribute("type","text");
screen_input.setAttribute("id","input_container");

container_body.appendChild(screen_input);

let current_language;

function removeOldKeyboard(){
	container_body.removeChild(screen_keyboard);
	container_body.removeChild(screen_info);
}

function readLanguageSettings(){
	let temp = JSON.parse(localStorage.getItem('LanguageSettings'));

	if(!temp){
		setRusLanguage();		
		showNewKeyboard();
		saveLanguageSettings();
	}
	else if(temp === "eng"){
		setEngLanguage();
		showNewKeyboard();		
	}
	else if(temp === "rus"){
		setRusLanguage();
		showNewKeyboard();		
	}
}

function changeLanguageSettings(){
	if(current_language === "eng"){
		removeOldKeyboard();
		setRusLanguage();
		showNewKeyboard();
		saveLanguageSettings();
	}
	else if(current_language === "rus"){
		removeOldKeyboard();
		setEngLanguage();
		showNewKeyboard();
		saveLanguageSettings();
	}
}

function saveLanguageSettings(){
	localStorage.setItem('LanguageSettings', JSON.stringify(current_language));
}

readLanguageSettings();