/* Let's remember the first coding challenge where Dejon and Rob compared their BMIs. Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Note: We must use 'this' inside the object to reference properties for our method


Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
Rob's Info: mass: 78, height: 1.69
Dejon's Info: mass: 110, height: 1.95 */

const robInfo = {
    fullName: 'Robert Grande',
    mass: 78,
    height: 1.69,
    getRobBMI: function(){
        return this.mass / (this.height * this.height);
    }
}

console.log(robInfo.getRobBMI());

const dejInfo = {
    fullName: 'Dejon Curtie',
    mass: 110,
    height: 1.95,
    getDejBMI: function(){
        return this.mass / (this.height * this.height);
    }
}

console.log(dejInfo.getDejBMI());

console.log(`${dejInfo.fullName} has a higher BMI of ${dejInfo.getDejBMI()}`);