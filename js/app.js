  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  Vue.createApp({
    data() {
        return {
            index: 0
        }
    },
  
    methods: {
        imageLeft(){
          
          if (this.index > 0){
            this.index--
          }
          else {
            return this.index = 4
          } 
        console.log("izquieda " + this.index);
        },
        imageRight(){

        if (this.index < pictures.length - 1){
          this.index++
        }
        else {
          return this.index = 0
        }
        console.log("derecha" + this.index)
        }
    
    },

    computed: {
      getUrl(){
        return `url("../img/${pictures[this.index]}.jpeg")`
        
      }
    }
  }).mount('#app')
