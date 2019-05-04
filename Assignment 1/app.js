new Vue({
    el: '#exercise',
    data: {
        name: "Jason",
        age: 26,
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png',
    },
    methods: {
        randInt: function(min, max) {
            return Math.random() * (+max - +min) + +min;
        }
    }
});