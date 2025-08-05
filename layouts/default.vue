<template>
	<div class="layout-default">
		<header class="layout-default__header">
			<TheHeader />
		</header>
		<main class="layout-default__main">
			<slot />
		</main>
		<footer class="layout-default__footer">
			<TheFooter />
		</footer>
	</div>
</template>

<script setup lang="ts">
	import TheFooter from '~/components/TheFooter.vue';
	import TheHeader from '~/components/TheHeader.vue';
</script>

<style scoped lang="scss">
	.layout-default {
		width: 100vw;
		height: 100vh;

		background-color: blanchedalmond;
	}
</style>
