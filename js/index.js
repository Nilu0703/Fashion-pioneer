window.onload=function(){
    //导航栏下拉效果
    var dropdown = document.getElementById('dropdown');
    var dropdownLi = dropdown.getElementsByTagName('li');
    for(var i=0;i<dropdownLi.length;i++){
        if(i == 1){
            continue;
        }
        dropdownLi[i].onmouseover=function(){
            this.classList.add("show");
        }
        dropdownLi[i].onmouseout=function(){
            this.classList.remove("show");
        }
    }}
    // 侧边栏
    var dropright = document.getElementById('dropright');
    var droprightLi = dropright.getElementsByTagName('li');
    for(var i=0;i<droprightLi.length;i++){
        droprightLi[i].onmouseover=function(){
            // console.log(1);
            this.classList.add("show");
        }
        droprightLi[i].onmouseout=function(){
            this.classList.remove("show");
        }
    }
// 搜索框
let keyword=document.querySelector(".keyword");
let searchHelper=document.querySelector(".search-helper");
let searcharr=["diesel","kadın sneaker","bot","sweater","çanta","ayakkabı","kol saat"];
keyword.oninput=function(){
    searchHelper.innerHTML="";
    for(let i=0;i<searcharr.length;i++){
        if(searcharr[i].indexOf(keyword.value)!=-1){
            searchHelper.innerHTML +="<p>" + searcharr[i]+ "</p>";
            searchHelper.style.display="block";
            
        }
    }

}
keyword.onblur=function(){
    searchHelper.style.display="none";
}
//轮播图自动切换
let img=document.querySelector(".img");
let prev=document.querySelector(".prev");
let next=document.querySelector(".next");
let slide=document.querySelector(".slide");
let lis=document.querySelectorAll(".banner-btn li")
let imgArr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
let count=0;
function cutImg(){
    img.src="./images/"+imgArr[count];
    for(let i=0;i<lis.length;i++){
        lis[i].className="";
    }
    lis[count].className="active";
}
let timer=setInterval(function(){
    count++;
    if(count>imgArr.length-1){
        count=0
    }
    cutImg();
},5000);
//点击下一张
next.onclick=function(){
    count++;
    if(count>imgArr.length-1){
        count=0;
    }
    cutImg();
}
//点击上一张
prev.onclick=function(){
    count--;
    if(count<0){
        count=imgArr.length-1;
    }
    cutImg();
}
//鼠标划入划出div，停止启动定时器
slide.onmouseover=function(){
    clearInterval(timer);

}
slide.onmouseout=function(){
    timer=setInterval(function(){
        count++;
        if(count>imgArr.length-1){
            count=0
        }
        cutImg();
    },5000);

}
//给圆点li绑定点击事件
for (let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        count=i;
        cutImg();
    }
}
let search=document.querySelector(".search")
let searchLogo=document.querySelector(".search_logo")
let form=document.querySelector(".form")
let header=document.querySelector(".header")
let banner=document.querySelector(".banner-box")
let elevator=document.querySelector(".elevator")
let nav=document.querySelector(".nav")
let floors=document.querySelectorAll(".content .floor")
let elevatorA=document.querySelectorAll(".elevator a i ")

let initial=header.offsetHeight+banner.offsetHeight+nav.offsetHeight;
let elevatorArr=[];
for (let i=0;i<floors.length;i++){
    initial=initial+floors[i].offsetHeight;
    elevatorArr.push(initial)
}
function clearColor(){
    for(let i=0; i<elevatorA.length;i++){
        // elevatorA[i].style.backgroundColor="";
        elevatorA[i].style.textShadow="";
        elevatorA[i].style.color="#FFED00";
       
    }
}
//实现楼层定位切换，滚到一定高度切换成固定定位
document.onscroll=function(){
   let top= document.documentElement.scrollTop||document.body.scrollTop;
   let headerHeight=header.offsetHeight;
   let bannerHeight=banner.offsetHeight;
   let navHeight=nav.offsetHeight
   if(top>=headerHeight+bannerHeight+navHeight){
    elevator.className="elevator elevator-fix";
    search.className=" search search-fix";
    form.style.top="3px";
    searchLogo.style.display="block";

   }else{
    elevator.className="elevator";
    search.className=" search";
    form.style.top="";
    searchLogo.style.display="none";
    
   }
   //楼层滚动对应楼层背景文字变色
   if(top<header.offsetHeight+banner.offsetHeight+nav.offsetHeight ){
    clearColor()
   }else if (top>=header.offsetHeight+banner.offsetHeight+nav.offsetHeight &&
   top<elevatorArr[0]){
   clearColor();
    elevatorA[0].style.color="";
    elevatorA[0].style.textShadow="2px 2px #ff0157 ";

   }else if(top>=elevatorArr[0] && top<elevatorArr[1]){
    clearColor();
    elevatorA[1].style.color="";
    elevatorA[1].style.textShadow="2px 2px #ff0157 ";
    

   }else if(top>=elevatorArr[1] && top<elevatorArr[2]){
    clearColor();
    elevatorA[2].style.color="";
    elevatorA[2].style.textShadow="2px 2px #ff0157 ";
    

//    }else if(top>=elevatorArr[2]){
//     clearColor();
//     // elevatorA[3].style.backgroundColor="#ff0157";
//     elevatorA[3].style.color="#ff0157";
    

   }
   
}
// 走动的表
let moveUl=document.querySelector(".moveImg ul");
// 为了做到无缝衔接追加一组相同图片
moveUl.innerHTML=moveUl.innerHTML+moveUl.innerHTML+moveUl.innerHTML;
let moveLis=document.querySelectorAll(".moveImg ul li");
// 每次滚动的跨数，向左
let spa=-1;
// 计算ul的总宽度
moveUl.style.width=moveLis[0].offsetWidth*moveLis.length+"px";
function move(){
    if(moveUl.offsetLeft<-moveUl.offsetWidth/3){
     
moveUl.style.left="0";
    }else{
        moveUl.style.left=moveUl.offsetLeft+spa+"px ";
    }
   
    
}
let moveTimer=setInterval(move,10);


moveUl.addEventListener("mouseover",function(){
    clearInterval(moveTimer);
    
})
moveUl.addEventListener("mouseout",function(){
    moveTimer=setInterval(move,10);
})

$(".fadeTo li").hover(function(){
    
    $(this).siblings().fadeTo(50,0.5);
    $(this).fadeTo(50,1);
},function(){
    
    $(".fadeTo li").fadeTo(50,1);
})
 //推荐的显示和隐藏
 var foryouTab = document.getElementById('foryou-tab');
 var foryouTabLi = foryouTab.getElementsByTagName('li');
 var container = document.getElementById('container');
 var containerDiv = container.getElementsByClassName('tablist');

 for(var i=0;i<foryouTabLi.length;i++){
     foryouTabLi[i].index = i;
     foryouTabLi[i].onmouseover=function(){
         for(var j=0;j<foryouTabLi.length;j++){
             foryouTabLi[j].className = '';
             containerDiv[j].style.display = 'none';
         }
         this.className = 'act';
         containerDiv[this.index].style.display = 'block';
     }
     for(var m=1;m<foryouTabLi.length;m++){
         foryouTabLi[m].className = '';
         containerDiv[m].style.display="none";
     }
 }

