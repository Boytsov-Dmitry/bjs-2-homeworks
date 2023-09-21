function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = '';
    this.marks = [];
    this.excluded = '';
}

let student1 = new Student('Valli', 'male', 30);

let student2 = new Student("Артём", "мужской", 25);

let student3 = new Student('Grolli', 'male', 18);


Student.prototype.setSubject = function (subjectName) { 
    this.subject = subjectName;
}

student2.setSubject("Geometry");

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.hasOwnProperty('marks') === true) {
        this.marks.push(...marksToAdd)
    }
}

student2.addMarks();

Student.prototype.getAverage = function () {
    if(this.hasOwnProperty('marks') === true) {
        return this.marks.reduce((acc, item, index, marks) => acc + item / marks.length, 0)  
    } else {
        return 0
    }
}

console.log(student1.getAverage())

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }

  student2.exclude('плохая учёба')
