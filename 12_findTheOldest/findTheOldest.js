const findTheOldest = function(people) {
  return people.sort((a, b) => {
    const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
    if(ageA > ageB) {
      return -1;
    }
    if(ageA < ageB) {
      return 1;
    }
    return 0;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
