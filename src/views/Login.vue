<template>
	<div class="mx-auto my-4">
		<v-card width="400" class="mx-auto mt-10">
			<v-card-title>
				<h1 class="display-1">Login</h1>
			</v-card-title>
			<v-card-text>
				<v-form>
					<v-text-field label="UserName" prepend-icon="mdi-account-circle" />
					<v-text-field :type="showPassword ? 'text' : 'password'" label="Password" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword" />
				</v-form>
			</v-card-text>
			<v-card-action>
				<v-btn color="info">Login</v-btn>
				
				<v-btn color="success">Register</v-btn>
			</v-card-action>
		</v-card>
	</div>
</template>

<script>
export default {
	data () {
		return {
			showPassword: false
		}
	}
};
</script>
