class BST {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  insert(value){
   if(value === null) {
     return false;
   } 
    
   if(value < this.value){
    if(!this.left) {
      this.left = new BST(value);
    } else {
     this.left.insert(value); 
    }
   }
    
   if(value > this.value){
    if(!this.right) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
   }
    
  }
  
  contains(value){ 
    if (value === this.value){
      return true;
    } else if (value < this.value){
      // left side
     if(!this.left){
      return false; 
     } else {
      return this.left.contains(value); 
     }
    } else if (value > this.value){
      // right side
     if(!this.right){
      return false; 
     } else {
      return this.right.contains(value); 
     }
    }
  }
  
   validateTree(min=null, max=null){
    if(max !== null && (this.value > max)) {
    return false;
    }
    
    if(min !== null && (this.value < min)) {
    return false;
    }
    
    if(this.left && !this.left.validateTree(min, this.value)) {
    return false;
    }
    
    if(this.right && !this.right.validateTree(this.value, max)) {
    return false;
    }
    
    return true;
   }
  
}

let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


let test = bst.contains(10);
console.log(test);

