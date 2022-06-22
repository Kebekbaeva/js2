// window.addEventListener("scroll", () => {
// 	console.log(window.pageYOffset);
// });

const obj = {
	name: "john",
	age: "20",
};

console.log("obj");

const data = JSON. stringify(obj);
console.log(data, "string");

console.log(JSON. parse(data), "parse");

const btn = document.querySelector(".btn");
 
btn.addEventListener("click", () =>  {
	const reqest = new XMLHttpRequest(); 
	reqest.open("GET", "data.json");
	reqest.setRequestHeader("Content-type", "application/json");
	reqest.send();
	reqest.addEventListener("load", () => {
		const data = JSON.parse(reqest.response);
		console.log(reqest.response);
		console.log(data);
		document.querySelector(".name").innerHTML = data.name;
		document.querySelector(".age").innerHTML = data.age;
		});
});

//null undef boolean string num nan - primitive
// obj arr fun - obg

const obj3 = {
	name: "Maha",
	num: "+996555444978",
};

const obj2 = obj3;
obj2.name = "Alex";
console.log(obj);
console.log(obj2);

const obg2 = {...obj3 };


// let http = require("http");

// http
// 	.createServer((request,response) => {
// 		response.writeHead(200, {"Content - Type": "text/plain"});
// 		response.end("Hello World");  
// 	})
// 	.listen(8081);
// 	console.log("otvet s servera i stavim kod")
