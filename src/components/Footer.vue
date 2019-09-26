<template>
  <v-footer dark padless clASS="COL-12">
    <v-card flat tile class="blue accent-2--text white--text text-center" >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="white--text mx-1" icon>
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 d-none d-sm-flex">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>LPU Food Court</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook-f',
        'fab fa-twitter',
        'fab fa-instagram',
        'fab fa-youtube',
        'fab fa-google-plus',
        'fab fa-linkedin',
      ],
    }),
  }
</script>