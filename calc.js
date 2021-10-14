let flag = 'cl';
let fr, sd, re, opr, res;
let op = 'on';
let dt = 'on';
document.getElementById("disp").value = '0';




document.getElementById("disp").value = '0';

document.getElementById("bro").addEventListener('click', brof);
function brof() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '(';
}

document.getElementById("brc").addEventListener('click', brcf);
function brcf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += ')';
}


document.getElementById("one").addEventListener('click', onef);
function onef() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = '';
        flag = 'nop';
    }
    document.getElementById("disp").value += '1';
}
document.getElementById("two").addEventListener('click', twof);
function twof() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '2';
}
document.getElementById("clr").addEventListener('click', clrf);
function clrf() {
    document.getElementById("disp").value = '0';
    flag = 'cl';
}

document.getElementById("thre").addEventListener('click', thref);
function thref() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '3';
}

document.getElementById("four").addEventListener('click', fourf);
function fourf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '4';
}

document.getElementById("fiv").addEventListener('click', fivf);
function fivf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '5';
}

document.getElementById("six").addEventListener('click', sixf);
function sixf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '6';
}

document.getElementById("svn").addEventListener('click', svnf);
function svnf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '7';
}

document.getElementById("et").addEventListener('click', etf);
function etf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '8';
}

document.getElementById("nin").addEventListener('click', ninf);
function ninf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '9';
}

document.getElementById("zero").addEventListener('click', zerof);
function zerof() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    document.getElementById("disp").value += '0';
}

document.getElementById("dot").addEventListener('click', dotf);
function dotf() {
    op = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    if (dt == 'on') {
        fr = document.getElementById('disp').value;
        document.getElementById("disp").value += '.';
        dt = 'off';
    }
}



// operators

document.getElementById("perc").addEventListener('click', percf);
function percf() {
    opr = 'perc';
    dt = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    if (op == 'on') {
        fr = document.getElementById('disp').value;
        document.getElementById("disp").value += '%';

    }
}


document.getElementById("plus").addEventListener('click', plusf);
function plusf() {

    dt = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    if (op == 'on') {
        fr = document.getElementById('disp').value;
        document.getElementById("disp").value += '+';
        op = 'off';
    }
}

document.getElementById("mino").addEventListener('click', minof);
function minof() {

    dt = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    if (op == 'on') {
        fr = document.getElementById('disp').value;
        document.getElementById("disp").value += '-';
        op = 'off';
    }

}


document.getElementById("mul").addEventListener('click', mulf);
function mulf() {
    opr = 'mmul';
    dt = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    if (op == 'on') {
        fr = document.getElementById('disp').value;
        document.getElementById("disp").value += 'X';
        op = 'off';
    }

}



document.getElementById("divd").addEventListener('click', divdf);
function divdf() {

    dt = 'on';
    if (flag == 'cl') {
        document.getElementById("disp").value = null;
        flag = 'nop';
    }
    if (op == 'on') {
        fr = document.getElementById('disp').value;
        document.getElementById("disp").value += '/';
        op = 'off';
    }

}


document.getElementById("eql").addEventListener('click', eqlf);
function eqlf() {
    op = 'on';
    dt = 'on';
    // if (flag == 'cl') {
    //     document.getElementById("disp").value = null;
    //     flag = 'nop';
    // }
    // sd = document.getElementById('disp').value;
    // if(opr == 'plus'){
    //     re = sd.split("+");
    //     fr = parseFloat(re[0]);
    //     sd = parseFloat(re[1]);
    //     res = fr + sd;
    // }
    // else if(opr == 'mino'){
    //     re = sd.split("-");
    //     fr = parseFloat(re[0]);
    //     sd = parseFloat(re[1]);
    //     res = fr - sd;
    //     }
    // else if(opr == 'divd'){
    //     re = sd.split("/");
    //     fr = parseFloat(re[0]);
    //     sd = parseFloat(re[1]);
    //     res = fr / sd;
    //     }
    // else if(opr == 'mmul'){
    //     re = sd.split("X");
    //     fr = parseFloat(re[0]);
    //     sd = parseFloat(re[1]);
    //     res = fr * sd;
    //     }
    if (opr == 'mmul') {
        let tem = document.getElementById('disp').value;
        tem = tem.replace('X', '*');
        res = tem;
        res = eval(res);
    }
    else if (opr == 'perc') {
        let tem = document.getElementById('disp').value;
        while (tem.includes("%")) {
            tem = tem.replace('%', '/100');
        }
        res = tem;
        console.log(res);
        res = eval(res);
    }
    else {
        res = eval(document.getElementById("disp").value);
        console.log(res);
    }

    res = res.toFixed(2);
    document.getElementById('disp').value = res;
}