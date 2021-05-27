/*
Esercizio di oggi, Vue Email List nome repo:
vue-email-list
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Le slide sono su drive! a breve anche il coding di oggi
*/
const app = new Vue({
    el: '#app',
    data: {
        listaEmail:[],
    },
    methods:{

    },
    mounted(){
        var i =0;
        while(i < 10){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")//questo ci promette di darci una risposta;
        .then(response => {
            console.log(response.data.response);
            this.listaEmail.push(response.data.response);
        })
        i++;
        };
        
    },

})