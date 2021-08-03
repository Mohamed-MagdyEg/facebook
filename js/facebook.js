$(document).ready(function(){
  $("body").show(400)
  $(".center").fadeIn(3000)
  $(".left").fadeIn(3000)
  $("#shop1").click(function(){
    $(".centertwo").fadeIn(1000)
    $(".center").fadeOut()
  })
  $("#home1").click(function(){
    $(".centertwo").fadeOut()
    $(".center").fadeIn(1000)
  });
  $(".showMore").click(function(){
    $(".showMore").hide()
    $(".content2").fadeIn(1000)
  })
})
function home() {
  document.getElementById("home").style.color = "#1877f2";
  document.getElementById("home").style.borderBottom = "solid 4px #1877f2 ";
  document.getElementById("shop").style.color = "black";
  document.getElementById("shop").style.borderBottom = "solid 4px transparent ";
  document.getElementById("user").style.color = "black";
  document.getElementById("user").style.borderBottom = "solid 4px transparent ";
}

function shop() {
  document.getElementById("shop").style.color = "#1877f2";
  document.getElementById("shop").style.borderBottom = "solid 4px #1877f2 ";
  document.getElementById("home").style.color = "black";
  document.getElementById("home").style.borderBottom = "solid 4px transparent ";
  document.getElementById("user").style.color = "black";
  document.getElementById("user").style.borderBottom = "solid 4px transparent ";
  
}
function user() {
  document.getElementById("user").style.color = "#1877f2";
  document.getElementById("user").style.borderBottom = "solid 4px #1877f2 ";
  document.getElementById("home").style.color = "black";
  document.getElementById("home").style.borderBottom = "solid 4px transparent ";
  document.getElementById("shop").style.color = "black";
  document.getElementById("shop").style.borderBottom = "solid 4px transparent";
  document.getElementById("center").style.display = "none";
  document.getElementById("centertwo").style.display = "none";
  document.getElementById("groups").style.display = "block";
}
function search() {
  document.getElementById("search").style.visibility = "visible";
  document.getElementById("close").style.visibility = "visible";
}
function closee() {
  document.getElementById("close").style.visibility = "hidden";
  document.getElementById("search").style.visibility = "hidden";
}
function see() {
  document.getElementById("see").style.display = "none";
  $("#zam").slideDown(200);
  $("#gro").slideDown(300);
  $("#fri").slideDown(400);
 $("#egy").slideDown(500);
}
function post() {
  p = document.getElementById("post").value;
  document.getElementById("new").innerHTML +='<div  class="newPost"><div><img src="images/me.jpg" alt="" class="newpic"><span class="myName" >mohamed magdy</span></div><div class="new" id="new" style="width:100% ; height:200px; background:white; font-size:20px"><div style="margin-top:10px; margin-left:10px; font-size:20px;font-weight:bolder;"> ' +p+'</div></div> <div style=" position: absolute; bottom: 1%;left: 1%;"><button  class="likebutton" id="likebutton" onclick="like2()"><i class="fa fa-thumbs-up" aria-hidden="true" id="likeicon2"></i> <span style="font-size: 20px; font-weight: bold; color: #65676b;" id="likename2">like</span></button></div> <div style=" position: absolute; bottom: 1%; left: 50%;"> <button class="commentbutton" id="commentbutton" onclick="comment2()"><i class="fa fa-comment-o" aria-hidden="true" id="commenticon2"></i> <span style="font-size: 20px; font-weight: bold; color: #65676b;"id="commentname2" >comment</span></button></div></div></div> ';
}
function like() {
  document.getElementById("likename").style.color = "#176ad8";
  document.getElementById("likeicon").style.color = "#176ad8";
}

function comment() {
  document.getElementById("commenticon").style.color = "#176ad8";
  document.getElementById("commentname").style.color = "#176ad8";
}
function like2() {
    document.getElementById("likename2").style.color = "#176ad8";
    document.getElementById("likeicon2").style.color = "#176ad8";
  }
  
  function comment2() {
    document.getElementById("commenticon2").style.color = "#176ad8";
    document.getElementById("commentname2").style.color = "#176ad8";
  }
function first() {
  document.getElementById("first").style.visibility = "visible";
  document.getElementById("first").style.transition = "linear .2s";
}
function firstout() {
  document.getElementById("first").style.visibility = "hidden";
  document.getElementById("first").style.transition = "linear .2s";
}
function firstt() {
  document.getElementById("first").style.visibility = "visible";
  document.getElementById("first").style.transition = "linear .2s";
}
function firstoutt() {
  document.getElementById("first").style.visibility = "hidden";
  document.getElementById("first").style.transition = "linear .2s";
}
function first2() {
  document.getElementById("first2").style.visibility = "visible";
}
function firstout2() {
  document.getElementById("first2").style.visibility = "hidden";
}
function firstt2() {
  document.getElementById("first2").style.visibility = "visible";
}

function firstoutt2() {
  document.getElementById("first2").style.visibility = "hidden";
}
function first3() {
  document.getElementById("first3").style.visibility = "visible";
}
function firstout3() {
  document.getElementById("first3").style.visibility = "hidden";
}
function firstt3() {
  document.getElementById("first3").style.visibility = "visible";
}
function firstoutt3() {
  document.getElementById("first3").style.visibility = "hidden";
}
function first4() {
  document.getElementById("first4").style.visibility = "visible";
}
function firstout4() {
  document.getElementById("first4").style.visibility = "hidden";
}
function firstt4() {
  document.getElementById("first4").style.visibility = "visible";
}
function firstoutt4() {
  document.getElementById("first4").style.visibility = "hidden";
}
function first5() {
  document.getElementById("first5").style.visibility = "visible";
}
function firstout5() {
  document.getElementById("first5").style.visibility = "hidden";
}
function firstt5() {
  document.getElementById("first5").style.visibility = "visible";
}
function firstoutt5() {
  document.getElementById("first5").style.visibility = "hidden";
}
function first6() {
  document.getElementById("first6").style.visibility = "visible";
}
function firstout6() {
  document.getElementById("first6").style.visibility = "hidden";
}
function firstt6() {
  document.getElementById("first6").style.visibility = "visible";
}
function firstoutt6() {
  document.getElementById("first6").style.visibility = "hidden";
}
function first7() {
  document.getElementById("first7").style.visibility = "visible";
}
function firstout7() {
  document.getElementById("first7").style.visibility = "hidden";
}
function firstt7() {
  document.getElementById("first7").style.visibility = "visible";
}
function firstoutt7() {
  document.getElementById("first7").style.visibility = "hidden";
}
function first8() {
  document.getElementById("first8").style.visibility = "visible";
}
function firstout8() {
  document.getElementById("first8").style.visibility = "hidden";
}
function firstt8() {
  document.getElementById("first8").style.visibility = "visible";
}
function firstoutt8() {
  document.getElementById("first8").style.visibility = "hidden";
}
function closeMessage() {
$("#messageBox").slideUp(200);
}
function Send() {
  m = document.getElementById("message").value;
  f = document.getElementById("firstMessage").innerHTML;
  document.getElementById("message").value = "";
  document.getElementById("firstMessage").innerHTML +=
    '<div style="background-color: #eeeeee;margin: 20px 100px 0px 3px;border-radius: 10px; display="block;box-sizing: border-box;padding:1px" id="firstMessage" >' + m +"</div>";
}

function firstAhmed1() {
  $("#messageBox").slideDown(200);
  
  s = document.getElementById("cont1").innerHTML;
  document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
}
function firstAhmed2() {
    $("#newbox").slideDown(200);
    s = document.getElementById("cont2").innerHTML;
    document.getElementById("top-message").style.display="block";
    document.getElementById("newbox").innerHTML='<div id="newbox" class="newbox"><div class="top-message2" id="top-message2"style="position:absolute;top: 0%;background-color: #cecece33; width:100% ;height: 50px;border-radius: 10px 10px 0 0;"> <div class="namemessage2"><img src="images/me.jpg" alt="" class="picmessage2"><i class="fa fa-times" aria-hidden="true" id="close-message2" onclick="closeMessage2()"></i> </div></div><div class="main-message2"><div  id="firstMessage2"></div></div><div class="bottom-message2"> <input type="text"  class="message2" placeholder="Enter To Send" id="message2"><i class="fa fa-paper-plane" aria-hidden="true"  onclick="Send2()"></i><i class="fa fa-heart" aria-hidden="true"></i></div></div>';
  }
  function closeMessage2() {
    $("#newbox").slideUp(200);
  }
  function Send2() {
    m = document.getElementById("message2").value;
    f = document.getElementById("firstMessage2").innerHTML;
    document.getElementById("message2").value = "";
    document.getElementById("firstMessage2").innerHTML +=
      '<div style="background-color: #eeeeee;margin: 20px 100px 0px 3px;border-radius: 10px; display="block;box-sizing: border-box;padding:1px" id="firstMessage2" >' + m +"</div>";
  }
  function firstAhmed3() {
    document.getElementById("messageBox").style.display = "block";
    s = document.getElementById("cont3").innerHTML;
    document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
  }
  function firstAhmed4() {
    document.getElementById("messageBox").style.display = "block";
    s = document.getElementById("cont4").innerHTML;
    document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
  }
  function firstAhmed5() {
    document.getElementById("messageBox").style.display = "block";
    s = document.getElementById("cont5").innerHTML;
    document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
  }
  function firstAhmed6() {
    document.getElementById("messageBox").style.display = "block";
    s = document.getElementById("cont6").innerHTML;
    document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
  }
  function firstAhmed7() {
    document.getElementById("messageBox").style.display = "block";
    s = document.getElementById("cont7").innerHTML;
    document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
  }
  function firstAhmed8() {
    document.getElementById("messageBox").style.display = "block";
    s = document.getElementById("cont8").innerHTML;
    document.getElementById("nameme").innerHTML ='<span id="nameme"style="font-size: 20px;font-weight: bold;">'+s+'</span>';
  }
