let fs = require('fs');
let arg = process.argv;
let inText;
let i = 0, n = 1;
let out = '';

function newCode(a, b){
	return newString = String.fromCharCode(35) + String.fromCharCode(a) + inText.charAt(b);
}


fs.readFile(arg[3], (err, data) => {
	if (err){
		console.error(err);
		return;
	}
	inText = data.toString();
	console.log(inText);
	console.log(inText.length);
	if (arg[2] == 'code'){
		while (i < inText.length){
			while(inText.charAt(i) == inText.charAt(i+n)){
				n++;
			}	
			if (n >= 4){
				s = n
				while (s > 255) {
					out += newCode(255, i);
					s -= 255;
				}
				if ((s >= 4) & (s <= 255)){ 
					out += newCode(s, i);
				}else {
					out += inText.slice(i, i + s);
				}	
			}else {
				if (inText.charAt(i) == String.fromCharCode(35)){
					out += newCode(n, i);
				}else{	
					out += inText.slice(i, i + n);
				}	
			}		
			i += n;
			n  = 1;
		}
		console.log(out);
		fs.writeFileSync(arg[4], out); 
	}else if (arg[2] == 'decode'){
		while (i < inText.length){
			if (inText.charAt(i) == String.fromCharCode(35)) {
				l = inText.charAt(i + 2);
				out += l.repeat(inText.charCodeAt(i + 1));
				i += 3;
			}else {
				out += inText.charAt(i);
				i++;
			}
		}
		console.log(out);
		fs.writeFileSync(arg[4], out);
	}		
});