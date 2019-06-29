//联合类型
let myFavoriteNumber: string | number;
//接口定义
//定义了一个接口 Person，接着定义了一个变量 Man，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
interface IPerson{
    readonly id: number;
    name: string;
    age?: number;
    [index: number]: number;//数组
    [propName: string]: any;
}

let man:IPerson={
    id:12,
    name:"wang",
    age:15
}

//数组类型
let arrDemo1:number[]=[1,2]
let arrDemo2:Array<number>=[1]
//函数类型
function getData1(data:string): object | any{
    return {}
}

let getData01:(x:string,y?:string) => any =function(x:string,y){
    return x+y;
}


//接口+函数
interface IGetData{
    (x:string,y:string): object | any
}


let getData2:IGetData  =function (x:string,y:string){
  return {}
}


//联合类型断言
let str:string|number;
(<string>str).length//断言成string类型





