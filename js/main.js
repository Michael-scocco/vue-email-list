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


//correzione fabio
const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        images: [
            'https://scitechdaily.com/images/Mars-Red-Planet-Highlights-scaled.jpg',
            'https://media.newyorker.com/photos/60994dabccd28612d3013cec/master/pass/Mann-SpaceEthics.jpg',
            'https://cdn.britannica.com/24/73524-050-3C2F3432/result-seasons-Mars-planet-inclination-plane-cap.jpg',
            'https://cdn.mos.cms.futurecdn.net/iWG5zg5Mpt8AvZqc4vYa4K.jpg'
        ],
        text:'Hello',
        textHTML: '<h1>Hello</h1>',
        disButton: true,
        number: 10,
        ok: true
       

    },
    methods:{
        prev(){
            // do something
            console.log('Cliccato su prev');
            if(this.counter === 0){   
                return this.counter = this.images.length -1
            }
            return this.counter -= 1

        },
        next(){
            // do something
            console.log('Cliccato su next');
            
            if(this.counter === this.images.length -1){
               
                return this.counter = 0
            }
            return this.counter += 1

        },

        selectImage(index){
            console.log(index);
            return this.counter = index
        }

    },
    mounted(){
        // Add event listener for keys events
      document.addEventListener('keyup', (e) => {  
        if(e.key === 'ArrowRight'){  
            this.next();
        }
        if(e.key === 'ArrowLeft'){
            this.prev();
        }
      })

        // Add infinite sliding

      setInterval(this.next, 5000)
    }
})