	//补零
function zero(n){
  	if(n<10 || n.length<2){
			return "0"+n;
	}else{
			return  ""+n;
			}
}
	
	
	//我的时间
function myDate(){ 																							//时间格式化
			var d=new Date();
			var y=d.getFullYear();
			var m=d.getMonth();
			var tian=d.getDate();
			var week=d.getDay();
			var h=d.getHours();
			var miu=d.getMinutes();
			var sec=d.getSeconds();
			
			switch(week){
				case 0:  week= "星期日"; break;
				case 1:  week="星期一";  break;
				case 2:  week="星期二";  break;
				case 3:  week="星期三";  break;
				case 4:  week="星期四";  break;
				case 5:  week="星期五";  break;
				case 6:  week="星期六";  break;
			}
		   return  y+"年"+zero(m+1)+"月"+zero(tian)+"日"+" "+week+" "+zero(h)+":"+zero(miu)+":"+zero(sec)
 }
		//两个日期之间有多少天
	function dayMinus(o,n){																				//计算两个日期之间相差多少天
			if(o.split("/").length==3 || n.split("/").length==3){
				var oarr=o.split("/");
				var narr=n.split("/");
			}else if(o.split("-").length==3 || n.split("-").length==3){
				var oarr=o.split("-");
				var narr=n.split("-");
			}else if(o.split(".").length==3 || n.split(".").length==3){
				var oarr=o.split(".");
				var narr=n.split(".");
			}
		var odate= new Date()
			odate.setFullYear(oarr[0]);
			odate.setMonth(oarr[1]-1);
			odate.setDate(oarr[2]);
			
		var ndate=new Date();
			ndate.setFullYear(narr[0]);
			ndate.setMonth(narr[1]-1);
			ndate.setDate(narr[2]);
			
		return Math.abs((ndate-odate)/1000/60/60/24);
	}
		
//数组的排序和去重和取最小值

var myArr={
	order:function(n){																							//数组的排序
		for(var i=0; i<n.length; i++){
				for(var j=0; j<n.length; j++){
					if(n[j]>n[j+1]){
						var ls=n[j];
						n[j]=n[j+1];
						n[j+1]=ls;
					}
				}
			}
			return n;
	},
	norepeat:function(n){																						//数组的去重
			var newArr=[];
			for(var i=0; i<n.length; i++){
				if(newArr.indexOf(n[i])==-1){
					newArr.push(n[i])
				}
			}
			return newArr;
	},
	getmin:function (arr){																					//取数组的最小值
			var marr=[];
			for(var i=0 ; i<arr.length; i++){
				marr[i] = arr[i];
			}
			return myArr.order(marr)[0];
	}
}
// 随机16进制颜色
function randomColor(){
	var r = Math.round(Math.random()*255).toString(16)
	var b = Math.round(Math.random()*255).toString(16)
	var g = Math.round(Math.random()*255).toString(16)
	return  "#" + zero(r) +zero(b) +zero(b)
}

//范围随机数
function myRandom(a,b){
				return Math.round(Math.random()*(a-b)+b)
			}





//   监听事件创建和删除
var myEvent={
			add:function (ele,myEvent,fn){															//创建事件监听，传参：元素，事件，要执行的事件或者句柄
				if(ele.addEventListener){
					ele.addEventListener(myEvent,fn,false);
				}else if(ele.attachEvent){
					ele.attachEvent("on"+myEvent,fn);
				}else{
					ele["on"+myEvent]=fn;
				}
			},
			remove:function (ele,myEvent,fn){														//删除事件监听  传参，元素，事件，和句柄
				if(ele.addEventlistener){
					ele.removeEventListener(myEvent,fn);
				}else if(ele.detachEvent){
					ele.detachEvent("on"+myEvent,fn);
				}else{
					ele["on"+myEvent]=null;
				}
			}
		}

//阻止默认事件兼容写法
function stopDefault(e){																			//阻止默认事件兼容写法
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

//阻止冒泡兼容写法

function stopBubble(e){																				//阻止冒泡兼容写法
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble=true;
	}
}

//Cookie的封装
var  myCookie={																						
		set:function(key,value,day){																//添加Cookie     传参：key,value和有效期
			var d=new Date();
			d.setDate(d.getDate()+day)
			document.cookie=key+"="+value+";expires="+d;
		},
		remove:function(key){																		//删除Cookie   传参：key
			myCookie.set(key,null,-1)
		},
		get:function(key){																				//获得Cookie的value     传参：key
			var str=document.cookie.split("; ")	
			for(var i=0;i<str.length; i++){
			if(str[i].split("=")[0]==key){
				return str[i].split("=")[1]
				}
			}
			return null
		}
}

//运动函数，一个元素，一个对象，一个函数


 			function myMove(ele,json,fn){
						clearInterval(ele.timer)
						
						ele.timer = setInterval(()=>{
						onOff = true;
						for(var arrs in json){
							if(arrs == "opacity"){
								var iNow = getStyle(ele,arrs)*100
							}else{
								var iNow = parseInt(getStyle(ele,arrs))
							}
							var speed = (json[arrs] - iNow)/8;
							speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
							if(json[arrs] != iNow)  onOff = false ;
							if(arrs == "opacity"){
								ele.style.opacity = (iNow +speed) / 100;
								ele.style.filter = "alpha(opacity="+(iNow+speed)+")"
							}else{
								ele.style[arrs]= iNow + speed +"px";
							}
						}
						if(onOff){
							clearInterval(ele.timer)
							
							if(fn){
								fn();
							}
						}
					},30)
				}
		 
//获取元素非行内元素样式，一个元素，一个key 
		 function getStyle(ele,attr){																					//获取非行内样式，传参：元素和key
		 	if(ele.currentStyletyle){
		 		return ele.currentStyle[attr]
		 	}else{
		 		return getComputedStyle(ele,false)[attr]
		 	}
		 }
		 
//时间委托   ,传参  需要委托的元素和需要委托的事件
function eventEnturst (ele,callback){																	//事件委托：传参，元素，要执行的函数（可配合事件监听）
				return function(eve){
					
				var e = eve || window.event;
				var target = e.target || e.srcElement;
				for(var i=0 ;i<ele.length; i++){
					if(target==ele[i]){
						callback.bind(target)()
					}
				}
				}
			}

var arrLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var json=[																									//图片的json
			{src:"../images/yang01.jpg"},
			{src:"../images/yang02.jpg"},
			{src:"../images/yang03.jpg"},
			{src:"../images/yang04.jpg"},
			{src:"../images/yang05.jpg"},
			{src:"../images/yang06.jpg"},
			{src:"../images/yang07.jpg"},
			{src:"../images/yang08.jpg"},
			{src:"../images/yang09.jpg"},
			{src:"../images/yang10.jpg"},
			{src:"../images/yang11.jpg"},
			{src:"../images/yang12.jpg"},
			{src:"../images/yang13.jpg"},
			{src:"../images/yang14.jpg"},
			{src:"../images/yang15.jpg"},
			{src:"../images/yang16.jpg"},
			{src:"../images/yang17.jpg"},
			{src:"../images/yang18.jpg"},
			{src:"../images/yang19.jpg"},
			{src:"../images/yang20.jpg"},
			{src:"../images/yang21.jpg"},
			{src:"../images/yang22.jpg"},
			{src:"../images/yang23.jpg"},
			{src:"../images/yang24.jpg"},
			{src:"../images/yang25.jpg"},
			{src:"../images/yang26.jpg"},
			{src:"../images/yang27.jpg"},
			{src:"../images/yang28.jpg"},
			{src:"../images/yang29.jpg"},
			{src:"../images/yang30.jpg"},
			{src:"../images/yang31.jpg"},
			{src:"../images/yang32.jpg"},
			{src:"../images/yang33.jpg"},
			{src:"../images/yang34.jpg"},
			{src:"../images/yang35.jpg"},
			{src:"../images/yang36.jpg"},
			{src:"../images/yang37.jpg"},
			{src:"../images/yang38.jpg"},
			{src:"../images/yang39.jpg"},
			{src:"../images/yang40.jpg"}
			
]
	
	
	//鼠标跟随   ，传参，一个大盒子，一个要移动的元素
	
function mouseFollow(ele,eleSon){																		//鼠标跟随  传参：父元素（外），子元素（要移动的子元素）
				return function(eve){																			//去配合鼠标移动事件
							var e = eve || window.event;
							var oI = document.createElement("i")
							var l = e.offsetX - eleSon.offsetWidth/2;
							var t = e.offsetY - eleSon.offsetHeight/2;
							var maxW = ele.offsetWidth - eleSon.offsetWidth;
							var maxH = ele.offsetHeight - eleSon.offsetHeight;
							if(l<0){l=0};
							if(t<0){t=0};
							if(l>maxW){l=maxW};
							if(t>maxH){t=maxH};
							oI.className = "cover";
							ele.appendChild(oI)
							eleSon.style.left = l +"px";
							eleSon.style.top = t +"px";
						}
			}

// 无限运动的小球     传参： 一个大盒子，一个小球，步长
function myBall(ele,ele2,speed){                           								//需要配合一个计时器
			var speedL=speed+10;
			return function(){
				var maxW = ele.offsetWidth - ele2.offsetWidth;
				var maxH = ele.offsetHeight - ele2.offsetHeight;
				
				ele2.style.left = ele2.offsetLeft + speedL +"px";
				ele2.style.top = ele2.offsetTop + speed + "px";
					//球的横向判定
					if(ele.offsetWidth - ele2.offsetLeft - ele2.offsetWidth <= speedL || ele2.offsetLeft < 0){
						if(ele.offsetWidth - ele2.offsetLeft - ele2.offsetWidth<= speedL ){
							ele2.style.left = maxW + "px";
						}else{
							ele2.style.left = 0;
							}
						speedL = - speedL;
						
					}
					//球的高度判定
				if(ele.offsetHeight - ele2.offsetTop - ele2.offsetHeight<=speed || ele2.offsetTop<0){
						if(ele.offsetHeight - ele2.offsetTop - ele2.offsetHeight<=speed){
							ele2.style.top = maxH + "px";
						}else{
							ele2.style.top = 0 ;
						}
						speed = - speed
					}
				}
			}


		//瀑布流
		function falls(ele){																								//传参：需要加载瀑布流的元素
			var aChild  = ele.children;
			var num = parseInt(ele.parentNode.offsetWidth / aChild[0].offsetWidth) 
			ele.style.width = aChild[0].offsetWidth * num +"px";                      //砖块盒子的宽度
			var minTopBrick = [];                                                                                    //瀑布流前排固定
			for(var i= 0 ; i< num ;i++){
				minTopBrick.push(aChild[i].offsetHeight);
			}
		
			for(var i=num ; i<aChild.length; i++){														//瀑布流排序
				var minTop = myArr.getmin(minTopBrick);
				var minIndex = minTopBrick.indexOf(myArr.getmin(minTopBrick))
				aChild[i].style.position = "absolute"
				aChild[i].style.top = minTop +"px";
				aChild[i].style.left =aChild[0].offsetWidth * minIndex +"px";
				minTopBrick[minIndex]  +=  aChild[i].offsetHeight
			}
		}


//圆周运动
//
//var circle = {
//				l:Math.round(Math.sin(Math.PI/180*30*i)*r + this.x),
//				r:Math.round(Math.cos(Math.PI/180*30*i)*r + this.y)
//			}