

//PART-1

var favMovies = ["Iron Man", "The Spiderman", "Titanic", "King Kong", "Robots"];
window.console.log(favMovies[1]);

//PART-2

var movies = new Array(5);
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
window.console.log(movies[0]);

//PART-3

var movies = new Array(5);
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies.splice(2,0, "Terminator");
window.console.log(movies.length);

//PART-4

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
delete movies[0];
window.console.log(movies);

//PART-5

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
for (var i in movies) {
    window.console.log(movies[i]);
}

//PART-6

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
for (var j of movies) {
    window.console.log(j);
}

//PART-7

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
movies.sort();
for (var k of movies) {
    window.console.log(k);
}

//STEP-8

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
var leastFavMovies = ["Battleship", "Arrival", "Moonfall"];
window.console.log("\nMovies I like:\n\n" + movies.join("\n") + "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//STEP-9

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
var leastFavMovies = ["Battleship", "Arrival", "Moonfall"];
movies = movies.concat(leastFavMovies);
window.console.log(movies.sort().reverse());

//STEP-10

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
var leastFavMovies = ["Battleship", "Arrival", "Moonfall"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.pop());

//STEP-11

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
var leastFavMovies = ["Battleship", "Arrival", "Moonfall"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.shift());

//STEP-12

var movies = [];
movies[0] = "Bambi";
movies[1] = "Superman";
movies[2] = "Harry Potter";
movies[3] = "Light Year";
movies[4] = "Avatar"
movies[5] = "Terminator";
movies[6] = "Robots";
var leastFavMovies = ["Battleship", "Arrival", "Moonfall"];
movies = movies.concat(leastFavMovies);
var leastFavIndex = [];
for (var i = 0; i < movies.length; i++) {
    if (leastFavMovies.indexOf(movies[i]) !== -1) {
        leastFavIndex.push(i);
    }
}
for (var j = 0; j < leastFavIndex.length; j++) {
    movies[leastFavIndex[j]] = "";
}
var newFavMovies = ["Inception", "Iron Man", "Amigos"];
for (var k = 0; k <leastFavIndex.length; k++) {
    movies[leastFavIndex[k]] = newFavMovies[k];
}
window.console.log(movies);
 
//STEP-13

var movies = [["Bambi", 1], ["Superman", 2], ["Harry Potter", 3], ["Avatar", 4], ["Terminator", 5]];
var names = movies.filter(function (movie) {
    return typeof movie[0] === 'string';
});
window.console.log(names.map(function (movie) {
    return movie[0];
}));

//STEP-14

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function (emp) {
    window.console.log("Employees: \n\n");
    for (var i = 0; i < emp.length; i++) {
        window.console.log(emp[i]);
    }
};
showEmployee(employees);

//STEP-15

function filterValues(arr) {
    return arr.filter(function(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP-16

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
var no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
window.console.log(randomItem(no));

//STEP-17

function largestNumber(arr) {
    return Math.max(...arr);
}
var no = [23, 43, 1, 3, 78, 98, 67, 19, 46, 89];
window.console.log(largestNumber(no));
