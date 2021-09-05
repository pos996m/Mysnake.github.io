

// 製作 td
var td_all = "<td id='td_0'></td>";

for (let i = 0; i < 19; i++) {
    td_all += `<td id='td_${i+1}'></td>`;
}
// console.log(a);

// 製作 tr
var tr_all = "<tr id='tr_0'>" + td_all + "</tr>";

for (let k = 0; k < 19; k++) {
    tr_all += `<tr id='tr_${k+1}'>` + td_all + "</tr>";
}
// console.log(b);
// 更改網站內容
var table_all = document.getElementById("table_all");
table_all.innerHTML = tr_all;


var snake = [20,21,22];

// for (let s = 0; s < snake.length; s++) {

//     document.getElementById(`td_${snake[s]}`).style.backgroundColor = "red"
    
// }

console.log(document.getElementById(`td_11`))
console.log(document.getElementById('tr_0').childNodes[0]);






// var snake = [11,12,13];

// for (let i = 0; i < snake.length; i++) {
//     console.log(snake[i])
//     table_all[snake[i]].style.backgroundColor = "yellow"
// }

