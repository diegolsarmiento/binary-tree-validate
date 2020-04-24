class BST {
   
   constructor(){
    this.value = null;
    this.left = null;
    this.right = null;
   }
   
   validateTree(side, min=null, max=null){
    if(max !== null && (this.value > max)) {
    return false;
    }
    
    if(min !== null && (this.value < min)) {
    return false;
    }
    
    if(this.left && !validateTree(this.left, min, this.value)) {
    return false;
    }
    
    if(this.right && !validateTree(this.right, this.value, max)) {
    return false;
    }
    
    return true;
   }
}


// Example

  var example = {
    value: 15,
    left: {
      value: 10,
      left: {
        value: 8
      },
      right: {
        value: 12
      }
    },
    right: {
      value: 20,
      left: {
        value: 16
      },
      right: {
        value: 25
      }
    }
  };
  
  
let myTree = new BST ();

let myBSTValidation = Object.assign(myTree, example);

let search = myBSTValidation.validateTree(1,30);

console.log(search);
