/**
 * Created by mastermin on 17-7-6.
 */
//创建二叉树
function tree(left,node,right){
    this.left=left;
    this.node=node;
    this.right=right
}

function maketree(arr){
    if(arr.length===1){
        return new tree(null,arr[0],null)
    }
    else {
        return new tree(maketree(arr[0]),arr[1],maketree(arr[2]))
    }
}
var arry=[[['b'],'B',['c']],'A',[['e'],'C',['f']]];
console.log("***所得二叉树为:***");
console.log(maketree(arry));
console.log("-------------------------------------------------");
//中序遍历(l-m-r)
var two_tree=maketree(arry);

function* m_trav(t){
    if(t){
   yield* m_trav(t.left);
   yield t.node;
   yield* m_trav(t.right)
    }
}
var res=[];
for(var x of m_trav(two_tree)){
    res.push(x)
}
console.log(res);

//[ 'b', 'B', 'c', 'A', 'e', 'C', 'f' ];


//先序遍历(m-l-r)
function* l_trav(t){
    if(t){
        yield t.node;
        yield* l_trav(t.left);
        yield* l_trav(t.right)
    }
}
var res1=[];
for(var x of l_trav(two_tree)){
    res1.push(x)
}
console.log(res1);
//[ 'A', 'B', 'b', 'c', 'C', 'e', 'f' ]

//后序遍历(l-r-m)

function* r_trav(t){
    if(t){
        yield* r_trav(t.left);
        yield* r_trav(t.right);
        yield t.node;
    }
}
var res2=[];
for(var x of r_trav(two_tree)){
    res2.push(x)
}
console.log(res2);

//[ 'b', 'c', 'B', 'e', 'f', 'C', 'A' ]
