const app = Vue.createApp({
    data(){
        return{
            firstName: 'George',
            lastName: 'Mohan Bastiampillai',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/12.jpg',
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            //console.log(results)

            this.firstName = results[0].name.firstName
            this.lastName = results[0].name.last
            this.gender= results[0].gender
            this.picture= results[0].picture.large
        },
    },
})

app.mount('#app')