var submit_flag = 0;        //1为可以提交，0为不可以提交
var phone_flag = 0;         //1为手机号格式正确，0为错误
var go_submit_l = document.getElementById("go_submit_l");
var usr_phone_number = document.getElementById('usr_phone_number_l');
var input_l = document.getElementById('input_l').getElementsByTagName('input');
var input_l_flag = new Array();      //用来接每一个input的动画,描述状态

for(var i=0;i<input_l.length;i++){
    input_l[i].oninput = checkSubmit;
}
function checkSubmit(){
    //遍历所有input,用来改变提交的格式
    for(var i=0;i<input_l.length;i++){
        if(input_l[i].value == ""){
            submit_flag=0;
            break;
        }
        submit_flag=1;
    }

    if(submit_flag&&phone_flag){
        //如果可以提交，就改变提交的图片样式
        go_submit_l.src = "./images/submit_useful.svg";
    }else{
        go_submit_l.src = "./images/submit_useless.svg";
    } 
}


usr_phone_number.oninput = function checkPhoneNumber(){
    //成功检测手机号格式！
    var value_usr_phone_number = usr_phone_number.value;
    value_usr_phone_number_arr = String(value_usr_phone_number);
    if(value_usr_phone_number_arr.length == 11){
        return phone_flag = 1;   //手机号格式对了  牛逼啊，手机号格式对了！！
        
    }else
        return phone_flag = 0;   //手机号格式不对  jb手机号格式都对不了！！
}