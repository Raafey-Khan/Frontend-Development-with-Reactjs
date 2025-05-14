type pairOfNumberss = [any, any];
type pairOfNumbersAndStrings = [number, string];


function linearSearch<T, R>(array : T[], x: T, y: R) : [number, T]{
   for(let i = 0; i < array.length; i++){
    if (array[i] == x) return [i, array[i]];

   } 
   console.log(y)
   return [-1, x];
}

const arrays : number[] = [1,2,3,4,5,6,7,8,9];

console.log(linearSearch<number,string>(array, 4, "abc"))


const stringArrays : string[] = ["abc", "def", "ghi", "jk"];
console.log(linearSearch<string, number>(stringArray, "def", -2))


class Stack<T> {
   private array : T[];
   constructor() {
      this.array = []
    
   }
   push(x: T) : void {
      this.array.push(x);
   }

   pop() : void {
      this.array.pop();
   }
   top() : T {
      return this.array[this.array.length - 1]
   }
   display(): void {
      console.log(this.array);
   }
}

const st = new Stack<number>();

st.push(1);
st.push(2);
st.push(3)
st.display();

// you can define <T> everywhere where you need to define type
// and when you are going to call the function
// at that time you define that type value string or number or boolen amazing


// you can define generics name from A to Z and also multiple
// generics you can use by using , commas
