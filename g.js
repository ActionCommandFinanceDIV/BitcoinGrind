var s=[
"gin.htm",
"https://autofaucet.io/?r=33F3d8vjtBBQn4rn799ENYSVYx3up5AEBy",
"http://moonbit.co.in/?ref=dbaba97e6169",
"http://worldofbitco.in/198129",
"http://claimbtc.com/?r=c62340d1ef",
"http://takefreebitcoin.com/?r=8834918626",
"http://bonusbitcoin.co/?ref=9FDC0CF3A8CA",
"https://freebitco.in/?r=4475997",
"http://btc-faucet.co/?r=13LhEUj9CznymRP15icSyQVzPBmJ8cNDaB",
"http://www.trustbtcfaucet.com/?ref=tewksbg",
"https://pocketdice.io/?r=829759d3a6",
"http://fieldofbitcoin.com/?r=140573",
"http://mycoin.win/?a=4186",
"http://epay.info/rotator/2222480"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
