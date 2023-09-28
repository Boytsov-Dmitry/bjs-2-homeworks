class PrintEditionItem { 
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    };

    set state(result) {
        if (result < 0) {
          this._state = 0;
        } else if (result > 100) {
          this._state = 100;
        } else {
            this._state = result;
        }
      }
    
      get state() {
        return this._state;
      } 
}

let sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
   );

   class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    type = "book";
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective"; 
    
}

class Library {
    constructor (name) {
        this.name = String(name);
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const search = this.books.find(item => item[type] === value)
        return search || null
    }


    giveBookByName(bookName) {
        const findBookIndex = this.books.findIndex(item => item.name === bookName)

        if(findBookIndex === -1) {
            return null
        }

        return this.books.splice(findBookIndex, 1)[0];
    }
}


class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }


    addMark(mark, subject) {
        if(mark > 5 || mark < 2) {
            return; 
        }

        if(this.marks.hasOwnProperty(subject) === false) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark)
    }

    getAverageBySubject(subject) {
        if(this.marks.hasOwnProperty(subject) === false) {
            return 0;
        }
        
        return this.marks[subject].reduce((acc, item, index, arr) => acc + item / arr.length, 0);
    }

    getAverage() {
        let subjects = Object.keys(this.marks)
        if(subjects.length === 0) {
            return 0
        }
        return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / subjects.length
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(0, "математика");
student.addMark(3, "математика");
student.addMark(10, "математика");
student.addMark(7, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75