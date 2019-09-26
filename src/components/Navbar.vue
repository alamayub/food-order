<template>
	<div>
		<v-app-bar app>
			<v-app-bar-nav-icon class="d-flex d-sm-none blue--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-btn icon text color="blue accent-2--text mx-1" class="d-none d-sm-flex" v-for="social in socials" :key="social.text" link :to="social.route">
    			<v-icon size="20px">{{ social.icon }}</v-icon>
  			</v-btn>
  			<v-spacer></v-spacer>
			<v-app-bar-title class="text-center">
				<h1>FoodCourt</h1>
			</v-app-bar-title>
			<v-spacer></v-spacer>

			<!--<v-autocomplete v-model="select" hide-no-data hide-details label="Wanna eat somthing?" solo ></v-autocomplete>
    		<v-btn class="green red--text" >
      			<v-icon class="green">mdi-search</v-icon>
    		</v-btn>-->

			<v-btn class="d-none d-sm-flex" text color="blue accent-2--text mx-1" v-for="left in lefts" :key="left.text" link :to="left.route">
				<span>{{ left.text }}</span>
			</v-btn>

			<v-btn class="d-flex d-sm-none" icon text color="blue accent-2--text" v-for="left in lefts" :key="left.text" link :to="left.route">
				<v-icon>{{ left.icon }}</v-icon> 
			</v-btn>
		</v-app-bar>
  		<v-card>
   			<v-navigation-drawer app class="primary" v-model="drawer">
      			<v-list>
        			<v-list-item v-for="link in links" :key="link.text" link :to="link.route">
          				<v-list-item-icon >
            				<v-icon>{{ link.icon }}</v-icon>
          				</v-list-item-icon>

          				<v-list-item-content>
            				<v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          				</v-list-item-content>
        			</v-list-item>
      			</v-list>
    	    </v-navigation-drawer>
  		</v-card>
	</div>
</template>


<script>
export default {
	data () {
		return {
			lefts: [
				{ icon: 'far fa-home', text: 'Home', route: '/'},
				{ icon: 'far fa-user', text: 'Login', route: '/login' },
				{ icon: 'fas fa-cart-plus', text: 'Cart', route: '/cart' },
			],
			nav: true,
			socials: [
				{icon: 'fab fa-facebook-f', text: 'facebook', route: '/facebook'},
				{icon: 'fab fa-twitter', text: 'twitter', route: '/twitter'},
				{icon: 'fab fa-instagram', text: 'instagram', route: '/instagram'},
				{icon: 'fab fa-youtube', text: 'youtube', route: '/youtube'},
				{icon: 'fab fa-google-plus-g', text: 'google plus', route: '/gplus'},
				{icon: 'fab fa-linkedin-in', text: 'linkdin', route: '/linkdin'},
			],
			drawer: false,
			links: [
				{ icon: 'dashboard', text: 'Dashboard', route: '/' },
				{ icon: 'folder', text: 'My Projects', route: '/projects' },
				{ icon: 'person', text: 'Team', route: '/team' },
			],
		}
	}
};
</script>

<style>
	h1 {
		color: #3498db;
	}
</style>

