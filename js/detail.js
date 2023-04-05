// 实现前进和后退（小图片）
let prev=document.querySelector(".prev");
let next=document.querySelector(".next");
let ul=document.querySelector(".spec-item ul");
let lis=document.querySelectorAll(".spec-item li");
prev.onclick=function(){
    ul.style.left="-112px";

}
next.onclick=function(){
    ul.style.left="0";
    }

    let mainimg=document.querySelector(".main-img-big")

    for (let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            for (let j =0;j<lis.length;j++){
                lis[j].className="";
            }
            lis[i].className="img-hover"
            mainimg.src=lis[i].children[0].src;
         
        }
        
    }
    //  鼠标划过哪个小图，放大镜里的图片地址相应的变为那个小图的地址
    $(".spec-item ul li img").mouseover(function(){
        $(".zoom-div img").attr("src",$(this).attr("src"));
    })



    let mainImg=document.querySelector(".main-img");
    let zoomPup=document.querySelector(".zoom-pup");
    let zoomDiv=document.querySelector(".zoom-div");
    let zoomDivImg=document.querySelector(".zoom-div img");
    mainImg.onmouseover=function(){zoomPup.style.display="block";
    zoomDiv.style.display="block";

    }
       mainImg.onmouseout=function(){zoomPup.style.display="none";
    zoomDiv.style.display="none";

    }
    mainImg.onmousemove=function(e){ 
        // 获取鼠标距离文档顶部的距离
        let pageY=e.pageY;
        let pageX=e.pageX;
        // 获取mainimg距离文档流顶部的距离
        let offsetTop=mainImg.offsetTop;
        let offsetLeft=mainImg.offsetLeft;
        // 获取黄色小块的高度的一半
         let h =zoomPup.clientHeight/2;
         let w =zoomPup.clientWidth/2;
         let top=pageY-offsetTop-h;
         let left=pageX-offsetLeft-w;
        
         if(top<=0){
            top=0;
         }else if(top>=mainImg.clientHeight-zoomPup.clientHeight){
            top=mainImg.clientHeight-zoomPup.clientHeight;
         };
         if(left<=0){
            left=0;
         }else if(left>=mainImg.clientWidth-zoomPup.clientWidth){
            left=mainImg.clientWidth-zoomPup.clientWidth;
         };
        
         zoomPup.style.top=top+"px"
         zoomPup.style.left=left+"px"
// 通过top占剩余空间的比例=大图里TOP占空间的比例，建立方程式，计算出大图要向上走多少
         let y=top/(mainImg.clientHeight-zoomPup.clientHeight);
         let bigY=y*(800-540);
         zoomDivImg.style.top=-bigY+"px";

         let x=left/(mainImg.clientWidth-zoomPup.clientWidth);
         let bigX=x*(800-540);
         zoomDivImg.style.left=-bigX+"px";

        
    }

 

    // 实现购物车数量的改变
    let reduce=document.querySelector(".reduce");
    let add=document.querySelector(".add");
    let buyNum=document.querySelector(".buy-num");
    add.onclick=function(){
        buyNum.value++;
        if(buyNum.value>1){
            reduce.className="reduce"

        }
    }
    reduce.onclick=function(){
        buyNum.value--;
        if(buyNum.value<1){
            buyNum.value=1;
            reduce.className="reduce disabled"

        }
    }
    



   