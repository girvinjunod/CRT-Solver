// Script
function pbb(a,b){
    let terkecil = a;
    if (b < a) terkecil = b;
    var x = 1;
    for (let i = 2; i <= terkecil; i++){
        if (a%i===0 && b%i===0){
            x = i; 
        }
    }
    return x;
}

function cek(pembagi){
    for (var i = 0; i<pembagi.length;i++){
        for (var j = 0; j<pembagi.length;j++){
            if (i !== j && pembagi[i] !== pembagi[j]){
                var tes = pbb(pembagi[i], pembagi[j]);
                if (tes !== 1){
                    return false;
                }
            }
        }
    }
    return true;
}

function cekinput(pembagi,sisa){
    if (sisa >= pembagi){
        return false;
    }
    return true;
}

function cekinputall(pembagi,sisa){
    if (pembagi.length !== sisa.length) return false;
    for (let i=0; i < pembagi.length; i++){
        if (!cekinput(pembagi[i], sisa[i])){
            return false;
        }
    }
    return true;
}

function makeset(pembagi,sisa){
    var tempa = [];
    var tempb = [];
    for (var i = 0; i < pembagi.length; i++){
        var sama = false;
        for (let j = 0; j < tempa.length; j++){
            if (pembagi[i] === tempa[j] && sisa[i] === tempb[j]){
                sama = true;
                break;
            }
        }
        if (sama){
            //pass
        }
        else{
            tempa.push(pembagi[i]);
            tempb.push(sisa[i]);
        }
    }
    return [tempa,tempb];
}

function y(M,pembagi){
    var i = 1;
    var found = false;
    while (!found){
        if ((M * i) % pembagi === 1){
            found = true;
            return i;
        }
        i +=1;
    }
}

function crt(pembagi,sisa){
    var lanjut = cek(pembagi);
    if (lanjut === false){
        return [false, "", "", "", ""];
    }
    var n = pembagi.length;
    var m = 1;
    for (let i = 0; i < n;i++){
        m *= pembagi[i];
    }
    let M = [];
    for (let i = 0; i < n;i++){
        M[i] = 1;
        for (let j = 0; j < n;j++){
            if (j !== i){
                M[i] *= pembagi[j];
            }
        }
    }
    let ay = [];
    for (let i=0; i< n;i++){
        ay[i] = y(M[i], pembagi[i]);
    }
    var x = 0;
    for (let i=0; i< n; i++){
        x += sisa[i]*M[i]*ay[i];
    }
    let res = x;
    x = x % m;
    return [x, m, M, ay, res];
}
function pertanyaan(pembagi,sisa){
    var str = "";
    for (let i = 0; i< pembagi.length;i++){
        str += "x jika dibagi " + pembagi[i] + " bersisa " + sisa[i];
        str += "\n";
    }
    return str;
}

function out(x,m){
    return "x ≡ " + x + " (mod " + m+ ")";
}

function solveCRT(p,s){
    var temp = makeset(p,s);
    var pembagi = temp[0];
    var sisa = temp[1];
    var input = cekinputall(pembagi, sisa);
    var ret = ""
    var q = pertanyaan(pembagi,sisa);
    if (input){
      var res = crt(pembagi,sisa);
      if (res[0] === false){
          ret = [false, q,"Soal tidak memenuhi syarat CRT", [], []]
      }
      else{
          ret = [true, q, out(res[0], res[1]), res[2], res[3] ]
      }
    } 
    else{
        ret = [false, q, "Salah input", [], []]
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    const ret1 = { id: id, ada: ret[0], pertanyaan: ret[1], ans: ret[2], pembagi: pembagi, sisa: sisa, modulus:res[1], x:res[0], 
    M: ret[3], y: ret[4], hasil:res[4] }; 
    return ret1
}



const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.post("/crt", (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': 'POST'
    })
    let pembagi = req.body.pembagi
    let sisa = req.body.sisa
    for (let i = 0; i < pembagi.length; i++){
        pembagi[i] = parseInt(pembagi[i])
        sisa[i] = parseInt(sisa[i])
    }
    let a = solveCRT(pembagi,sisa)
    res.send(a)
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});