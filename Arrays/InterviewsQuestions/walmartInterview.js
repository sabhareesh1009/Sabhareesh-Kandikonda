Arr = [100, 50, 25, 65, 90]

Target: 140

Output: 1, 4

// O(N)
// O(N^2)
// A+B = target
B = target - A
 function twoNumSum(array, target) {
  let numObj = {};
  for(let i=0; i< array.length; i++) {
  const currentNum = target - array[i];
    if(numObj[currentNum] !== undefined) {
      return [numObj[currentNum], i];
    } else {
      numObj[array[i]] = i
    }
  }
}

const Arr = [100, 50, 25, 65, 90];
const target= 140
console.log(twoNumSum(Arr, target));

 
 
/*  Const q  = new Queue();
 q.enqueue(10)
 q.enqueue(12)
 q.enqueue(8)
 q.enqueue(16)
 q.dequeue() //
 10
 Stack 1, stack 2 */
 
 /* const queue = [];
 Function.prototype.enqueue = (elment) => {
   queue.push(elment)
 } */
 // stack1 [10, 12, 8, 16]
 // stack 2 [16, 8, 12, 10]
// ouput 10	
/*  function myQueue() {
 const stack1 = [];
 const stack2 = [];
 
 } */

 class StackQueue {
    constructor(queue) {
      this.queue = queue;
    }
    
    dequeue() {
      const stack2 = [];
      let lastValue = this.queue.pop();
      while(lastValue) {
              stack2.push(lastValue);
          lastValue = this.queue.pop();
      }
      const result = stack2.pop();
      lastValue = result
       while(lastValue) {
          lastValue = stack2.pop();
          if(lastValue)
              this.queue.push(lastValue);
      }
      return result
    }

    enqueue(n) {
      this.queue.push(n);
    }
   }
   
   const q = new StackQueue([]);
  console.log(q); 
   q.enqueue(2);
   q.enqueue(10)
   q.enqueue(12)
   q.enqueue(8)
   q.enqueue(16)
   console.log(q); 
   console.log(q.dequeue());
   console.log(q); 
   console.log(q.dequeue());
   console.log(q); 
   
   
   
   
   /* 1 1 1
   1 2
   2 1
   4 steps
   1 1 1 1
   1 2 1
   2 2
   2 1 1
   1 1 2
   3 steps - 3 ways
   4 steps - 5 ways
   5 steps ?
   6 steps ?
   N steps?
   Allowed that 1 step or 2 step at a time */
   
    // f(n) = f(1) + 
    // Javascript html css and problem solving(Arrays and strings) time complexity and space topics brute approach
    // 2questions
    // 2hr (1hr + 1hr) => nuvu company interview standerds



    // DOM manupulation Javascript css sematic HTML Problem solving(Arrays and Strings) time complexity and space complexity