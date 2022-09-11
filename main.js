/**
 *THE AIM IS TO USE ITERATOR...
 *
 * MOVIN FROM ONE TO FIVE...
 * @Genius
 */

const prompt = require("prompt-sync")();

// our object
let range = {
  from: 1,
  to: 5,
};

/**
 *
 * @returns HOW DO WE IDENTIFY ITERAORS?
 *
 * 1. Symbol.iterator keyword, that is how we identify 'em.
 */
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    //Calling an inbilt function next()  from the iterator objects
    next() {
      //checking if we are less than or equal to five..
      if (this.current <= this.last) {
        return {
          //done and value are built objects from our iterators
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

//loopin through and checking using for of loop..
//Iterators allow us to use for of loops for objects.
for (let num of range) {
  console.log(num);
}
