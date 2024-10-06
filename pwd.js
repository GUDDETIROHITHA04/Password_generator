function login(){
    let UN=document.getElementById("un").value;
    let pwd=document.getElementById("pwd").value;
    if(UN=='abcd' && pwd=='1234'){
        alert("login successfully");

    }
    else{
        alert("Invalid Account")
    }
}

function show(){
    let pwd=document.getElementById("pwd");
    if(pwd.type=='password'){
    pwd.type='text';
}
else{
    pwd.type='password'
}}