function logIn()
{
    Name=document.getElementById("user_name").value;
    localStorage.setItem("username", Name);
    window.location="Kwitter_room.html";
}