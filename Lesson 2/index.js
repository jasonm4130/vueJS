new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue!',
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});