// Task 5 - Submit data to Json Placeholder
/*
Create form with the following fields: name, username, email, phone, website.
When you fill the form and hit submit button it must send POST request on the 
following URL: https://jsonplaceholder.typicode.com/users.
All fields are required. If you leave one field empty and submit the form, 
request must not be make and that field must become red: 
https://getbootstrap.com/docs/4.2/components/forms/#server-side

Add button "Load random user" above the table, which generates random number (from 1 to 10) 
and makes request on the following url: https://jsonplaceholder.typicode.com/users/{random}
fetches the user and loads that inside the form. 

When you submit the form it will make put request on the same url from which user was 
grabbed and update that user.
Hint: If user does not have ID, you should make POST request, otherwise put request.
*/
// ========================================================
var url=''
async function randUser(){
    let name=document.getElementById('name');
    let username=document.getElementById('username');
    let email=document.getElementById('email');
    let website=document.getElementById('website');
    let phone=document.getElementById('phone');
    let rand=Math.floor(Math.random() * 10)+1
    url=`https://jsonplaceholder.typicode.com/users/${rand}`
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        name.value=json.name;
        username.value=json.username;
        email.value=json.email;
        website.value=json.website;
        phone.value=json.phone;
    });

}



async function postRequest(){
    let isValid = true;
    let name=document.getElementById('name');
    let username=document.getElementById('username');
    let email=document.getElementById('email');
    let website=document.getElementById('website');
    let phone=document.getElementById('phone');
    let arr=[name,username,email,website,phone];
    
    arr.forEach(el => {
        if(el.value==''){
            el.classList.add('is-invalid');
            el.placeholder=`please input valid ${el.id}`;
            isValid=false;
        }
        console.log(el.value)
    });

    if(isValid){
        if(url===''){
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    name: name.value,
                    username: username.value,
                    email: email.value,
                    website: website.value,
                    phone: phone.value
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log('response: ' + JSON.stringify(json));
            })
        } 
        else {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    name: name.value,
                    username: username.value,
                    email: email.value,
                    website: website.value,
                    phone: phone.value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            url='';
        }
        name.value=null;
        username.value=null;
        email.value=null;
        website.value=null;
        phone.value=null;
    }
        
}
