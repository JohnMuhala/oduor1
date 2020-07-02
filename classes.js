class Person{
    constractor(name, age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return 'Hi. i am ${this.name'}
    }
}
var Person = Person("bob, 4o");
console.log(person1.getGreeting());

class Student extends person{
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    get info(){
        let description = super.getDescription();
        description += 'and the major is $ {this.major';
        
    }

}