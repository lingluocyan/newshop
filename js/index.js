var a = {n:1}
var b = a
a.x = a = {n:2}
console.log(b)
console.log(a.x)
//a指向{n:1}这个堆
//b和a指向同一个堆
//.的优先级比=高，先计算a.x，在a指向的堆里添加一个x成员
//x默认是undefined,等待右面计算完毕后赋值
//a = {n:2} ,a指向新的堆{n:2},之前的堆由于b在使用所以没被回收，x赋值{n:2}
//此时b指向的堆里有{n:1,x:{n:2}}
//a新指向的堆里只有{n:2},所以a.x是undefined
//xx