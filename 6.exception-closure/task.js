function parseCount(number) {
    if(isNaN(number)){
        throw new Error ('Невалидное значение')
    }
    
    return Number.parseFloat(number)    
}

parseCount('56.65')

function validateCount(number) {
    try {
        return parseCount(number)
    } catch (error) {
        return error;
    }
}

validateCount('gsdf')

class Triangle {
    constructor (a, b ,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if (a > (b + c) || b > (c + a) || c > (b + a)) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
    };

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let halfP = this.perimeter * 0.5
        return Number(Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3));
    }
}

// const someObject = {area: 'Ошибка! Треугольник не существует', perimeter: 'Ошибка! Треугольник не существует'}

function getTriangle(a, b, c) {
    try {
        return new Triangle (a, b, c)
    } catch {
        return Object.freeze({
            area: 'Ошибка! Треугольник не существует',
            perimeter: 'Ошибка! Треугольник не существует',
        })

        // return someObject;
    }
}

const triangle = new Triangle(2,5,5);


