let decrease=document.getElementsByClassName('decrease')[0];
let reset=document.getElementsByClassName('reset')[0];
let increase=document.getElementsByClassName('increase')[0];
let count_container=document.getElementsByClassName('count-container')[0];
let count=0;
function change_count_descriptor()
{
    if(count<0)
    {
        count_container.style.color='red';
    }
    else if(count==0)
    {
        count_container.style.color='black';
    }
    else if(count>0)
    {
        count_container.style.color='green';
    }
    count_container.innerText=`${count}`;
}
decrease.addEventListener('click',function(){
    count--;
    change_count_descriptor();
})
increase.addEventListener('click',function(){
    count++;
    change_count_descriptor();
})
reset.addEventListener('click',function(){
    count=0;
    change_count_descriptor();
})