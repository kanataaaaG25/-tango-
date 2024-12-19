function tangoshow(){
    var omote= new Array("SaaS","逓減","₅P₃","未設定","未設定","未設定")
    var ura= new Array
    ("クラウドサービス事業者がソフトウェアを稼働させ、インターネット経由でユーザーが利用できるサービス",
    "次第に減ること、減らすこと",
    "5×4×3=60",
    "未設定","未設定","未設定")
    var number1=Math.random();
    var number2=number1*3;
    var number =Math.floor(number2);
var message1=omote[number];
var message2=ura[number];
var object=document.getElementById("omote");
object.innerText=message1;
var object=document.getElementById("ura");
object.innerText=message2;
}

function henko1show(){
    var object=document.getElementById("omote");
    var text1 = prompt("表示するメッセージ","初期値");
    object.innerText=text1;
}
function henko2show(){
    var ura= new Array
    ("クラウドサービス事業者がソフトウェアを稼働させ、インターネット経由でユーザーが利用できるサービス",
    "次第に減ること、減らすこと",
    "5×4×3=60",
    "未設定","未設定","未設定")
    var number1=Math.random();
    var number2=number1*3;
    var number =Math.floor(number2);
    var text = prompt("表示するメッセージ","初期値");
    object.innerText=message2;
}