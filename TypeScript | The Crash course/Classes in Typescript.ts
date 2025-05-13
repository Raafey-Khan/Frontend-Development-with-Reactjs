class Student{
    name: string;
    studentID: number | undefined;
    eligibility: boolean;

    constructor(name:string, studentID:number, eligibility:boolean){
        this.name = name;
        this.studentID = studentID; 
        this.eligibility = eligibility;
    }

    display() : void {
        console.log('Student name is', this.name, 'and ID is', this.studentID, 'and the eligibility is', this.eligibility);
    }
}

const student = new Student('Raafay', 22, true);

console.log(student);