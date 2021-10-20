"use strict";
window.addEventListener("DOMContentLoaded",
    function(){
        if(typeof localStorage ==="undefined"){
            window.alert("このプラウザはLocal Storage機能が表示されていません");
            return;
        }else{
            viewStorage();    //localStrageからのデータ取得とテーブルへ表示
            saveLocalStorage();
        }
   }
);
function saveLocalStorage(){
    const save =document.getElementById("save");
        save.addEventListener("click",
            function(e){
                 e.preventDefault();
                 const key =document.getElementById("textKey").value;
                 const value = document.getElementById("textMemo").value;
                
                 if(key=="" || value ==""){
                     window.alert("key,Memoはいずれも必須です。");
                     return;
                 }else{
                    localStorage.setItem(key,value); 
                    viewStorage();    //localStrageからのデータ取得とテーブルへ表示
                    let w_msg="LocalStorageに"+key+""+value+"を保存しました。";
                    window.alert(w_msg);
                    document.getElementById("textKey").value="";
                    document.getElementById("textMemo").value="";
                 }
            },false
         );
}
//localStrageからのデータ取得とテーブルへ表示
function viewStorage(){
    const list=document.getElementById("list");

    while(list.rows[0])list.deleteRow(0);

    //localStrage all information
    for(let i=0;i<localStorage.length;i++){
     let w_key=localStorage.key(i);   

     //localStorage of key 値いand show
     let tr=document.createElement("tr");
     let td1=document.createElement("td");
     let td2=document.createElement("td");
     let td3=document.createElement("td");
     list.appendChild(tr);
     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);

     td1.innerHTML="<input name='radio1' type='radio'>";
     td2.innerHTML=w_key;
     td3.innerHTML=localStorage.getItem(w_key);

    }
};