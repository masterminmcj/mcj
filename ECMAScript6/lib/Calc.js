/**
 * Created by mastermin on 17-6-27.
 */
class Calc{
    constructor(){
        console.log('Calc constructor');
    }

    add(a,b){
        return a + b;
    }
}

var c = new Calc();
console.log(c.add(2, 3));
//5,通过traceur Calc.js编译得到
