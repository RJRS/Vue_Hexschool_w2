import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
data() {
    return {

    // api_path: "rjrs",
    user: {
        username: "",
        password: "",
    },
  }
},
methods:{
    login(){
        const url = "https://vue3-course-api.hexschool.io";
        // console.log(this.user)
        axios.post(`${url}/v2/admin/signin`, this.user)
        .then((res) => {
            console.log(res);
            const {token, expired} = res.data;
            document.cookie = `hexschool=${token};expires=${new Date(expired)};`;
            window.location = 'products.html';
          })
        .catch((err) => {
            console.log(err);
            alert(err.data.message);
        });
        }
    }
}).mount('#app')
