<template>
	<div class="slideshow">
		<v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover >
       	<v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" ></v-carousel-item>
    </v-carousel>
	</div>
</template>

<script>

export default {
  	data () {
    	return {
      	items: [
          	{src: require('@/assets/11.jpg'),},
          	{src: require('@/assets/22.jpg'),},
            {src: require('@/assets/33.jpg'),},
            {src: require('@/assets/44.jpg'),},
        ],
    }
  }
};
</script>

