<template>
	<div class="home">

    <Slideshow />

		<section class="mx-4 my-4">

      <h1 >Restaurant Items</h1>
      <v-card class="mx-auto" >
        <v-container >
          <v-item-group v-model="selected" multiple >
            <v-row>
              <v-col v-for="(image, i) in images" :key="i" col="12" md="3" xs="6">
                <router-link to="/demo">
                  <v-item v-slot:default="{ active, toggle }">
                    <v-img :src="image" height="150" class="text-right pa-2" @click="toggle" >
                      <!--<v-btn icon dark>
                        <v-icon>
                          {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                        </v-icon>-->
                      </v-btn>
                    </v-img>
                  </v-item>
                </router-link>
              </v-col>
            </v-row>
          </v-item-group>
        </v-container>
      </v-card>

    </section>
	</div>
</template>

<script>
import Slideshow from '@/components/Slideshow'

export default {
  name: 'App',
  components: { Slideshow, },
  data () {
    return {
      images: [
        require('@/assets/11.jpg'),
        require('@/assets/22.jpg'),
        require('@/assets/33.jpg'),
        require('@/assets/44.jpg'),
      ],
      selected: [],
    }
  }
};
</script>
