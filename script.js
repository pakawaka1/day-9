let body = document.querySelector('body');
body.className = 'container';

console.log(body);

let ul1 = document.createElement('ul'),
    li1 = document.createElement('li'),
    a1 = document.createElement('a'),
    li2 = document.createElement('li'),
    a2 = document.createElement('a'),
    li3 = document.createElement('li'),
    a3 = document.createElement('a');

a1.href ="https://www.facebook.com/";
a2.href ="https://www.facebook.com/";
a3.href ="https://www.facebook.com/";

a1.innerHTML = 'home';
a2.innerHTML ='about';
a3.innerHTML = 'projects';

li1.append(a1);
li2.append(a2);
li3.append(a3);
ul1.append(li1, li2, li3);

let form1 = document.createElement('form');

let li4 =document.createElement('li');

let input1 = document.createElement('input');
input1.placeholder = 'username';
input1.id = 'text1';
let input2 = document.createElement('input');
input2.placeholder = 'password';
input2.id = 'text2';
let input3 = document.createElement('input');
input3.type = 'submit';
input3.value = 'go';

form1.append(input1, input2, input3);
li4.append(form1);
ul1.append(li4);
body.append(ul1);
