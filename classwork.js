//expanded Object Functionallity in E6

const my_class = {
    stream: "Green",
    population: 25,
    grade: "Jalaram"
}

//Accessing values within JS Objects

my_stream = my_class.stream; //use dot notation to access objects
console.log(my_stream);

// Add new properety ton object using dot notation
my_class.getpopulation = () => {
    return my_class.population;
};
console.log(my_class);

