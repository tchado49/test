let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let sendBtn = document.querySelector('.btn');
let nextprev = document.querySelector('.slider .nextPrevArrows');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
//let thumbnail = document.querySelector('.slider .thumbnail');
let item1 = document.querySelector('.slider .item1');
let item2 = document.querySelector('.slider .item2');
let item3 = document.querySelector('.slider .item3');
let item4 = document.querySelector('.slider .item4');
//let thumbmini = document.querySelector('.slider .thumbmini');
//let thumbnailItems = thumbnail.querySelectorAll('.item');
let searchResults = document.querySelector('.ulprod');
let searchInput = document.querySelector('.titleprod');
const modal = document.querySelector("[data-modal]");
const startpage = document.querySelector('.modal-start');
//const nameprod = document.getElementById('new-product').value;

//https://script.google.com/macros/s/AKfycbwTeJrJfJFskb_pJD-RkXa4ML_0hFMs7hRX13ry9aIt7GsQ2WoN6Yw_QM2ZZvER1zF2gA/exec  //MESSAGE

const array0 = new Array(100); let searchData = new Array(100);  const array = new Array(100); const array02 = new Array(100);
const arrayprod = new Array(100); const arraynext = new Array(100);
const arraynextprev = new Array(100); const arraynextprev2 = new Array(100); const arraynext2 = new Array(100);
const arrayoutputnext = new Array(100); const arrayoutput = new Array(100); const arrayoutput2 = new Array(100);
const arrayoutputnext2 = new Array(100); let varpair = 2;
let valnext = 1; let countrows = 0; let preview = window.innerWidth; let test = 0; let a1 = 3; let a2 = 3; let valoutput = 0; 
let a4= 3; let outp1= 1; let outp2= 5; let plus= 0; let min = 3; let active = false;
let selectimage = 0; var urlimage = ""; let nextline= 4;
const aritem=['item2','item3','item4','item1'];

//thumbnail.appendChild(thumbnailItems[0]);**

var wtn = 650; var x = 50; var remwtn = 650;

//let thumbnailItem = document.querySelectorAll('.thumbnail .item');***
//let thumbminiItem = document.querySelectorAll('.thumbmini .item');
for(let i=0; i<1; i++){
	//var c = document.createElement('canvas');
	//var img0 = document.getElementById('output_image2'); let res = img0;
	//let spt = res.split("base64,")[1]; //alert('image : ' + spt);
	//c.width = img0.naturalWidth; c.height = img0.naturalHeight;
	//var ctx = c.getContext('2d'); ctx.drawImage(img0,0,0,c.width,c.height); var base64String = c.toDataURL();

	/*var img1 = document.getElementById('output_image3');
	c.width = img1.naturalWidth; c.height = img1.naturalHeight;
	ctx = c.getContext('2d'); ctx.drawImage(img1,0,0,c.width,c.height); base64String = c.toDataURL();
	alert(base64String);
	
	var img2 = document.getElementById('output_image4');
	c.width = img2.naturalWidth; c.height = img2.naturalHeight;
	ctx = c.getContext('2d'); ctx.drawImage(img2,0,0,c.width,c.height); base64String = c.toDataURL();

	var img3 = document.getElementById('output_image1');
	c.width = img3.naturalWidth; c.height = img3.naturalHeight;
	ctx = c.getContext('2d'); ctx.drawImage(img3,0,0,c.width,c.height); base64String = c.toDataURL();*/


	//arraynext[i] = thumbnailItem[i];*** //arraynext2[i] = thumbminiItem[i]; a4 = a4 - 1;
	//arraynext[i] = thumbnailItem[i]; arraynext2[i] = thumbminiItem[i]; //a4 = a4 - 1;
	//arrayoutput[i] = 'output_image' + outp1; outp1 = outp1+1;*** //arrayoutput2[i] = 'output_mini' + outp1; //outp2 = outp2+1;
	arraynext[0] = item2; arraynext[1] = item3; arraynext[2] = item4; arraynext[3] = item1;
	arrayoutput[0] = 'output_image2'; arrayoutput[1] = 'output_image3'; arrayoutput[2] = 'output_image4'; arrayoutput[3] = 'output_image1';
	array[0] = "./image/pexels-brettjordan-825661.jpg"; array[1] ="./image/pexels-barfisch-pix-115740.jpg"
	array[2] = "./image/pexels-jonathanborba-2983101.jpg"; array[3] ="./image/pexels-shameel-mukkath-3421394-14731625.jpg";
	arrayprod[0] = 'local1'; arrayprod[1] = 'local2';arrayprod[2] = 'local3'; arrayprod[3] = 'local4'; countrows = 4;
}

document.getElementById('output_image0').onclick = function() {
	window.location.replace("Principale.html");
}

if(window.innerWidth <= 800){
				//vr = vr + 80; active = true;
				let textarea = document.getElementById('description1');
				nextprev.style.top = "50%"; nextprev.style.right = "10%"; nextprev.style.width = "250px";
				output_image1.style.width = "80" + "px"; output_image1.style.height = "90px";
				output_image2.style.width = "80" + "px"; output_image2.style.height = "90px";
				output_image3.style.width = "80" + "px"; output_image3.style.height = "90px";
				output_image4.style.width = "80" + "px"; output_image4.style.height = "90px";
				
				//arraynext[i].style.right = vr + "px"; 
				item4.style.right = "78px"; item3.style.right = "153px"; item2.style.right = "218px";
				item1.style.right = "20px";
				
				textarea.style.width = "220px"; textarea.style.height = "110px";
				//textarea2.style.width = "200px"; textarea2.style.height = "110px"; 
}

window.onresize = function(event){
	//alert("resizing !");
	//let textarea = document.querySelector('.thumbnail');
	let textarea = document.getElementById('description1');
	//let textarea2 = document.getElementById('description2');

	let vr0 = 20; let vr = 3;
	for(let i = 0; i < 4; i++){
		let imgarea = document.getElementById(arrayoutput[i]);
		if(window.innerWidth <= 800){
				active = true;
				//thumbnail.style.display = "inline-flex";
				//thumbnail.style.right = "2px";
				//thumbnail.style.gap = "0.5px";
				nextprev.style.top = "50%"; nextprev.style.right = "10%"; nextprev.style.width = "250px";
				imgarea.style.width = "80" + "px"; imgarea.style.height = "90px";
				
				arraynext[i].style.right = vr + "px"; vr = vr + 80;
				//item2.style.right = "105px"; item3.style.right = "205px"; item4.style.right = "255px";
				
				textarea.style.width = "200px"; textarea.style.height = "110px";
				//textarea2.style.width = "200px"; textarea2.style.height = "110px"; //alert(posw + "size");
		}else{
			 active = false;
			//thumbnail.style.gap = "20px"; thumbnail.style.right = "20px";
			//thumbnail.style.display = "flex";
			nextprev.style.top = "45%"; nextprev.style.right = "40%"; nextprev.style.width = "300px";
			imgarea.style.width = "150px"; x = 150; imgarea.style.height = "210px";
			
			arraynext[i].style.right = vr0 + "px"; vr0 = vr0 + 170;
			//item1.style.right = "20px"; item2.style.right = "320px"; item3.style.right = "620px"; item4.style.right = "920px";

			textarea.style.width = "510px";	textarea.style.height = "200px";
			//textarea2.style.width = "510px"; textarea2.style.height = "200px"; //alert(currentw.toString() + "normal");			
		}
	
	}

	//thumbnail.style.top = "100px";
	//thumbnail.style.left = "500px";
	//thumbnail.style.left = "50px"; alert("50XXXleft");
	//textarea.style.width = "100px";
	//textarea.style.width = "30px"; alert("50XXXsize");
	//let currentw = preview - window.innerWidth; preview = window.innerWidth;

	//var firstview = thumbnail.style.left; //var view1 = thumbnail.style.width;
	//var wt = ""; var wt2 = ""; //alert(w.length);
	//for(let i = 0; i<firstview.length; i++){
		//if(firstview[i]=='p'){
			//break;
		//}else{
			//wt = wt + firstview[i]; //alert(wt);
		//}
	//}
	//var wtn = Number(wt); var x = 150; //alert(wt); alert(wt2);
	//var wtn = 650; var x = 150; var remwtn = 650; //alert(wt); alert(wt2);
}

// Function for next button 
nextBtn.onclick = function() {
    //moveSlider('next')
	moveThumbnail('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    //moveSlider('prev')
	moveThumbnail('prev')
}

sendBtn.onclick = function() {
    //sendMessage() //testMessage()
	fetchBlob()
}

let file = document.getElementById("files");
file.addEventListener('change',()=>{
	selectimage = 0; //alert('type : ' + file.files[0].type);
	if(file.files[0].type == 'image/jpeg'){
		modal.showModal(); //alert('message0 !');
	}else{
		alert('Veuillez inserer une image jpeg');
	}
});

const closeb = document.getElementById('close-button');
closeb.addEventListener('click',()=>{
	const nameprod = document.getElementById('new-product').value; modal.close(); testMessage(nameprod); //alert(nameprod);
});

/*let selectfile = document.getElementById("titleprod1");
selectfile.addEventListener('change',()=>{
	testMessage(); alert('message !'); selectimage = 1;
});

let selectfile2 = document.getElementById("titleprod2");
selectfile2.addEventListener('change',()=>{
	testMessage(); alert('message !'); selectimage = 2;
});*/

function reorderfn(thumb){
 	let a = 0;
	for(let i = 0; i<3; i++){
		arraynextprev[a] = arraynext[i+1]; a = a + 1; //arraynextprev2[a] = arraynext2[i+1];
		arraynext[i] = arraynextprev[a-1]; //arraynext2[i] = arraynextprev2[a-1]; //arrayprev[i] = arraynext[i];
	}
	arraynextprev[a] = thumb; arraynext[a] = thumb; //arraynext2[a] = thumb2;
	let vr0 = 20; //arraynext = arraynextprev; arrayprev = arraynextprev;
	for(let i = 3; i>=0; i--){
		arraynext[i].style.right = vr0 + 'px'; vr0 = vr0 + 170;
		//arraynext[i].classList.add('bar', aritem[i]);
	}
}

function reorderfp(thumb){
 	let a = 0;
	for(let i = 1; i<4; i++){
		arraynextprev[i] = arraynext[i-1]; //arraynextprev2[i] = arraynext2[i-1]; //a = a + 1;
		//arraynext[i] = arraynextprev[i]; arrayprev[i] = arraynext[i];
	}
	arraynextprev[0] = thumb; //arraynextprev2[0] = thumb2; //arrayprev[0] = thumb; arraynext[0] = thumb;
	for(let i = 0; i<4; i++){
		arraynext[i] = arraynextprev[i]; //arrayprev[i] = arraynext[i];
		//arraynext2[i] = arraynextprev2[i];
	}
	let vr0 = 530; //arraynext = arraynextprev; arrayprev = arraynextprev;
	for(let i = 0; i<4; i++){
		arraynext[i].style.right = vr0 + 'px'; vr0 = vr0 - 170;
		//arraynext[i].classList.add('bar', aritem[i]);
	}
}

function reordernamefn(output){
 	let a = 0;
	for(let i = 0; i<3; i++){
		arrayoutputnext[a] = arrayoutput[i+1]; a = a + 1; //arrayoutputnext2[a] = arrayoutput2[i+1];
		arrayoutput[i] = arrayoutputnext[a-1]; //arrayoutput2[i] = arrayoutputnext2[a-1]; //arrayprev[i] = arraynext[i];
	}
	arrayoutputnext[a] = output; arrayoutput[a] = output; //arrayoutput2[a] = output2;
	//arraynext = arraynextprev; arrayprev = arraynextprev;
}

function reordernamefp(output){
 	let a = 0;
	for(let i = 1; i<4; i++){
		arrayoutputnext[i] = arrayoutput[i-1]; //arrayoutputnext2[i] = arrayoutput2[i-1]; //a = a + 1;
		//arraynext[i] = arraynextprev[i]; arrayprev[i] = arraynext[i];
	}
	arrayoutputnext[0] = output; //arrayoutputnext[0] = output2; //arrayprev[0] = thumb; arraynext[0] = thumb;
	for(let i = 0; i<4; i++){
		arrayoutput[i] = arrayoutputnext[i]; //arrayoutput2[i] = arrayoutputnext2[i]; //arrayprev[i] = arraynext[i];
	}
	//arraynext = arraynextprev; arrayprev = arraynextprev;
}

function removethumb(type,thumb){
	if(type==0){
			//thumbnail.removeChild(arraynext[a1]); arraynext[a1] = thumb; arrayprev[a1] = thumb;
			//thumbnail.removeChild(arraynext[0]);***** //thumbmini.removeChild(arraynext2[0]);
			slider.removeChild(arraynext[0]);
			reorderfn(thumb);
	}else{
			//thumbnail.removeChild(arrayprev[a2]); arrayprev[a2] = thumb; arraynext[a2] = thumb;
			//thumbnail.removeChild(arraynext[3]);***** //thumbmini.removeChild(arraynext2[3]);
			slider.removeChild(arraynext[3]);
			reorderfp(thumb);		
	}
}


function resizethumb(output){
	if(active == false){
	   //alert(output);
	   let imgarea = document.getElementById(output); //let imgarea2 = document.getElementById(output2);
	   imgarea.style.width = "150px";
	   imgarea.style.height = "210px"; imgarea.style.borderRadius = "30px"; imgarea.style.boxShadow = "5px 0 15px rgba(0, 0, 0, 1)";
	   //imgarea2.style.width = "150px";
	   //imgarea2.style.height = "220px"; imgarea2.style.borderRadius = "50px"; imgarea2.style.boxShadow = "5px 0 15px rgba(0, 0, 0, 1)";
        }else{
	    //alert(output);
	    let imgarea = document.getElementById(output);
	    imgarea.style.width = "80px"; imgarea.style.height = "90px";
	    imgarea.style.borderRadius = "30px"; imgarea.style.boxShadow = "5px 0 15px rgba(0, 0, 0, 1)";
	}	
}


function DataURL(productname){
	let img2 = document.getElementById('output');
	valoutput = valoutput + 5; let res = productname; img2.src=res;
		//let img0 =document.createElement('img'); img0.src= res;
		//img0.setAttribute("id","output_image" + valoutput.toString());
		//thumbnail.appendChild(img0);
		let div; div = document.createElement('div'); div.setAttribute("id","output_div" + valoutput.toString());
		//div.textContent = number; //div.classList.add('bar', 'item1');  //rgb(255, 165, 0);
    		Object.assign(div.style, {
			width: 150 + 'px',
			height: 208 + 'px',
			position: 'absolute',
			top: 20 + 'px',
			right: 20 + 'px',
			background: 'url(' + res + ') center / cover',
			zIndex: '100'
    		})
		slider.appendChild(div); //div.appendChild(img0);
		//resizethumb("output_image" + valoutput.toString());*****************
		resizethumb("output_div" + valoutput.toString());
		//reordernamefn("output_image" + valoutput.toString());*****************
		reordernamefn("output_div" + valoutput.toString());
		//thumbnail.style.height = "200px"; thumbnail.style.width = "140px";*****
		//thumbnail.style.borderRadius = "100px";
		//var remwtn2 = remwtn + 60; thumbnail.style.right = "550" + "px";***** //resizethumb();
		slider.classList.add('next'); valnext = valnext + 1;
		if(test >= 4){
			removethumb(0,div); //resizethumb();
		}else{
			removethumb(0,div);
		}
			test = test + 1; 
	    		if(valoutput >= 625){
				valoutput = 0; //resizethumb();
	    		}
			if(plus == 4){
				plus = 0; //resizethumb();
	    		}
			//if(valnext == countrows){
				//valnext = -1;
			//}
			//valnext = valnext + 1;
}

function testMessage(productname){

		var urlsheet = 'https://script.google.com/macros/s/AKfycbzRp_0_O6e4zWQPIIWGpG3AWfHGR37IKLNtbuRhaOyVhsQM90ekh9ix8eFpy-7bp1i6/exec';
		//let thumbnailItems = document.querySelectorAll('.thumbnail .item'); //let file = document.getElementById('imx');
		//const filetext = new Blob([thumbnailItems[1]], { type: 'image/png' });
		//const myfile = new File([filetext], 'image.png',{type: Blob.png});
    // This line declares a variable called "img" and assigns it the value of the first image element on the page
    let img2 = document.getElementById('output');
	 let sliderItems = sliderList.querySelectorAll('.item');
	//let thumbnailItems = document.querySelectorAll('.thumbnail .item'); //img.src='http://localhost:49724/image/img4.png';
	//let textprod = document.querySelector("titleprod");
 
	//let file = document.querySelector("files");
        let fr = new FileReader();
        // This line adds an event listener to the "loadend" event of the FileReader object
        fr.addEventListener('loadend',()=>{
		//let img = document.getElementById('img'); 
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            let res = fr.result; alert('res : ' + res);
            // This line sets the "src" attribute of the "img" element to the value of "res"
	    //img2.src=res; ***********

		if(selectimage == 0){
			// This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            			let spt = res.split("base64,")[1];
            			// This line creates an object called "obj" with three properties: "base64", "type", and "name"
            		let obj = {
                		base64:spt,
                		type:file.files[0].type,
               			 name:file.files[0].name,
				Product:productname
            			}

	    		// This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
			
			fetch(urlsheet,{
                	method:"POST",
               		 body:JSON.stringify(obj)
            		})
            		// This line waits for the response from the server and converts it to text
            		.then(response => alert('Image envoyé !'))
            		// This line logs the response data to the console
            		.then(data=>console.log(data))

			countrows = countrows + 1; array[countrows - 1] = res; DataURL(res); displayprod();
		}					
        })
        // This line reads the selected file as a data URL
	if(selectimage == 0){
		fr.readAsDataURL(file.files[0]);
	}else{
		for(let i = 0; i < countrows; i++){
			if(productname == arrayprod[i]){
				DataURL(array[i]); break; //alert(arrayprod[i]);
			}
		}
	}
	slider.addEventListener('animationend', function() {
		slider.classList.remove('next')
        }, {once: true}) // Remove the event listener after it's triggered once   
	
}


function moveSlider(direction) {
    /*let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    //alert(sliderItems[0]);
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
	//ima.src = searchData[0]
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
	//imd.src = searchData[searchData.length - 1]
        slider.classList.add('prev')
    }*/


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

function testpage(type,imageurl){

    // This line declares a variable called "img" and assigns it the value of the first image element on the page
    let img2 = document.getElementById('output'); let bp = true;
	 let sliderItems = sliderList.querySelectorAll('.item');

         if(type == 1){
		valnext = valnext - 2;
		if(valnext - 3 < 0){
			valnext = 0; bp = false; alert('prev false!');
		}
	 }
 
	//let file = document.querySelector("files");
        let fr = new FileReader();
        // This line adds an event listener to the "loadend" event of the FileReader object
        //fr.addEventListener('loadend',()=>{
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            let res = array[valnext]; //fr.result;
            // This line sets the "src" attribute of the "img" element to the value of "res"
	    img2.src=res;
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let obj = {
                base64:spt,
                type:'image/png',
                name:'img1.png'
            }
	    //img=document.createElement('img');
		//img.src = src;
		//img =document.createElement('img'); img.src=res; //sliderList.appendChild(img);
		//img2.appendChild(img);
           //img2.setAttribute("src","https://drive.google.com/uc?id=1FJWFJF1q1cf-FwTWbsHCPi0rlP45tgRe");

	    if(type == 0){
		valoutput = valoutput + 5;
		//let img0 =document.createElement('img'); img0.src= res; //'./image/img3.png';
		//img0.setAttribute("id","output_image" + valoutput.toString());
		//thumbnail.appendChild(img0);
		let div; div = document.createElement('div'); div.setAttribute("id","output_div" + valoutput.toString());
		//div.textContent = number;
    		//div.classList.add('bar', 'item1')
    		//rgb(255, 165, 0)
    		Object.assign(div.style, {
			width: 150 + 'px',
			height: 208 + 'px',
			position: 'absolute',
			top: 20 + 'px',
			right: 20 + 'px',
			background: 'url(' + res + ') center / cover',
			zIndex: '100'
    		})
		slider.appendChild(div); //div.appendChild(img0);
		//resizethumb("output_image" + valoutput.toString());*****************
		resizethumb("output_div" + valoutput.toString());
		//reordernamefn("output_image" + valoutput.toString());*****************
		reordernamefn("output_div" + valoutput.toString());
		//thumbnail.style.height = "200px"; thumbnail.style.width = "140px";*****
		//thumbnail.style.borderRadius = "100px";
		//var remwtn2 = remwtn + 60; thumbnail.style.right = "550" + "px";***** //resizethumb();
		slider.classList.add('next');
		valnext = valnext + 1;
		if(test >= 4){
			removethumb(0,div); //resizethumb();
		}else{
			removethumb(0,div);
		}
		test = test + 1;
	    }else{
		//valnext = valnext - 2;
		if(bp == true){
		    let valnextprev = valnext - 3; valoutput = valoutput + 5;
		    		//let img0 =document.createElement('img'); img0.src= res; //'./image/img4.png';
				//img0.setAttribute("id","output_image" + valoutput.toString());
				//thumbnail.prepend(img0);
				let div; div = document.createElement('div'); div.setAttribute("id","output_div" + valoutput.toString());
				//div.textContent = number;
    				//div.classList.add('bar', 'item2')
    				//rgb(255, 165, 0)
    				Object.assign(div.style, {
      					width: 150 + 'px',
					height: 208 + 'px',
					position: 'absolute',
					top: 20 + 'px',
					right: 20 + 'px',
					background: 'url(' + array[valnextprev] + ') center / cover',
					zIndex: '100'
    				})
				slider.appendChild(div); //div.appendChild(img0);
				//resizethumb("output_image" + valoutput.toString());****************
				resizethumb("output_div" + valoutput.toString());
				//reordernamefp("output_image" + valoutput.toString()); ***************
				reordernamefp("output_div" + valoutput.toString());
				//thumbnail.style.height = "200px"; thumbnail.style.width = "140px";*****
				//thumbnail.style.borderRadius = "100px";
				//var remwtn2 = remwtn + 60; thumbnail.style.right = "550" + "px";***** 
				slider.classList.add('prev'); // slider.classList.add('next');
				valnext = valnext + 1;
				if(test >= 4){
					removethumb(1,div); //resizethumb();
				}else{
					removethumb(1,div); alert('preview !');
				}
				test = test + 1;
	    		}//else{
				//valnext = valnext + 2;
			//}
	    }	
	    
	    if(valoutput >= 625){
		valoutput = 0; //resizethumb();
	    }
	    //if(valnext == -1){
		//valnext = countrows-1;
	    //}
	    if(valnext == countrows){
		valnext = 0;
	    }   

        //})
        // This line reads the selected file as a data URL
        //fr.readAsDataURL(file.files[0]);
	//fr.readAsDataURL(array[valnext]);
	slider.addEventListener('animationend', function() {
            if(type == 0){
		slider.classList.remove('next')
	    }else{
		if(bp==true){
			slider.classList.remove('prev')
			//slider.classList.remove('next')
	    	}
	    }
        }, {once: true}) // Remove the event listener after it's triggered once
	
}

function moveThumbnail(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    //let thumbnailItems = document.querySelectorAll('.thumbnail .item');
    var url = array[valnext];
    
    //alert(sliderItems[0]);
    if(direction === 'next'){
        //sliderList.appendChild(sliderItems[0])
        //thumbnail.appendChild(thumbnailItems[0])
	testpage(0,url);
	//ima.src = searchData[0]
        //slider.classList.add('next');
    } else {
        //sliderList.prepend(sliderItems[sliderItems.length - 1])
        //thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
	testpage(1,url);
	//imd.src = searchData[searchData.length - 1]
        //slider.classList.add('prev');
    }


    /*slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once */
}

document.querySelectorAll('add').onclick = function() {
		src = 'C:\Users\tchado\Downloads\Compressed\Image-slider-using-HTML-CSS-JavaScript-main\Image-slider-using-HTML-CSS-JavaScript-main\image2\img1.png';
		let picture = document.querySelectorAll('.thumbnail .item');
		img=document.createElement('img');
		img.src = src;
		//document.body.appendChild(img); //testMessage(event);
}

// function to filter search results
      function filterResults(query) {
         return searchData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
      }
      
      // function to display search results
      function displayResults(results) {
         searchResults.innerHTML = '';
         results.forEach(result => {
            let li = document.createElement('li');
	    li.classList.add("list-items");
	    li.style.cursor = "pointer"; //li.style.marginLeft = "1px";
	    //li.addEventListener('hover', e => {
		//li.style.backgroundColor = "#000";
	    //});
            li.textContent = result;
            li.addEventListener('click', () => {
               searchInput.value = result;
               searchResults.innerHTML = '';
		selectimage = 1; testMessage(result); //alert('searchproduct !');
            });
            searchResults.appendChild(li);
         });
      }

// event listener for search input
searchInput.addEventListener('input', () => {
	
	//searchResults.style.right = "100px";
         let query = searchInput.value;
         if (query === '') {
            searchResults.innerHTML = '';
         } else {
            let results = filterResults(query);
            displayResults(results);
         } 
      });

// event listener to close search results when clicking outside the input and the results
      document.addEventListener('click', (event) => {
         let isClickInsideInput = event.target === searchInput;
         let isClickInsideResults = searchResults.contains(event.target);
         if (!isClickInsideInput && !isClickInsideResults) {
            searchResults.innerHTML = '';
         }
      });

function displayprod() {	

	for(let i = 0; i<countrows; i++){
		searchData[i] = arrayprod[i];
	}

	//alert('display terminer !');
}


function sendMessage() {
	let thumbnailItems = document.querySelectorAll('.thumbnail .item')
	const scriptURL = 'https://script.google.com/macros/s/AKfycbyXA8Iq2M3KzYB3uMWCYMYF9seSEr8yA8iHLzyj7ldnQz-NyV_YLMgffiHliIqdEbnkHw/exec';
            //const FD = new FormData(); //console.log('Success!', response) ... { Date: '123456', Email: 'test@email.com', Name: 'tchado2' }
            fetch(scriptURL, { method: 'POST', body: JSON.stringify({ Image: thumbnailItems[0], Numero: 'test@email.com', Name: 'tchado2' }) })
                .then(response => alert('Message envoyé !'))
                .catch(error => console.error('Error!', error.message))
}

async function fetchBlob()
{
		//url = "https://tchado495.github.io/testwebsocket/img3.png";
		//url = Itempics;
                //const Response = await fetch(url);
		
		let textarea = document.getElementById('description1').value; //let textarea2 = document.getElementById('description2').value;
		let msg = document.getElementById('email1').value; //let msg2 = document.getElementById('email2').value;

		let fr = new FileReader();
		
        	let urlsheet = "https://script.google.com/macros/s/AKfycbwTeJrJfJFskb_pJD-RkXa4ML_0hFMs7hRX13ry9aIt7GsQ2WoN6Yw_QM2ZZvER1zF2gA/exec";
		let varpair = valnext/2; var valtextarea = ""; var valmsg = "";
			valtextarea = textarea; valmsg = 'X'+msg; //alert('Message :' + valtextarea + '|' + valmsg);

	// This line adds an event listener to the "loadend" event of the FileReader object
        //fr.addEventListener('loadend',()=>{
            // This line declares a variable called "res" and assigns it the result of the FileReader object
            let res = array[valnext-1]; //alert('Message envoyé 0 !'); //let res = fr.result;
            // This line sets the "src" attribute of the "img" element to the value of "res"
            //img.src=res;
            // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
            let spt = res.split("base64,")[1];
            // This line creates an object called "obj" with three properties: "base64", "type", and "name"
            let obj = {
                base64:spt,
                type:'image/png',
                name:'img1.png',
		message: valtextarea,
		numeros: valmsg, 
		valeur: 'waiting'
            }
	    
            // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
            fetch(urlsheet,{
                method:"POST",
                body:JSON.stringify(obj)
            })
            // This line waits for the response from the server and converts it to text
            .then(response => alert('Message Texte+image envoyé !'))
            // This line logs the response data to the console
            .then(data=>console.log(data))
		
	    /*fetch(urlsheet,{
                method:"POST",
                body:JSON.stringify({name = "text", message = Itemtext[0].Text, numeros = ItemNumber[0].Text, valeur = "TRUE"})
            })
            // This line waits for the response from the server and converts it to text
            .then(response => alert('Message texte envoyé !'))
            // This line logs the response data to the console
            .then(data=>console.log(data))*/
 
        //})
        // This line reads the selected file as a data URL
	//const fileblob = await Response.blob();
        //fr.readAsDataURL(array[valnext-1])
                //return Response.blob();
}

function fetchRow(urlimage,imgname,nextline){
	//const Response = await fetch(urlimage);
			//const fileblob = await Response.blob(); 
			 alert("getrow : " + imgname);
			if(imgname == 'frites1') {
				array[0] = urlimage; arrayprod[0] = imgname;
			}else{
				if(imgname == 'biriyani1') {
					array[1] = urlimage; arrayprod[1] = imgname;
				}else{
					if(imgname == 'hamburger1') {
						array[2] = urlimage; arrayprod[2] = imgname;
					}else{
						if(imgname == 'pizza1') {
							array[3] = urlimage; arrayprod[3] = imgname;
						}else{
							array[nextline] = urlimage; //array[nextline] = fileblob; 
							arrayprod[nextline] = imgname; nextline = nextline + 1;
						}
					}
				}
			}			
			displayprod();
			if(nextline >= countrows-4){
				 startpage.close(); //alert("getrow end : " + imgname);
			}
}

async function getRow(){

	 let idrow = 2; //alert("Number_tr2 : " + countrows.toString());

	//var url = 'https://learned-midnight-zydeco.glitch.me/';
	var url = 'https://script.google.com/macros/s/AKfycbzRp_0_O6e4zWQPIIWGpG3AWfHGR37IKLNtbuRhaOyVhsQM90ekh9ix8eFpy-7bp1i6/exec';
	for (let line = 0; line < countrows; line++) {
		let idrows = idrow.toString(); //fetch('https://tchado495.github.io/testwebsocket/img3.png')
		fetch(url,{ method: 'POST', body: JSON.stringify({ id: idrows, name: 'tchado2', type : 'countrow' }) })		
            		.then(res => res.json())
            		.then(data => {
				
				//array02[nextline] = data.name; //array02[nextline] = "Produit" + nextline; 
				//array0[nextline] = data.url; //alert("url : " + fileblob);
				
				//const fileblob = data.blob();
				//fetchRow(array0[nextline],array02[nextline],nextline); nextline = nextline + 1;
				fetchRow(data.url,data.name,nextline);
                		
            		});
		idrow = idrow + 1;
	}

	//alert('getrow terminer 2 !'); //displayprod();

};

//getRow();


//https://drive.google.com/file/d/1tBZgPYZ2SCl3_BCCe2eg_svDSyZiFRK_/view?usp=drive_link
//"https://drive.google.com/file/d/File_ID/view?usp=share_link"
var url = 'https://script.google.com/macros/s/AKfycbzRp_0_O6e4zWQPIIWGpG3AWfHGR37IKLNtbuRhaOyVhsQM90ekh9ix8eFpy-7bp1i6/exec';

	fetch(url,{ method: 'POST', body: JSON.stringify({ id: '2', name: 'tchado2', type : 'countrow' }) })
	    .then(res =>  res.json())
            .then(data => {
			let tr = data.row; countrows = Number(tr) - 2; //alert("Number_tr_test : " + data.row);
			valnext = 4; getRow(); countrows = countrows + 4;
		});

startpage.showModal();
