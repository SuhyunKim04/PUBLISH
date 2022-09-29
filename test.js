test1();
test2();
function test1() {
    let a = 3;
    let b = 4;
    const title = document.querySelector('.title');
    
    if(!title) {
        console.log('It is false');
        return false;
    }  

    title.style.color = 'red';
}


function test2() {
    const h1 = document.querySelector('.heading');

    if(!h1) {
        return false;
    }
    
    h1.style.color ='blue';
    h1.innerHTML = 'MANGO';


}