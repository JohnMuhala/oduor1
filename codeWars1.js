function capital(capitals) {

    let output = [];

    capitals.forEach(function(f) {

        output.push("The capital of " + (f.state || f.country) + " is " + f.capital);
    });

    return output;
}
console.log(capital([{ 'country': 'Kenya', 'capital': 'Nairobi' }]));
console.log(capital([{ 'country': 'SA', 'capital': 'Pretoria' }]));