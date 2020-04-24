class BST {
   
   constructor(){
    this.value = null;
    this.left = null;
    this.right = null;
   }
   
   validateTree(node, min=null, max=null){
    if(max !== null && (node.value > max)) {
    return false;
    }
    
    if(min !== null && (node.value < min)) {
    return false;
    }
    
    if(node.left && !validateTree(node.left, min, node.value)) {
    return false;
    }
    
    if(node.right && !validateTree(node.right, node.value, max)) {
    return false;
    }
    
    return true;
   }
}
