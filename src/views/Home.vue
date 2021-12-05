<template>
  <div>
    
    <v-row>
      <v-col
        v-for = "(data,i) in events"
          :key = "i"
          cols="12"
          sm="6"
          md="4"
          xs='2'

          >
          
            <Mycard  :cardInfo="data"> </Mycard>

      </v-col>
      </v-row>
  
  
  </div>
</template>

<script>
import Mycard from '../components/Mycard'


  export default {
    name: 'Home',
    data(){
      return{

      }
    },
    computed: {
      myCards(){
        return this.$store.state.cards
      },
      events(){
        return this.$store.state.events
      }

    },

    components: {
      Mycard
    },
    async created(){
      this.$store.dispatch("fetchEvents")
      
    }
  }
</script>
