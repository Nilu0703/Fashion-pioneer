window.onload = function(){
    var phone = document.getElementsByName('phone');
    var span = document.getElementsByTagName('span');
    var frmContact = document.getElementById('frmContact');

    //获取焦点函数
    phone[0].onfocus=function(){
        // console.log(1);
        // 边框的颜色
       this.style.boxShadow = "none";
    }
    phone[0].onblur = function(){
        this.style.border = "1px solid #aaa";
        //判断手机号码
        var phoneValue = phone[0].value;
        // console.log(phoneValue);
        if(phoneValue == ''){
            span[0].className = "display-inline icon-times-circle";
            span[0].innerHTML = ' Cep numara doldurunuz';
            frmContact.setAttribute("disabled","true");
            phonecode.setAttribute("disabled","true");
        }
        //判断手机号是否是正确
        if(phoneValue != ''){
            //正则匹配手机号
            var isOk =  /^0\d{10}$/.test(phoneValue);
            // console.log(isOk);
            if(isOk){
                span[0].className = 'display-inline icon-check-circle';
                span[0].innerHTML = ' Onaylandı';
                frmContact.removeAttribute("disabled");
                phonecode.removeAttribute("disabled");
            }else{
                span[0].className = 'display-inline icon-times-circle';
                span[0].innerHTML = ' 0 ile başlayan 11 haneli numara giriniz';
                frmContact.setAttribute("disabled","true");
                phonecode.setAttribute("disabled","true");
            }
        }
    }
    //验证码发送和验证
    var button = document.getElementsByTagName('button');
    button[0].onclick=function(){
        //随机生成验证码
        function randomf(){
            var randomf = Math.floor(Math.random()*(9999-1000+1)+1000);
            return randomf;
        }
        var randomf = randomf();
        //将随机数添加到页面中
        span[1].className = 'display-inline';
        span[1].innerHTML = randomf;
    }
    //进行验证码的匹配
    var code = document.getElementById('code');
    //焦点函数触发
    code.onfocus = function(){
       this.style.boxShadow = "none";
    }
    code.onblur = function(){
        this.style.border = "1px solid #aaa";
        //用户填入的验证码
        var codeValue = code.value;
        //span节点里面的验证码
        var spanValue = span[1].innerHTML;
        //判断号码不能为空
        if(codeValue == ''){
            span[2].className = 'display-inline icon-times-circle';
            span[2].innerHTML = ' Onay kodunu giriniz';
            frmContact.setAttribute("disabled","true");
        }
        //判断验证码是否正确
        if(codeValue != ''){
            if(codeValue != spanValue){
                span[2].className = 'display-inline icon-times-circle';
                span[2].innerHTML = ' Kod numarası yanlış';
                frmContact.setAttribute("disabled","true");
            }else{
                span[2].className = 'display-inline icon-check-circle';
                span[2].innerHTML = ' Onaylandı！';
                frmContact.removeAttribute("disabled");
            }
        }
    }
    let inp1=document.getElementById("password");
    let level=0;
   let strength=document.getElementById("strength");
   let stengthLevel=document.getElementById("stengthLevel")
     inp1.onfocus=function(){
    // console.log(1);
    // 边框的颜色
   this.style.boxShadow = "none";
}
    let arr=["kısa","zayıf","orta","güvenli"]
    inp1.onblur=function(){
        this.style.border = "1px solid #aaa";
        level=0;

        let password=this.value.trim();
        if(/\d/.test(password)){
            level++;
        }
        if(/[a-zA-Z]/.test(password)){
            level++;
        }
        if(/\W/.test(password)){
            level++;
        }
        if (password.length<6){
            level=0
        }
        strength.innerText=arr[level];
        stengthLevel.setAttribute("class","srengthLv"+level);
        if(password == ''){
            span[3].className = "display-inline icon-times-circle";
            span[3].innerHTML = ' Şifre giriniz';
            frmContact.setAttribute("disabled","true");
            strength.innerText="";
        }
        else if(password.length<6){
            span[3].className = "display-inline icon-times-circle";
            span[3].innerHTML = ' şifre en az 6 hane olmalı';
            frmContact.setAttribute("disabled","true");
        }
        else{
            span[3].className = 'display-inline icon-check-circle';
            span[3].innerHTML = ' Onaylandı！';
            frmContact.removeAttribute("disabled");
        }
        
    }
    
  
	

    //密码匹配判定
    var passRepeat = document.getElementById('passrepeat');
    //获取焦点函数
    passRepeat.onfocus = function(){
       this.style.boxShadow = "none";
    }
    //失去焦点函数
    passRepeat.onblur = function(){
        //设置边框颜色
        this.style.border = "1px solid #aaa";
        
        //获取重复密码的值
        var passRepeatValue = passRepeat.value;
        //获取密码的值
        var passwordValue = password.value;
        if(passRepeatValue == ""){
            span[4].className = "display-inline icon-times-circle";
            span[4].innerHTML = 'Şifreyi tekrar giriniz';
            frmContact.setAttribute("disabled","true");
            
            
        }
        //判断两次输入的是否一样
    if (passRepeatValue != ""){
        if(passwordValue != passRepeatValue){
            span[4].className = 'display-inline icon-times-circle';
            span[4].innerHTML = "Aynı şifreyi giriniz";
            frmContact.setAttribute("disabled","true");
        }else{
            span[4].className = 'display-inline icon-check-circle';
            span[4].innerHTML = "Onaylandı";
            frmContact.removeAttribute("disabled");
        }
    }
    }
    //点击注册跳转页面
    
    frmContact.onclick = function(){
        if(phone[0].value=="" || code.value=="" || password.value=="" || passRepeat.value ==""){
            alert("BİGİLERİ EKSİKSİZ DOLDURUNUZ");
        }else{
            alert("ARAMIZA HOŞ GELDİNİZ")
            window.location.href = "./login.html?phone="+phone[0].value+"&pass="+password.value;
        }
    }
}