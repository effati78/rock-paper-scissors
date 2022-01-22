var rock = document.getElementById('rock-computer');
var paper = document.getElementById('paper-computer');
var scissor = document.getElementById('scissor-computer');
var rock_p = document.getElementById('rock-player-sh');
var paper_p = document.getElementById('paper-player-sh');
var scissor_p = document.getElementById('scissor-player-sh');
var score = [0, 0];
var licom = document.getElementById("li01");
var lipla = document.getElementById("li02");
var scrol = 18;
function animationTime() {
    var aniTime01 = setInterval(TimeAni01, 80);
    function TimeAni01() {
        if (scrol == 25) {
            clearInterval(aniTime01);
            var aniTime02 = setInterval(TimeAni02, 80);
            function TimeAni02() {
                if (scrol == 18) {
                    clearInterval(aniTime02);
                    animationTime();
                } else {
                    scrol--;
                    document.getElementById('new-game').style.fontSize = scrol + "px";
                }
            }
        } else {
            scrol++;
            document.getElementById('new-game').style.fontSize = scrol + "px";
        }
    }
}
function test(e) {
    var player = e;
    var computer = Math.floor(Math.random() * 3);
    if (score[0] != 5 && score[1] != 5) {
        if (computer === 0 && player === "کاغذ") {
            score[1]++;
            lipla.innerHTML = score[1];
            rock.style.visibility = "visible";
            paper.style.visibility = "hidden";
            scissor.style.visibility = "hidden";
            rock_p.style.visibility = "hidden";
            paper_p.style.visibility = "visible";
            scissor_p.style.visibility = "hidden";
        } else if (computer === 0 && player === "قیچی") {
            score[0]++;
            licom.innerHTML = score[0];
            rock.style.visibility = "visible";
            paper.style.visibility = "hidden";
            scissor.style.visibility = "hidden";
            rock_p.style.visibility = "hidden";
            paper_p.style.visibility = "hidden";
            scissor_p.style.visibility = "visible";
        } else if (computer === 1 && player === "سنگ") {
            score[0]++;
            licom.innerHTML = score[0];
            rock.style.visibility = "hidden";
            paper.style.visibility = "visible";
            scissor.style.visibility = "hidden";
            rock_p.style.visibility = "visible";
            paper_p.style.visibility = "hidden";
            scissor_p.style.visibility = "hidden";
        } else if (computer === 1 && player === "قیچی") {
            score[1]++;
            lipla.innerHTML = score[1];
            rock.style.visibility = "hidden";
            paper.style.visibility = "visible";
            scissor.style.visibility = "hidden";
            rock_p.style.visibility = "hidden";
            paper_p.style.visibility = "hidden";
            scissor_p.style.visibility = "visible";
        } else if (computer === 2 && player === "سنگ") {
            score[1]++;
            lipla.innerHTML = score[1];
            rock.style.visibility = "hidden";
            paper.style.visibility = "hidden";
            scissor.style.visibility = "visible";
            rock_p.style.visibility = "visible";
            paper_p.style.visibility = "hidden";
            scissor_p.style.visibility = "hidden";
        } else if (computer === 2 && player === "کاغذ") {
            score[0]++;
            licom.innerHTML = score[0];
            rock.style.visibility = "hidden";
            paper.style.visibility = "hidden";
            scissor.style.visibility = "visible";
            rock_p.style.visibility = "hidden";
            paper_p.style.visibility = "visible";
            scissor_p.style.visibility = "hidden";
        } else if (computer === 0 && player === "سنگ") {
            rock.style.visibility = "visible";
            paper.style.visibility = "hidden";
            scissor.style.visibility = "hidden";
            rock_p.style.visibility = "visible";
            paper_p.style.visibility = "hidden";
            scissor_p.style.visibility = "hidden";
        } else if (computer === 1 && player === "کاغذ") {
            rock.style.visibility = "hidden";
            paper.style.visibility = "visible";
            scissor.style.visibility = "hidden";
            rock_p.style.visibility = "hidden";
            paper_p.style.visibility = "visible";
            scissor_p.style.visibility = "hidden";
        } else if (computer === 2 && player === "قیچی") {
            rock.style.visibility = "hidden";
            paper.style.visibility = "hidden";
            scissor.style.visibility = "visible";
            rock_p.style.visibility = "hidden";
            paper_p.style.visibility = "hidden";
            scissor_p.style.visibility = "visible";
        }
    } else {
        alert("لطفا روی (بازی جدید) کلیک کنید.");
    }
    if (score[0] === 5 || score[1] === 5) {
        if (score[1] === 5) {
            win = "شما برنده شدید. 😄👏🎈";
            document.getElementById('n02').style.backgroundColor = 'green';
            document.getElementById('n01').style.backgroundColor = 'red';
        } else if (score[0] === 5) {
            win = "رایانه برنده شد. 😎🎈💻";
            document.getElementById('n01').style.backgroundColor = 'green';
            document.getElementById('n02').style.backgroundColor = 'red';
        }
        document.getElementById('n01').style.color = 'white';
        document.getElementById('n02').style.color = 'white';
        document.getElementById('Message').innerHTML = win;
        document.getElementById("new-game").style.visibility = "visible";
        animationTime();
    }
}