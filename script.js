
     turn =1;
     t=0;
     var m = 0;
             a = ".";
             b = ".";
             c = ".";
             a1 = ".";
             b1 = ".";
             c1 = ".";
             a2 = ".";
             b2 = ".";
             c2 = ".";
            r = 0;
            stale=0;
            cross =0;
            cross1 =0;
            cross2 =0;
            over =1;
            down = 0;
            down1 = 0;
            down2 = 0;
            
            dia = 0;
            dia1 = 0;
            
            cont=0;
            
            crossx =0;
            crossx1 =0;
            crossx2 =0;
            
            downx = 0;
            downx1 = 0;
            downx2 = 0;
            
            diax = 0;
            diax1 = 0;
            
          //  r = 1 +Math.floor(Math.random() * 9);
        
            us = 0;








function myFunction1(){ if(document.getElementById("d1").innerHTML =="_") {stale+=1;m+=1; a = "X";  us +=1; crossx +=1; diax+=1; downx+=1; document.getElementById("d1").innerHTML = "X"; r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction2(){ if(document.getElementById("d2").innerHTML =="_") {stale+=1;m+=1; a1 = "X"; us +=1;  crossx +=1; downx1+=1;  document.getElementById("d2").innerHTML = "X";r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction3() {if(document.getElementById("d3").innerHTML =="_" ){stale+=1;m+=1; a2 = "X"; us +=1;  crossx +=1; diax1+=1;document.getElementById("d3").innerHTML = "X"; downx2 +=1;  r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction4() {if(document.getElementById("d4").innerHTML =="_" ){stale+=1;m+=1; b = "X"; us +=1; crossx1 +=1; downx+=1;  document.getElementById("d4").innerHTML = "X";r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction5() {if(document.getElementById("d5").innerHTML =="_" ){stale+=1;m+=1;b1 = "X"; us +=1;  crossx1 +=1; downx1+=1; document.getElementById("d5").innerHTML = "X";diax += 1; diax1 += 1;  r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction6() {if(document.getElementById("d6").innerHTML =="_" ){stale+=1;m+=1; b2 = "X"; us +=1; crossx1 +=1; downx2+=1; document.getElementById("d6").innerHTML = "X";r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction7() {if(document.getElementById("d7").innerHTML =="_" ){stale+=1;m+=1; c = "X";  us +=1; crossx2 +=1; downx+=1; document.getElementById("d7").innerHTML = "X";diax1 += 1; r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction8() {if(document.getElementById("d8").innerHTML =="_" ){stale+=1;m+=1; c1 = "X"; us +=1;  crossx2 +=1; downx1+=1; document.getElementById("d8").innerHTML = "X";r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}
function myFunction9() {if(document.getElementById("d9").innerHTML =="_" ){stale+=1;m+=1; c2 = "X"; us +=1;  crossx2 +=1; downx2+=1;document.getElementById("d9").innerHTML = "X"; diax += 1; r = 1 +Math.floor(Math.random() * 9);turn =0;myFunction12()}}




function myFunction12() {if(turn==0){if(over==1){
    //console.log("m: "+m);
    if(m<=4){
    //console.log("turn");
   r = 1 +Math.floor(Math.random() * 9);
	//console.log("r = " +r);
   // console.log("turninwhile");





if(turn==0){

        if(diax ==2){
            if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O") {document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}
        if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
        if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}}
        
        if(diax1 ==2){
        if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }
        if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
        if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}
        }
    
}
if(turn==0){

        if(dia ==2){
            if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O") {document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}
        if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
        if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}
        }
        if(dia1 ==2){
        if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }
        if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
        if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}
        }
    
}




       







if(turn==0){
if(down ==2){
    if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O") {document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}
    if(document.getElementById("d4").innerHTML !="X" && document.getElementById("d4").innerHTML !="O") {document.getElementById("d4").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down+=1;}
    if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}}
    
if(down1 ==2){
    if(document.getElementById("d2").innerHTML !="X" && document.getElementById("d2").innerHTML !="O") {document.getElementById("d2").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; down1+=1;}
    if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
    if(document.getElementById("d8").innerHTML !="X" && document.getElementById("d8").innerHTML !="O") {document.getElementById("d8").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down1+=1;}
}

if(down2 ==2){
     if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }
     if(document.getElementById("d6").innerHTML !="X" && document.getElementById("d6").innerHTML !="O") {document.getElementById("d6").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down2+=1;}
     if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}
}}
if(turn==0){
if(cross ==2){
    if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O"){ document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}
    if(document.getElementById("d2").innerHTML !="X" && document.getElementById("d2").innerHTML !="O") {document.getElementById("d2").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; down1+=1;}
    if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }
    
}

if(cross1 ==2){
    if(document.getElementById("d4").innerHTML !="X" && document.getElementById("d4").innerHTML !="O") {document.getElementById("d4").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down+=1;}
    if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
    if(document.getElementById("d6").innerHTML !="X" && document.getElementById("d6").innerHTML !="O") {document.getElementById("d6").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down2+=1;}
 
}

if(cross2 ==2){
    if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}
    if(document.getElementById("d8").innerHTML !="X" && document.getElementById("d8").innerHTML !="O") {document.getElementById("d8").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down1+=1;}
    if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}
  
}}

if(turn==0){

    if(downx ==2){
    if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O") {document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}
    if(document.getElementById("d4").innerHTML !="X" && document.getElementById("d4").innerHTML !="O") {document.getElementById("d4").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down+=1;}
    if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}}
    
    if(downx1 ==2){
    if(document.getElementById("d2").innerHTML !="X" && document.getElementById("d2").innerHTML !="O") {document.getElementById("d2").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; down1+=1;}
    if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
    if(document.getElementById("d8").innerHTML !="X" && document.getElementById("d8").innerHTML !="O") {document.getElementById("d8").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down1+=1;}
    }

    if(downx2 ==2){
     if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }
     if(document.getElementById("d6").innerHTML !="X" && document.getElementById("d6").innerHTML !="O") {document.getElementById("d6").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down2+=1;}
     if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}
    }}
    if(turn==0){
if(crossx ==2){
    if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O"){ document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}
    if(document.getElementById("d2").innerHTML !="X" && document.getElementById("d2").innerHTML !="O") {document.getElementById("d2").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; down1+=1;}
    if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }
    
}

if(crossx1 ==2){
    if(document.getElementById("d4").innerHTML !="X" && document.getElementById("d4").innerHTML !="O") {document.getElementById("d4").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down+=1;}
    if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}
    if(document.getElementById("d6").innerHTML !="X" && document.getElementById("d6").innerHTML !="O") {document.getElementById("d6").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down2+=1;}
 
}

if(crossx2 ==2){
    if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}
    if(document.getElementById("d8").innerHTML !="X" && document.getElementById("d8").innerHTML !="O") {document.getElementById("d8").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down1+=1;}
    if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}
  
}}
    if(turn==0){

    if(document.getElementById("d1").innerHTML !="X" && document.getElementById("d1").innerHTML !="O") {if(r ==1 ){document.getElementById("d1").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia+=1; down+=1;}}
    if(document.getElementById("d2").innerHTML !="X" && document.getElementById("d2").innerHTML !="O") {if(r ==2 ){document.getElementById("d2").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; down1+=1;}}
    if(document.getElementById("d3").innerHTML !="X" && document.getElementById("d3").innerHTML !="O") {if(r ==3 ){document.getElementById("d3").innerHTML = "O";stale+=1;turn=1; cont +=1; cross +=1; dia1+=1; down2 +=1; }}
    if(document.getElementById("d4").innerHTML !="X" && document.getElementById("d4").innerHTML !="O") {if(r ==4 ){document.getElementById("d4").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down+=1;}}
    if(document.getElementById("d5").innerHTML !="X" && document.getElementById("d5").innerHTML !="O") {if(r ==5 ){document.getElementById("d5").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down1+=1; dia += 1; dia1 += 1;}}
    if(document.getElementById("d6").innerHTML !="X" && document.getElementById("d6").innerHTML !="O") {if(r ==6 ){document.getElementById("d6").innerHTML = "O";stale+=1;turn=1; cont +=1; cross1 +=1; down2+=1;}}
    if(document.getElementById("d7").innerHTML !="X" && document.getElementById("d7").innerHTML !="O") {if(r ==7 ){document.getElementById("d7").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down+=1; dia1 += 1;}}
    if(document.getElementById("d8").innerHTML !="X" && document.getElementById("d8").innerHTML !="O") {if(r ==8 ){document.getElementById("d8").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down1+=1;}}
    if(document.getElementById("d9").innerHTML !="X" && document.getElementById("d9").innerHTML !="O") {if(r ==9 ){document.getElementById("d9").innerHTML = "O";stale+=1;turn=1; cont +=1; cross2 +=1; down2+=1; dia += 1;}}
    r = 1 +Math.floor(Math.random() * 9);
    }}
if (crossx == 3) {t=1;}
if (crossx1 == 3) {t=1;}
if (crossx2 == 3) {t=1;}
if (downx == 3) {t=1;}
if (downx1 == 3) {t=1;}
if (downx2 == 3) {t=1;}
if (diax == 3) {t=1;}
if (diax1 == 3) {t=1;}

if(t<1) {
if (cross == 3) { t=2; console.log("Cross = 3");}
if (cross1 == 3) { t=2; console.log("Cross1 = 3");}
if (cross2 == 3) { t=2; console.log("Cross2 = 3");}
if (down == 3) {t=2; console.log("Down = 3");}
if (down1 == 3) {t=2; console.log("Down1 = 3");}
if (down2 == 3) {t=2; console.log("Down2 = 3");}
if (dia == 3) {t=2; console.log("Dia = 3");}
if (dia1 == 3) {t=2; console.log("Dia1 = 3");}
}

if(t==2){
    console.log("youlose");
    document.getElementById("out").innerHTML = "You Lose";
    //document.getElementById("margina").style="display: none;";
}
if(t==1){
console.log("youwin");
//document.getElementById("margina").style="display: none;";
document.getElementById("out").innerHTML = "You Win";
stale =0;
}


if(t!=1 && t!=2){
if(stale==9){
    over=0;
    console.log("staleyoulose");
    document.getElementById("out").innerHTML = "Stalemate";
  //document.getElementById("margina").style="display: none;";
}
}




if(t==0){
    myFunction12()}
    
  //a  
        
  }  }}
    
