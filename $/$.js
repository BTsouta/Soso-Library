let start
let hrstart
let simulateTime
const crypto = require('crypto');
const fs = require('fs');
const timeDate = new Date();
const requirefile = {
	Chatbot_dictionary: require('./All codes/chatbot_dictionary.js'),
}

exports.Change_log = function() {
  console.log("\u001b[32mChange log\u001b[0m");
  console.group();
    console.log("\u001b[33mv0.0.1\u001b[0m");
    console.group();
      console.log("\u001b[36m初期ベータ版\u001b[0m");
      console.log("\u001b[36m$.if実装\u001b[0m");
    console.groupEnd();
    console.log("\u001b[33mv0.0.2\u001b[0m");
    console.group();
      console.log("\u001b[36m自分用の正式実装\u001b[0m");
      console.log("\u001b[36m$.ifの正式実装\u001b[0m");
    console.groupEnd();
    console.log("\u001b[33mv0.1.1\u001b[0m");
    console.group();
      console.log("\u001b[36m次期ベータ版\u001b[0m");
      console.log("\u001b[36m$.timeの実装\u001b[0m");
      console.log("\u001b[36m公開に向けて動き始めた\u001b[0m");
    console.groupEnd();
    console.log("\u001b[33mv0.1.2\u001b[0m");
    console.group();
      console.log("\u001b[36m最終ベータ版\u001b[0m");
      console.log("\u001b[36m$.segmentationの実装\u001b[0m");
      console.log("\u001b[36m最終調整\u001b[0m");
    console.groupEnd();
    console.log("\u001b[33mv0.2.1\u001b[0m");
    console.group();
      console.log("\u001b[36m正式実装\u001b[0m");
      console.log("\u001b[36m$.botのベータ実装\u001b[0m");
    console.groupEnd();
    console.log("\u001b[33mv0.2.2\u001b[0m");
    console.group();
      console.log("\u001b[36m$.botの調整\u001b[0m");
      console.log("\u001b[36mバグなどの調整＆新機能の調整\u001b[0m");
    console.groupEnd();
    console.log("\u001b[33mv0.2.3\u001b[0m");
    console.group();
      console.log("\u001b[36m$.logの実装＆$.botの調整\u001b[0m");
      console.log("\u001b[36mlogの実装、botの調整\u001b[0m");
    console.groupEnd();
    console.log("\u001b[35mv0.3.1\u001b[0m");
    console.group();
      console.log("\u001b[36m$.botの正式実装など\u001b[0m");
      console.log("\u001b[36m$.colorの実装\u001b[0m");
      console.log("\u001b[36m$.logの調整\u001b[0m");
      console.log("\u001b[36m$.averageの実装\u001b[0m");
      console.log("\u001b[36m公開に向けてもう少し手前になってきた\u001b[0m");
    console.groupEnd();
  console.groupEnd();
}

exports.average = (argument_a) => {
  let Numerical_temporary_data = 0;
  for (let i = 0;argument_a.length>i;i++)Numerical_temporary_data = Numerical_temporary_data + argument_a[i];
  return Numerical_temporary_data / argument_a.length;
}

exports.log = function(pas,logtext) {
  if(!pas) return console.error("Path not set");
  if(!logtext) return console.error("No log text set");
  let Year = now.getFullYear();
  let Month = now.getMonth()+1;
  let Date = now.getDate();
  let Hour = now.getHours();
  let Min = now.getMinutes();
  let Sec = now.getSeconds();
  let logtxtxt = "[" + Year + "." + Month + "/" + Date + "|" + Hour + ":" + Min + ":" + Sec + "]";
  fs.writeFile(pas + logtxtxt + '.log.txt', logtext, function(err) {})
}

exports.bot = function() {
	return new requirefile["Chatbot_dictionary"].chatbot_dictionary();
}

exports.version = function (mode) {
	if(mode == 1){return "v0.3.1";}else{console.log("v0.3.1");}
}

exports.segmentation = function () {
	const type_reg = new RegExp((() => {
    	const array = [
    	    'ぁ-ん',
    	    'ァ-ヴーｱ-ﾝﾞｰ',
        	'一-龠々〆ヵヶ',
        	'a-zA-Zａ-ｚＡ-Ｚ',
        	'0-9０-９',
			'・、。,\\.？\\?！「」!',
        	'　 ',
        	'\n'
    	];
    	array.push('^' + array.join(''));
    	return array.map(str => "[" + str + "]+").join('|');
  	})(), 'g');
  	return (_str, _num) => {
    	if(typeof _str !== "string") return null;
    	if (0 < Number(_num) && !isNaN(_num)) {
    		const reg = new RegExp('(.|\n){1,' + _num + '}', 'g');
    		return _str.match(reg) || null;
    	}
    	return _str.match(type_reg) || null;
  	}
}();

exports.ping = function () {
	return "pong";
}

exports.if = function (x,min,max) {
	if(min <= x && x <= max){
		return true
	} else {
		return false
	}
}

exports.times = n => f => {
  let iter = i => {
    if (i === n) return
    f(i)
    iter (i + 1)
  }
  return iter (0)
}

exports.color = {
  black:'\u001b[30m',
  red:'\u001b[31m',
  green:'\u001b[32m',
  yellow:'\u001b[33m',
  blue:'\u001b[34m',
  magenta:'\u001b[35m',
  cyan:'\u001b[36m',
  white:'\u001b[37m',
  reset:'\u001b[0m'
}

exports.bgcolor = {
  red:'\u001b[48;5;41m',
  green:'\u001b[48;5;42m',
  yellow:'\u001b[48;5;43m',
  blue:'\u001b[48;5;44m',
  magenta:'\u001b[48;5;45m',
  cyan:'\u001b[48;5;46m',
  white:'\u001b[48;5;107m',
  reset:'\u001b[48;5;0m'
}