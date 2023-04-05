window.onload=function(){
    var submit = document.getElementById('submit');
    var str = location.href;
   
    
    //获取注册页面传过来的数据
    function getParamByUrl(url) {
        var theRequest = new Object();
        var index = url.indexOf("?");
        if (index != -1) {
           var str = url.substr(index + 1);
           strs = str.split("&");
           for(var i = 0; i < strs.length; i ++) {
               theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
           }
        }
        return theRequest;
     }
    var params = getParamByUrl(str);
    // console.log(params);
    var userName = document.getElementById('username');
    var userPass = document.getElementById('userpass');

    //手机号码匹配
    userName.onblur=function(){
        if(userName.value != params["phone"]){
            userPass.className = "display-inline icon-times-circle";
            userPass.innerHTML = "NUMARA YANLIŞ";
            submit.setAttribute('disabled',true);
            
        }else{
            userPass.className = "display-inline icon-check-circle";
            userPass.innerHTML = "ONAYLANDI";
            // submit.removeAttribute('disabled');
        }
    }
    var passWord = document.getElementById('password');
    var passTo = document.getElementById('passto');

    passWord.onblur=function(){
        if(passWord.value != params["pass"]){
            passTo.className = "display-inline icon-times-circle";
            passTo.innerHTML = "ŞİFRE YANLIŞ";
            submit.setAttribute('disabled',true);
        }else{
            passTo.className = "display-inline icon-check-circle";
            passTo.innerHTML = "ONAYLANDI";
            // submit.removeAttribute('disabled');
        }
        if(userName.value == params["phone"] && passWord.value == params["pass"]){
            submit.removeAttribute('disabled');
        }
    }
    //点击登录跳转
    var submit = document.getElementById('submit');
    submit.onclick = function(){
        if(passWord.value == "" || userName.value ==""){
            alert('BİLGİLERİ EKSİKSİZ DOLDURUNUZ！');
        }else{
            alert('HOŞ GELDİNİZ')
            window.location.href = "./index.html?username=" + userName.value;
        }
    }
}