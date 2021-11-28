<template>
  <v-app>
    <v-system-bar
    height="20"
  ></v-system-bar>


    <template>
  <div>
    <v-app-bar
      app clipped left
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Mytoolbar</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn
              color="warning"
              fab
              dark
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>





     
     
     <v-navigation-drawer permanent left app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Enrico ProjectONE
          </v-list-item-title>
          <v-list-item-subtitle>
            Side bar
          </v-list-item-subtitle>
          <v-btn
              color="warning"
              fab
              dark
            >
              <v-icon>mdi-account-circle</v-icon>
            </v-btn>
          <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    



    
    <v-main>
      <router-view/>
    </v-main>

      <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>


    <v-bottom-navigation
    :value="value"
    color="teal"
    grow
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>


  </v-app>

</template>

<script>
  export default {
    data: () => ({ value: 1 }),
  }
</script>