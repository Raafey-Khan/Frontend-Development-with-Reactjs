class Student{
    name: string;
    private studentID: number | undefined;
    readonly category: string; // the moment you add readonly you can update from outside
    // by using getters and setters also you will not able to updated it
   
   // just like const variable cannot be reassigned
//    readonly variable cannot be reassigned

// the same way const behave 
// the same way readonly behave in classes ts

readonly tags: string[];

    constructor(name:string, category:string ,studentID:number){
        this.name = name;
        this.category = category;
        this.studentID = studentID; 
        this.tags = ['electronics', 'mobile']
    
    }

    display() : void {
        this.tags[0] = "something"
        console.log('Student name is', this.name, 'and ID is', this.studentID);
    }

    // Implementing getters and setters 
    // to control access modification

    setId(id:number) : void {
        if(id <= 0) return;
        this.studentID = id;
    }


    buggyFunction() : void {
        this.category = "";
    }
}

const student = new Student('Raafay', 'student',22);
student.setId(99);
const arr = [10, 20];
arr[0] = 0;
student.buggyFunction()
console.log(student);
