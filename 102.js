var xx = parseInt(prompt("輸入大小規格:  5-30\n建議輸入20。"));
while (xx < 5 || xx > 30 || isNaN(xx)) {
    xx = parseInt(prompt("請輸入範圍\n輸入大小規格:  5-30\n建議輸入20。"));
}

// 地圖建立過程c
var td_all = "<td class='td_all' id='td_1'></td>";
// var tr_all;
for (let i = 2; i < (xx * xx) + 1; i++) {
    td_all += `<td class='td_all' id='td_${i}'></td>`;
    if (i == (xx * xx)) {
        td_all += "</tr>"
    } else if ((i % xx) == 0) {
        td_all += "</tr><tr>"
    }
}
td_all = "<tr>" + td_all
// console.log(td_all);


// console.log(td_all)
// 建立整個地圖
var table_all = document.getElementById("table_all");
table_all.innerHTML = td_all;
var coin_n = document.getElementById("coin_n");
var coin_n2 = document.getElementById("coin_n2");
coin_n.innerHTML = "分數: <span id='coin_np'> </span>"
var coin_np = document.getElementById("coin_np");
var coin_sum = 0;

// 計算分數列表
var coin_sum_all = [0];
var coin_cnt = 0;

// 排序計分
function sortNum(a,b) {
    return a - b; 
    //升序，如降序，把“a - b”該成“b - a”
    }
    // var myarr = new Array("80","16","50","6","100","1");
    // document.write(myarr + "<br>");
    // document.write(myarr.sort(sortNum));

// 初始蛇
var snake_xx = Math.floor(xx / 5) + 1
console.log(snake_xx)
var snake = [1];
for (let g = 1; g < snake_xx; g++) {
    snake.push(snake[snake.length - 1] + 1);
}

function snake_init() {
    for (let s = 0; s < snake.length; s++) {
        document.getElementById(`td_${snake[s]}`).style.backgroundColor = "red"
    }
}
snake_init()
// 刪除蛇
function snake_del() {
    // snake.pop()
    for (let s = 0; s < snake.length; s++) {
        document.getElementById(`td_${snake[s]}`).style.backgroundColor = "";
    }
    snake = [1];
    for (let g = 1; g < snake_xx; g++) {
        snake.push(snake[snake.length - 1] + 1);
    }
}

// 重製蛇
function snake_return() {
    alert('撞到了')
    // 印出分數
    // coin_n.innerHTML = `分數: <span id='coin_np'> 0 </span><br>最高分數: <span>${Math.max(...coin_sum_all)}</span>`
    coin_n2.innerHTML = "排行<br>";
    // 印出排序
    coin_sum_all.sort(sortNum);
    coin_sum_all.reverse();
    for (let i = 0; i < coin_sum_all.length && i < 5; i++) {

        coin_n2.innerHTML += `第 ${i+1} 名 : ${coin_sum_all[i]}<br>`
    }

    coin_np = document.getElementById("coin_np");
    coin_sum_all.push(0);
    coin_cnt += 1;
    snake_del();
    snake_init();
    s_speed = 200;
    s_ctrl1 = 1;
    s_ctrl2 = 1;
    s_ctrl3 = 1;
    s_ctrl4 = 1;
}

function snake_run_R() {
    if ((snake[snake.length - 1] % xx == 0)) {
        // 撞到死掉
        clearInterval(s_ctrlrun3);
        snake_return()
    } else {
        try {
            document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        } catch (error) {
            console.log("尾巴建立錯誤_R1")
        }

        snake.push(snake[snake.length - 1] + 1);
        snake.shift();

        try {
            document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        } catch (error) {
            console.log("尾巴建立錯誤_R2")
        }

        snake_hitsalf()
        snake_eat()
    }


}

function snake_run_L() {
    if ((snake[snake.length - 1] % xx == 1)) {
        clearInterval(s_ctrlrun1);
        snake_return()
    } else {
        try {
            document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        } catch (error) {
            console.log("尾巴建立錯誤_L1")
        }

        snake.push(snake[snake.length - 1] - 1);
        snake.shift();

        try {
            document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        } catch (error) {
            console.log("尾巴建立錯誤_L2")
        }

        snake_hitsalf()
        snake_eat()
    }


}

function snake_run_T() {
    if (snake[snake.length - 1] < (xx + 1)) {
        clearInterval(s_ctrlrun2);
        snake_return()
    } else {
        try {
            document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        } catch (error) {
            console.log("尾巴建立錯誤_T1")
        }

        snake.push(snake[snake.length - 1] - xx);
        snake.shift();

        try {
            document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        } catch (error) {
            console.log("尾巴建立錯誤_T2")
        }

        snake_hitsalf()
        snake_eat()
    }
}

function snake_run_D() {
    if (snake[snake.length - 1] > (((xx * xx) + 1) - xx)) {
        clearInterval(s_ctrlrun4);
        snake_return()
    } else {
        try {
            document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        } catch (error) {
            console.log("尾巴建立錯誤_D1")
        }

        snake.push(snake[snake.length - 1] + xx); 5
        snake.shift();
        // document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";4

        try {
            document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        } catch (error) {
            console.log("尾巴建立錯誤_D2")
        }

        snake_hitsalf()
        snake_eat()
    }

}




// 鍵盤控制器
var s_ctrl1 = 1;
var s_ctrl2 = 1;
var s_ctrl3 = 1;
var s_ctrl4 = 1;
var s_ctrlrun1;
var s_ctrlrun2;
var s_ctrlrun3;
var s_ctrlrun4;

var s_speed = 200;

function movesanke(e) {
    if (e.keyCode == 37 && s_ctrl1 == 1) {
        // 左
        clearInterval(s_ctrlrun2);
        clearInterval(s_ctrlrun4);
        s_ctrlrun1 = setInterval(snake_run_L, 0);
        clearInterval(s_ctrlrun1);
        s_ctrlrun1 = setInterval(snake_run_L, s_speed);
        s_ctrl1 = 2;
        s_ctrl2 = 1;
        s_ctrl3 = 2;
        s_ctrl4 = 1;
    } else if (e.keyCode == 38 && s_ctrl2 == 1) {
        // 上
        clearInterval(s_ctrlrun3);
        clearInterval(s_ctrlrun1);
        s_ctrlrun2 = setInterval(snake_run_T, 0);
        clearInterval(s_ctrlrun2);
        s_ctrlrun2 = setInterval(snake_run_T, s_speed);
        s_ctrl1 = 1;
        s_ctrl2 = 2;
        s_ctrl3 = 1;
        s_ctrl4 = 2;
    } else if (e.keyCode == 39 && s_ctrl3 == 1) {
        // 右
        // console.log('ok')
        clearInterval(s_ctrlrun2);
        clearInterval(s_ctrlrun4);
        s_ctrlrun3 = setInterval(snake_run_R, 0);
        clearInterval(s_ctrlrun3);
        s_ctrlrun3 = setInterval(snake_run_R, s_speed);
        s_ctrl1 = 2;
        s_ctrl2 = 1;
        s_ctrl3 = 2;
        s_ctrl4 = 1;
    } else if (e.keyCode == 40 && s_ctrl4 == 1) {
        // 下
        clearInterval(s_ctrlrun3);
        clearInterval(s_ctrlrun1);
        s_ctrlrun4 = setInterval(snake_run_D, 0);
        clearInterval(s_ctrlrun4);
        s_ctrlrun4 = setInterval(snake_run_D, s_speed);
        s_ctrl1 = 1;
        s_ctrl2 = 2;
        s_ctrl3 = 1;
        s_ctrl4 = 2;
    }
}

// 亂數的食物
var snake_food = Math.ceil(Math.random() * ((xx * xx) - (xx * 2))) + xx;

function snake_foodrt() {
    // .includes() 判定指定物件有沒有在陣列裡面。
    while (snake.includes(snake_food) != false) {
        snake_food = Math.ceil(Math.random() * ((xx * xx) - (xx * 2))) + xx;
    }
    document.getElementById(`td_${snake_food}`).style.backgroundColor = "blue";
    // console.log(snake_food)
}
console.log(snake_food);
snake_foodrt();



// 吃東西的蛇
// function snake_eat_R() {
//     if (snake[snake.length - 1] == snake_food) {
//         snake.unshift(snake[0] - 1);
//         snake_foodrt()
//         snake_runrun()
//     }
// }
// function snake_eat_L() {
//     if (snake[snake.length - 1] == snake_food) {
//         snake.unshift(snake[0] + 1);
//         snake_foodrt()
//         snake_runrun()
//     }
// }

function snake_eat() {
    if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == 1) {
        snake.unshift(snake[0] - 1); // 右
        coin_sum_all[coin_cnt] += 20;
        coin_np.innerHTML = coin_sum_all[coin_cnt];
        // clearInterval(s_ctrlrun3); 
        document.getElementById("eat_coin").play();
        snake_foodrt();
        snake_runrun();
        // s_ctrlrun3 = setInterval(snake_run_R, s_speed);
    } else if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == -1) {
        snake.unshift(snake[0] + 1); //左
        coin_sum_all[coin_cnt] += 20;
        coin_np.innerHTML = coin_sum_all[coin_cnt];
        // clearInterval(s_ctrlrun1) 
        document.getElementById("eat_coin").play();
        snake_foodrt();
        snake_runrun();

        // s_ctrlrun1 = setInterval(snake_run_L, s_speed);
    } else if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == xx) {
        snake.unshift(snake[0] - xx); //下
        coin_sum_all[coin_cnt] += 20;
        coin_np.innerHTML = coin_sum_all[coin_cnt];
        // clearInterval(s_ctrlrun4);
        document.getElementById("eat_coin").play();
        snake_foodrt();
        snake_runrun();
        // s_ctrlrun4 = setInterval(snake_run_D, s_speed);

    } else if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == (xx * -1)) {
        snake.unshift(snake[0] + xx); //上
        coin_sum_all[coin_cnt] += 20;
        coin_np.innerHTML = coin_sum_all[coin_cnt];
        // clearInterval(s_ctrlrun2);
        document.getElementById("eat_coin").play();
        snake_foodrt();
        snake_runrun();
        // s_ctrlrun2 = setInterval(snake_run_T, s_speed);

    }
}




// function snake_eat_T() {
//     if (snake[snake.length - 1] == snake_food) {
//         snake.unshift(snake[0] + 20);
//         snake_foodrt()
//         snake_runrun()
//     }
// }
// function snake_eat_D() {
//     if (snake[snake.length - 1] == snake_food) {
//         snake.unshift(snake[0] - 20);
//         snake_foodrt()
//         snake_runrun()
//     }
// }

// 不能碰撞到自己
function snake_hitsalf() {
    for (let i = 0; i < snake.length - 1; i++) {
        if (snake[i] == snake[snake.length - 1]) {
            // console.log("撞到自己")
            snake_return()
            clearInterval(s_ctrlrun1);
            clearInterval(s_ctrlrun2);
            clearInterval(s_ctrlrun3);
            clearInterval(s_ctrlrun4);
            snake_foodrt()
        }
    }
    // if(snake.includes(snake[snake.length - 1])){
    //     console.log("撞到自己")
    // }
}

// 吃越多跑越快
function snake_runrun() {
    switch (snake.length) {
        case 4:
            s_speed = 180;
            break
        case 8:
            s_speed = 160;
            break
        case 12:
            s_speed = 142;
            break
        case 16:
            s_speed = 127;
            break
        case 20:
            s_speed = 113;
            break
        case 24:
            s_speed = 100;
            break
        case 28:
            s_speed = 89;
            break
        case 32:
            s_speed = 79;
            break
        case 36:
            s_speed = 70;
            break
        case 40:
            s_speed = 62.5;
            break
        case 44:
            s_speed = 56;
            break
        case 48:
            s_speed = 50;
            break
        case 52:
            s_speed = 45;
            break
    }
}

// s_speed = 30;