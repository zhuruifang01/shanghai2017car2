

var G2data={data:
		{
		connectionRate:90,//接通率
		callDropRate:0.2,//掉话率
		availability:92.8,//可用率
		//时间段
		sdates:["22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
		//利用率
		PRBRates:[10.83,10.61,10.3,10.08,9.96,9.92,9.89,9.92,10.04],
		//流量
		flows:[3569.27,3297.68,2365.43,1518.71,999.87,694.57,562.34,630.4,1058.78],
		//话务量
		traffic:[ 3569.2,3297.6,2365.4,1518.7,999.8,694.5,562.3,630.4,1058.7],
		
		//话务量下钻数据,总共9个(数量按照一次传输的数据来定，每个数组对应当前返回数据的每个时间段)，每个数组里面再嵌套一个数组，
		//再次分为若干单位，每个单位是一个json{},包含地址名和展示数据。目前暂定只有话务量有下钻，如果其他有需要加下钻，再添加一个属性，格式和这个一样。
		
		PRBArray:[[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			],
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] 
			,[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] 
			,[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			],
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] 
			
		]//下钻大数组
		
		}
}








//3G数据

var G3data={data:
		{
		connectionRate:93,//接通率
		callDropRate:0.3,//掉话率
		availability:93,//可用率
		//时间段
		sdates:["22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
		//利用率
		PRBRates:[10.83,10.61,10.3,10.08,9.96,9.92,9.89,9.92,10.04],
		//流量
		flows:[3569.27,3297.68,2365.43,1518.71,999.87,694.57,562.34,630.4,1058.78],
		//话务量
		traffic:[ 3569.2,3297.6,2365.4,1518.7,999.8,694.5,562.3,630.4,1058.7],
		
		PRBArray:[[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			],
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] 
			,[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] 
			,[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			],
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] ,
			[  
			{
				name:"下钻1",PRBRate:16.82
		 	} , 
			{
				name:"下钻1",PRBRate:16.82
		 	} ,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			,
				{
				name:"东广场出入口",PRBRate:16.82
		 	}
			] 
			
		]//下钻大数组
		
		}
}





//4G数据

var G4data={data:
		{
		connectionRate:94.7,//接通率
		callDropRate:0.413,//掉话率
		availability:94.9,//可用率
		//时间段
		sdates:["22:00", "23:00", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
		//利用率
		PRBRates:[10.83,10.61,10.3,10.08,9.96,9.92,9.89,9.92,10.04],
		//流量
		flows:[3569.27,3297.68,2365.43,1518.71,999.87,694.57,562.34,630.4,1058.78]
		}
}

$.ajax({
	type:"post",
	url:"http://127.0.0.1:8080/lt/4G/leftTimeData",
	async:false,
	contentType:'application/json;charset=utf-8',
	success:function(data){
		G4data=JSON.parse(data).data
	},
	error:function(e){
		console.log(e)
	}
});
$.ajax({
	type:"post",
	url:"http://127.0.0.1:8080/lt/3G/leftTimeData",
	async:false,
	contentType:'application/json;charset=utf-8',
	success:function(data){
		G3data=JSON.parse(data).data
	},
	error:function(e){
		console.log(e)
	}
});

$.ajax({
	type:"post",
	url:"http://127.0.0.1:8080/lt/2G/leftTimeData",
	async:false,
	contentType:'application/json;charset=utf-8',
	success:function(data){
		G2data=JSON.parse(data).data
	},
	error:function(e){
		console.log(e)
	}
});
//var G2dataAA=[3569,3297,2365,1518,999,694,564,632,1058]
//var G2dataAA=[3,3,5,8,9,9,6,2,1]
//var Hcoluarr2= [{ name:'流量',data: G2data.data.flows}];


//数据合为一个大数组；分别为2 3 4G的数据。数组每一项是json对象。每个对象包含
//	connectionRate接通率  为数字
//	callDropRate掉话率  为数字
//	availability可用率  为数字
//	sdates  时间段数组  每一项是字符串
//	PRBRates  利用率数组  每一项数字
//	flows  流量数组  每一项数字
//	traffic  话务量数组  4G没有话务量
//	话务量数组格式
//	[{ name: '话务量',
//	   colorByPoint: true, 
//	   data:[
//	   		{
//          name: 'name1',
//          y: 333,
//          drilldown: 'name1'
//			}
//	   ]
//	}]
//	
//	话务量数组格式下钻数组格式
//	[{
//      name: 'name1',
//      id: 'name1',
//      data: [ //下钻进去每一项名字和数据
//          [
//              '4.1H场馆',//下钻单位name
//              16
//          ],
//          [
//              '4.1H场馆',
//              17
//          ],
//          [
//              '4.1H场馆',
//              8.
//          ],
//          [
//              '4.1H场馆',
//              5.33
//          ],
//          [
//              '4.1H场馆',
//              1.06
//          ],
//          [
//              '4.1H场馆',
//              0.5
//          ]
//      ]
//  }]
//	
	
var newbigDataarr=[{},{},{}];
	//G2数据合并
	newbigDataarr[0].jietong = G2data.data.connectionRate
	newbigDataarr[0].diaohua = G2data.data.callDropRate
	newbigDataarr[0].keyong = G2data.data.availability
	newbigDataarr[0].timearr = G2data.data.sdates
	newbigDataarr[0].liyonglv  = G2data.data.PRBRates    
	//newbigDataarr[0].liuliang  = G2data.data.flows
	newbigDataarr[0].liuliang = [{colorByPoint:true,colors:['#92cbf7', '#68b6f3', '#48a7f2', '#2b98f0', '#288ae2', '#2278cf'],data: G2data.data.flows}]
	newbigDataarr[0].huawuliang  = [{
		name: '话务量',
	   	colorByPoint: true, 
//	   	data:[
//	   		{
//          name: G2data.data.sdates[0],
//          y: G2data.data.traffic[0],
//          drilldown: G2data.data.sdates[0]
//			}
//	   	]
	}]
	newbigDataarr[0].huawuliang = addHualiangdata(G2data,newbigDataarr[0].huawuliang)
	
	newbigDataarr[0].xiazuandata=[];
	newbigDataarr[0].xiazuandata = addhualiangxiazuandata(G2data,newbigDataarr[0].xiazuandata)
	
	//G3数据合并
	newbigDataarr[1].jietong = G3data.data.connectionRate
	newbigDataarr[1].diaohua = G3data.data.callDropRate
	newbigDataarr[1].keyong = G3data.data.availability
	newbigDataarr[1].timearr = G3data.data.sdates
	newbigDataarr[1].liyonglv  = G3data.data.PRBRates    
	//newbigDataarr[0].liuliang  = G2data.data.flows
	newbigDataarr[1].liuliang = [{ colorByPoint:true,colors:['#92cbf7', '#68b6f3', '#48a7f2', '#2b98f0', '#288ae2', '#2278cf'],data: G3data.data.flows}]
	newbigDataarr[1].huawuliang  = [{
		name: '话务量',
	   	colorByPoint: true, 
//	   	data:[
//	   		{
//          name: G2data.data.sdates[0],
//          y: G2data.data.traffic[0],
//          drilldown: G2data.data.sdates[0]
//			}
//	   	]
	}]
	newbigDataarr[1].huawuliang = addHualiangdata(G3data,newbigDataarr[1].huawuliang)
	
	newbigDataarr[1].xiazuandata=[];
	newbigDataarr[1].xiazuandata = addhualiangxiazuandata(G3data,newbigDataarr[1].xiazuandata)
	
	
		//G4数据合并
	newbigDataarr[2].jietong = G4data.data.connectionRate
	newbigDataarr[2].diaohua = G4data.data.callDropRate
	newbigDataarr[2].keyong = G4data.data.availability
	newbigDataarr[2].timearr = G4data.data.sdates
	newbigDataarr[2].liyonglv  = G4data.data.PRBRates    
	//newbigDataarr[0].liuliang  = G2data.data.flows
	newbigDataarr[2].liuliang = [{ colorByPoint:true,colors:['#92cbf7', '#68b6f3', '#48a7f2', '#2b98f0', '#288ae2', '#2278cf'],data: G4data.data.flows}]
	
	
	
	
	
	
	//给新数据添加话务量数据
	function addHualiangdata(obj,newobj){
		newobj[0].data=[]
		for(var i=0;i<obj.data.sdates.length;i++){
			newobj[0].data[i]={};
			newobj[0].data[i].name=obj.data.sdates[i]+""
			newobj[0].data[i].y=obj.data.traffic[i]
			newobj[0].data[i].drilldown=obj.data.sdates[i]+""
		}
		return newobj;
	}
	//新数据添加话务量下钻数据
	function addhualiangxiazuandata(obj,newobj){
		for(var i=0;i<obj.data.PRBArray.length;i++){
			newobj[i]={}
			newobj[i].name = obj.data.sdates[i]+""
			newobj[i].id = obj.data.sdates[i]+""
			newobj[i].data =[]
			for(var j=0;j<obj.data.PRBArray[i].length;j++){
				newobj[i].data[j]=[];
				newobj[i].data[j][0] = obj.data.PRBArray[i][j].name
				newobj[i].data[j][1] = obj.data.PRBArray[i][j].PRBRate
			}
		}
		return newobj
	}
