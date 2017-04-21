
//数组3项，2G  3G  4G  每一项包含十个排名  top1-top10
var jietonglv=[[{name:"5%",callDropRate:"aaabb",xiaoqu:"hehe1"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"}
				],[
				{name:"5%",callDropRate:"aaac",xiaoqu:"hehe2"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"}
				],[
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"}
				],
				]

var diaohualv=[[{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"}
				],
				[{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"}
				],
				[{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"},
				{name:"5%",callDropRate:"aaa",xiaoqu:"hehe"}
				],
				]

// $.ajax({
// 	type:"post",
// 	url:"http://127.0.0.1:8080/lt/4G/topData",
// 	async:false,
// 	contentType:'application/json;charset=utf-8',
// 	success:function(data){
// 		diaohualv=JSON.parse(data).callDropRateArray
// 		jietonglv=JSON.parse(data).connectionRateArray
// 	},
// 	error:function(e){
// 		console.log(e)
// 	}
// });
function addtopdatafn(){
	foradd($('.G2spanjt1'),$('.G2spanjt2'),jietonglv[0])
	foradd($('.G3spanjt1'),$('.G3spanjt2'),jietonglv[1])
	foradd($('.G4spanjt1'),$('.G4spanjt2'),jietonglv[2])
	foradd($('.G2spandh1'),$('.G2spandh2'),diaohualv[0])
	foradd($('.G3spandh1'),$('.G3spandh2'),diaohualv[1])
	foradd($('.G4spandh1'),$('.G4spandh2'),diaohualv[2])
	fortopname()
	function fortopname(){
		var currenti;
		for(var i=0;i<$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").length;i++){
			if(i<10){//2G接通率名字
				$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").eq(i).html(jietonglv[0][i].xiaoqu)
			}else if(i>=10 && i<20){//2G掉线率名字
				currenti=i-10
				$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").eq(i).html(diaohualv[0][currenti].xiaoqu)
			}else if(i>=20 && i<30){//3G接通率名字
				currenti=i-20
				$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").eq(i).html(jietonglv[1][currenti].xiaoqu)
			}else if(i>=30 && i<40){//3G掉线率名字
				currenti=i-30
				$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").eq(i).html(diaohualv[1][currenti].xiaoqu)
			}else if(i>=40 && i<50){//3G接通率名字
				currenti=i-40
				$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").eq(i).html(jietonglv[2][currenti].xiaoqu)
			}else if(i>=50 && i<60){//3G掉线率名字
				currenti=i-50
				$(".rbbottomodyrollbox>.rbodylist>.tbd1>span:last-child").eq(i).html(diaohualv[2][currenti].xiaoqu)
			}
		}
	}
	
	function foradd(obj,obj1,arr){
		for(var i=0;i<arr.length;i++){
			obj.eq(i).html(arr[i].name)
			obj1.eq(i).html(arr[i].callDropRate)
		}
	}
}
