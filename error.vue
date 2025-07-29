<template>
	<NuxtLayout :name="'404'">
		<div class="container page-404">
			<div class="mb-24 text-bold">You've Arrived Here on Error, boss.</div>
			<div class="w-32">
				<button @click="goBack">Back</button>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
	import { useRouter } from 'vue-router';

	const router = useRouter();
	const goBack = () => {
		router.push('/');
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
	}
</style>
