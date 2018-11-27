let color = {white: 'white', grey: 'grey', black: 'black'}
let checkNodes = {};
let level = {};


//find the number de floors
//with recursive
function bfs(Graph, node, checkNodes, level){
    var queue = [];
    queue.push(node);
    if(!level.hasOwnProperty(node))
        level[node] = 0;
    while(queue.length > 0){
        var s = queue.shift();
        checkNodes[s] = color.black;
        var children = Graph[s];
        for(var i = 0; i < children.length; i++){
            var child = children[i];
            if(!checkNodes.hasOwnProperty(child))
                checkNodes[child] = color.grey,
                    level[child] = level[s]+1,
                        level = bfs(Graph, child, checkNodes, level);
            else if(checkNodes[child] == color.grey)
                checkNodes[child] = color.black;
        }
    }
    return level;
}

//find the number de floors
//without recursive
function bfs(Graph, node, checkNodes, level){
    var queue = [];
    queue.push(node);
    checkNodes[node] = color.grey;
    if(!level.hasOwnProperty(node))
        level[node] = 0;
    while(queue.length > 0){
        var s = queue.shift();
        checkNodes[s] = color.black;
        var children = Graph[s];
        for(var i = 0; i < children.length; i++){
            var child = children[i];
            if(!checkNodes.hasOwnProperty(child)){
                queue.push(child),
                    checkNodes[child] = color.grey,
                        level[child] = level[s]+1;
            }else if(checkNodes[child] == color.grey)
                checkNodes[child] = color.black;
        }
    }
}
