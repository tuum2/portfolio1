/*window.addEventListener("DOMContentLoaded",function(){
    
   console.log("?");
    
});*/

//////// 전역변수구역 ////////

var pos1; //첫번째 박스 위치

var pno = 0; // 섹션번호

var scsts1 = 0;//첫번째 작동여부(0-작동전,1-작동후)

var scsts2 = 0;//메뉴파트 작동여부


	
	
//// 스크롤 구역 /////////////////
$(window).scroll(function(){
	
    var scTop = $(this).scrollTop();
    console.log("스크롤:"+scTop);
    
    // 스크롤바가 0을 떠날때 sns 와 메인로고 바꿔치기
	
    if(scTop > 0 && scsts2 === 0){
        scsts2 = 1;//잠금!
        $(".snsbx").addClass("on");
    } 
    else if (scTop === 0) {
        
        scsts2 = 0;
        $(".snsbx").removeClass("on");
		
    } //// if문 /////////////////////////
	
 
    // 스크롤바 위치가 첫번째 박스위치를 통과할때 글자색 변경!
	// 스크롤위치값이 
    if(scTop >= pos && scsts1 === 0){
        scsts1 = 1;//잠금!
        $(".gnb li a").css({color:"#000"});
		
        /*console.log("작동1");*/
    } ///// if 문 /////////////
    else if(scTop < pos && scsts1 === 1){
        scsts1 = 0;//잠금!
        $(".gnb li a,.main_logo").css({color:"#f7f817"});
       /* console.log("작동2");*/
    } //// if문 /////////////////////////
    
    
    
});//////// scroll ///////////


$(document).ready(function(){
    
    pos = $("section").eq(1).offset().top;
    console.log("박스2위치:"+pos);
    
    
  
}); //// jQB ///////////////