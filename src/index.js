module.exports = function toReadable (number) {
  let int1=['','one','two','three','four','five','six','seven','eight','nine'];
  let int2=['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let int=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let str='',hun='hundred',n,n1,k=0;
  if(number==0) return 'zero';
  while(number>0){
    k=k+1;
    n1=n;
    n=number%10;
    number=(number-n)/10;
    if(k==1) str=int1[n];
    if(k==2){
        if(n1!=0) str=' '+str;
        if(n==1) str=int[n1];
        else if(n==0) continue;
        else str=int2[n]+str;
    }
    if(k==3){
        if(n1!=0) str=' '+str;
        str=int1[n]+' '+hun+str;
    }
    if(number==0) return str;
  }
}
