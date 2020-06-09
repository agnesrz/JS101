/*
input: array and object
output: a greeting
rules:
  -array should have 2+ elements that when combined with spaces produce a person's name
  -object should contain 2 keys, 'title' and 'occupation' and the appropriate values
  -greeting should use a person's full name and mentions a title
model: Combine array elements to produce a person's name. Then determine a person's title. Then return a greeting that returns the person's name and title.
example:
  console.log(
   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
  );
  // logs Hello, John Q Doe! Nice to have a Master Plumber around.
algorithm:
  -determine the person's name
    -set 'fullName'
    -use reduce function to determine full name
  -determine the person's title
    -set 'title'
    -use property (.title) to get value
  -return greeting
    -`Hello, ${fullName}! Nice to have a ${title} around.`
*/

function greetings(array, object) {
  let fullName = array.reduce((accum, curVal) => {
    return accum + ' ' + curVal;
  });
  let title = object.title;
  let occu = object.occupation;
  return `Hello, ${fullName}! Nice to have a ${title} ${occu} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.