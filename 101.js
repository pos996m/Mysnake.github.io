// var xx = prompt("輸入數值X:");


// 地圖建立過程
var td_all = "<td id='td_1'></td>";
// var tr_all;
for (let i = 2; i < 401; i++) {
    td_all += `<td id='td_${i}'></td>`;
    if (i == 400) {
        td_all += "</tr>"
    } else if ((i % 20) == 0) {
        td_all += "</tr><tr>"
    }
}
td_all = "<tr>" + td_all


// console.log(td_all)
// 建立整個地圖
var table_all = document.getElementById("table_all");
table_all.innerHTML = td_all;

// 初始蛇
var snake = [1, 2, 3];
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
    snake = [1, 2, 3];
}
// 重製蛇
function snake_return() {
    alert('撞到了')
    snake_del();
    snake_init();
    s_speed = 230;
    s_ctrl1 = 1;
    s_ctrl2 = 1;
    s_ctrl3 = 1;
    s_ctrl4 = 1;
}

function snake_run_R() {
    if ((snake[snake.length - 1] % 20 == 0)) {
        clearInterval(s_ctrlrun3);
        snake_return()
    } else {
        document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        snake.push(snake[snake.length - 1] + 1);
        snake.shift();
        document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        snake_hitsalf()
        snake_eat()
    }
}

function snake_run_L() {
    if ((snake[snake.length - 1] % 20 == 1)) {
        clearInterval(s_ctrlrun1);
        snake_return()
    } else {
        document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        snake.push(snake[snake.length - 1] - 1);
        snake.shift();
        document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        snake_hitsalf()
        snake_eat()
    }


}

function snake_run_T() {
    if (snake[snake.length - 1] < 21) {
        clearInterval(s_ctrlrun2);
        snake_return()
    } else {
        document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        snake.push(snake[snake.length - 1] - 20);
        snake.shift();
        document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
        snake_hitsalf()
        snake_eat()
    }
}

function snake_run_D() {
    if (snake[snake.length - 1] > 381) {
        clearInterval(s_ctrlrun4);
        snake_return()
    } else {
        document.getElementById(`td_${snake[0]}`).style.backgroundColor = "";
        snake.push(snake[snake.length - 1] + 20);
        snake.shift();
        document.getElementById(`td_${snake[snake.length - 1]}`).style.backgroundColor = "red";
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

var s_speed = 230;

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
var snake_food = Math.ceil(Math.random() * 400);
function snake_foodrt() {
    while (snake.includes(snake_food) != false) {
        snake_food = Math.ceil(Math.random() * 400);
    }
    document.getElementById(`td_${snake_food}`).style.backgroundColor = "blue";
    // console.log(snake_food)
}
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
        // clearInterval(s_ctrlrun3); 
        snake_foodrt();
        snake_runrun();
        // s_ctrlrun3 = setInterval(snake_run_R, s_speed);
    } else if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == -1) {
        snake.unshift(snake[0] + 1); //左
        // clearInterval(s_ctrlrun1) 
        snake_foodrt();
        snake_runrun();
        // s_ctrlrun1 = setInterval(snake_run_L, s_speed);
    } else if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == 20) {
        snake.unshift(snake[0] - 20); //下
        // clearInterval(s_ctrlrun4);
        snake_foodrt();
        snake_runrun();
        // s_ctrlrun4 = setInterval(snake_run_D, s_speed);
    } else if (snake[snake.length - 1] == snake_food && (snake[1] - snake[0]) == -20) {
        snake.unshift(snake[0] + 20); //上
        // clearInterval(s_ctrlrun2);
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
            s_speed = 200;
            break
        case 8:
            s_speed = 180;
            break
        case 12:
            s_speed = 160;
            break
        case 16:
            s_speed = 130;
            break
        case 20:
            s_speed = 100;
            break
        case 24:
            s_speed = 80;
            break
        case 28:
            s_speed = 60;
            break
    }
}