new Vue({
   el: '#app',
   data: {
       title: 'Hello Vue!',
       link: 'https://google.com',
   },
   methods: {
       sayHello: function() {
           this.title = 'Hello!';
           return this.title;
       },
   },
});