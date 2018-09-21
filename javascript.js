alert("Bad guy walks up to you with A KNIFE.  CHOOSE YOUR WEAPON");
let weapon = prompt("You go into your bag and look for a weapon.  You can use a knife, gun, pencil, or rubberband to defend yourself.  Which do you choose?")
alert("You defend yourself with your " + weapon)

let randomNumber = Math.round(Math.random());

if(randomNumber === 0){
    alert("Sorry you got killed")


}else{
    alert("You successfully killed him!")


}