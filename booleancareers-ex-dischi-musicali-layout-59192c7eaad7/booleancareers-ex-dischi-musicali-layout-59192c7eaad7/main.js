// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music
// Layout base:
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout
// Togliete $(document).ready(...) dal js


var app = new Vue ({
  el: '#app',
  data: {
    dischi: [],
    generi: ['All']
  },
  mounted(){
    for(let i = 0; i < 10; i++){
      axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        // console.log(result.data.response);
        this.dischi = result.data.response;
        // console.log(this.dischi[i].title);

        // popoliamo con i generi
        this.dischi.forEach((item) => {
          (!this.generi.includes(item.genre)) ? this.generi.push(item.genre) : '';
        });
      });
      // .catch()

    }
    console.log(this.generi);
  },
  methods: {
    filtraGenere(index){
      console.log(index);
      this.dischi.filter((item,i) => {
        if (item.genre == this.generi[i]){
          return item;
        }
        console.log(item);

      });




    }
  }
});
