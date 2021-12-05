<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{cardInfo.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
    {{cardInfo.description}}
    </v-card-subtitle>

    
  </v-card>
</template>

<script>
  export default {
      props:['cardid','cardInfo']
  }
</script>