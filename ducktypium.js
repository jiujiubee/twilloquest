class Ducktypium {

    constructor(str) {

        if (str != "red" && str != "blue" && str != "yellow") {
            throw 'Color must be red, yellow, or blue!';
        }

        this.color = str
        this.calibrationSequence = []


    }

    refract(str) {

        if (str != "red" && str != "blue" && str != "yellow") {
            throw error;
        }

        if (str == this.color) return str
        var temp = [];
        temp = [str, this.color].sort()
        if (temp[0] == "blue" && temp[1] == "red") return "purple"
        else if (temp[0] == "red" && temp[1] == "yellow") return "orange"
        else return "green"


    }

    calibrate(arr) {
        arr.sort().forEach((element) => {
            this.calibrationSequence.push(element * 3)
        });
    }
}


const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
