/*var plan1={
	
name: "Basic",
price: 3.99,
space: 100,
data: 1000,
pages: 10,
	
};

console.log(plan1.price);


//nesnelerden özellik silmek için kullanılır

delete plan1.name;


//eğer böyle bir özellij yoksa otomatık olarak nesneye özellik eklemiş oluyorum. 
plan1.duration=3;

console.log(plan1);



//özelliğin nesne içinde olup olmadığını test etmek için kullanılır. true or false
console.log("name" in plan1);*/






//nesne içinde nesne tanımlama.
//nesne içinde fonksiyon tanmlama

/*
var myHonda={
	
	color:"red",
	wheels:4,
	engine:{cylinders:4,
		   size:2.2},
	hp:[300,500,100],
	
	drive: function(){
	
	console.log("I am driving Honda");
}
};

console.log("My Honda engine size is: "+ myHonda.engine.size+ "and hp is :" + myHonda.hp[1]);

myHonda.drive();

*/


/*var plan1={
	
price:3.99,
space:100,
date:1000,
pages:10,
discountMonths:[7,8,12]

};

function calcAannual(percentDisc){
	var bestPrice=plan1.price;
	for(var i=0;i<plan1.discountMonths.length;i++)
		{
			if(plan1.discountMonths[i]==7||plan1.discountMonths[i]==8){
				bestPrice=plan1.price*percentDisc;
			}
		}
	return bestPrice;
}

var annualPrice=calcAannual(0.75);
console.log(annualPrice);*/



/*
var plan1={
	
price:3.99,
space:100,
date:1000,
pages:10,
discountMonths:[7,8,12],
	
 calcAnnual:function (percentDisc){
	var bestPrice=plan1.price;
	for(var i=0;i<plan1.discountMonths.length;i++)
		{
			if(plan1.discountMonths[i]==7||plan1.discountMonths[i]==8){
				bestPrice=plan1.price*percentDisc;
			}
		}
	return bestPrice;
}	

};



var annualprice=plan1.calcAnnual(0.8);
console.log(annualprice);*/

/*

var car={
	
	make: "Honda",
	model:"Civic",
	year:2000,
	coor:"red",
	mileage: 75000,
	started: false,
	start: function(){
		this.started=true;
	},

		stop: function(){
		this.started=false;
	},
	
	drive: function(){
		if(this.started){console.log("running")}
		else{console.log("start the engine first")}
	}
	
	
};


car.drive();
car.start();
car.drive();
car.stop();
car.drive();*/

// Task

/*var obj={
	Name: "Ali",
	lastName: "Aslantas",
	yearOfBirth: 1979,
	job:"none of your Business",
	isMarried:false,
	family: [],
	
	calculateAge: function(){
	  
		
		var age=2018-this.yearOfBirth;
		return age;
		
	} 
	
}

console.log(obj.Name);
console.log(obj.lastName);
console.log(obj.yearOfBirth);
console.log(obj.job);
console.log(obj.family);
console.log(obj.calculateAge());*/
//----------------------------------------

/*

var car={
	make:"Ford",
	model:"Mustang",
	year:1995,
	color:"black",
	mileage: 281413,
	
};



for (x in car){
	
	
	console.log(x+":"+ car[x]);
}
*/


//-------------------------------------------
//-------------------------------------------

/*var object1={
	a:1,
	b:2,
	c:3,
	
};

str=" ";
for(x in object1)
	{
		str+=object1[x];
		
	}
console.log(str);*/

//-------------------------------------------
//-------------------------------------------



//var car = {
//   
//    make:"Honda",
//    model:"Civic",
//    year:2000,
//    mileage:[35000,20000,10000],
//    started:false,
//    
//    start: function(){
//       this.started=true;
//    },
//    
//    drive:function(){
//        
//        if(this.started){
//            console.log("I am driving");
//        }else{
//            console.log("I am not driving");
//        }
//    }
//    
//};
//
//console.log(car.make);
//console.log(car.mileage[2]);
//
//car.year=2018;
//console.log(car);
//
//car.color="Red";
//console.log(car);
//
//delete car.color;
//console.log(car);
//
//car.start();
//car.drive();


//var car = {};
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//
//car.drive=function(){
//    console.log("Driving");
//}
//
//console.log(car);
//
//for(var pr in car){
//    console.log(car[pr]);
//}

//var car = new Object();
//car.make="Honda";
//car.model="Civic";
//car.mileage=20000;
//car.color="red";
//
//console.log(car);

//Construction Function
//function ID(name,lastName,age){
//    this.name=name;
//    this.lastName=lastName;
//    this.age=age;
//}
//
//var ID1=new ID("Mike","Smith",45);
//var ID2=new ID("John","Smith",35);
//var ID3=new ID("Ted","Smith",25);
//
//console.log(ID1.name + " " + ID1.age);
//console.log(ID2.name);
//console.log(ID3.name);

//Task
//Create a function construction named Rectangle that accepts 2 parameters: Width and Height
//Constructor should have a method that calculates and returns the area of the rectangle.
//Create different Rectangle objects and find the areas of them.

//function Rectangle(width,height){
//    this.width=width;
//    this.height=height;
//    this.area=function(){
//        return this.width * this.height;
//    }
//}
//
//var r=new Rectangle(10,20);
//console.log(r.area());
//
//var r1=new Rectangle(15,20);
//console.log(r1.area());
//
//var r2=new Rectangle(30,20);
//console.log(r2.area());


///////////////////////////////////////
/*
function Plan(name,price,space,transfer,pages,discountMonths){
    
    this.name=name;
    this.price=price;
    this.space=space;
    this.transfer=transfer;
    this.pages=pages;
    this.discountMonths=discountMonths;
    
    this.calcAnnual=function(percentOfDisc){
        var bestPrice=this.price;
        for(var i=0;i<this.discountMonths.length;i++){
            if(this.discountMonths[i]==7 || this.discountMonths[i]==8 || this.discountMonths[i]==12){
               bestPrice=this.price*percentOfDisc;
                break;
            }
        }
        
        return bestPrice*12;
    }
}


var p1=new Plan("Basic",3.99,100,1000,10,[7,8]);
var p2=new Plan("Professional",5.99,500,5000,50,[7,8,12]);
var p3=new Plan("Ultimate",9.99,2000,20000,500,[7,8]);

var annualPrice1=p1.calcAnnual(0.8);
console.log(annualPrice1);

var annualPrice2=p2.calcAnnual(0.8);
console.log(annualPrice2);


var annualPrice3=p.calcAnnual(0.8);
console.log(annualPrice3);


var month="July";

var month=["July","August"];*/
/*
//yukarı yuvarlama yapıyor.
var a=Math.round(2.60);//3
var a=Math.round(2.50);//3
var a=Math.round(2.60);//
var a=Math.round(2.49);//2
var a=Math.round(-2.49);//-2
var a=Math.round(-2.60);//-3

var a=Math.sqrt(0);//3
var a=Math.sqrt(1);//1
var a=Math.sqrt(64);//8
var a=Math.sqrt(-9);//0
var a=Math.sqrt(9);//3


//asagı yuvarlama yapıyor. ama en yakın değere
var a=Math.floor(0.60);//0
var a=Math.floor(0.40);//0
var a=Math.floor(5);//6
var a=Math.floor(-5.1);//-6
var a=Math.floor(-5.9);//6
var a=Math.floor(5.1);//5


var a=Math.ceil(0.60);//1
var a=Math.ceil(0.40);//1
var a=Math.ceil(5);//5
var a=Math.ceil(-5.1);//-5
var a=Math.ceil(-5.9);//-5
var a=Math.ceil(5.1);//6

var Math.random(); //0 ile 1 arasından deger dndürür
var Math.random()*10+1;//1 ile 10 arasından deger dndürür
var Math.random()*100+1;//0 ile 1 arasından deger dndürür*/
var a=Math.random() * (5 - 1)+ 1;
//Math.random() * (max - min) ) + min







//ASSIGNMENT20