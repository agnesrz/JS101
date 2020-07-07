function triangle(n) {
  for (let i = 1; i <= n; i += 1) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

triangle(1);
triangle(2);