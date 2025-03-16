let n = prompt("Input number of cats")

// let i = 0;
// while (i < 3) {
//   document.write(i + "=^.^=" + "<br>");
//   i++;
// }

// let i = 0;
//  do {
//   document.write(i + "=^.^=" + "<br>");
//   i++;
// } while (i < 3)

// for (let i = 0; i < n; i++) {
//    document.write(i + "=^.^=" + "<br>");
// }
let k = 2;
for (let i = 1; i <= n; i++) {
    if(i % 2 == 0) {
        document.write("<br>");
    }
    document.write("=^.^=");

 }