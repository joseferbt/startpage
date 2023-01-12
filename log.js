import axios from 'axios';

const loginbtn = document.getElementById('submitBtn') ;
const emailfield = document.getElementById('emailform');
const passwordfield = document.getElementById('pswform');



loginbtn.addEventListener('click',()=>{
    console.log("hola mundo");
    axios.post({
        method: "post",
        url:"http://127.0.0.1:5000/login",
        data :{
            email: emailfield.value,
            password: passwordfield.value
        }
    })
        .then(function (response){
            console.log(response.data);

        })
        .catch(function (error) {
            console.log(error);
        });
})


