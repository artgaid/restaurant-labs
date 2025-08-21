<template>
	<div class="layout-default scroll">
		<header class="layout-default__header">
			<TheHeader />
		</header>
		<main class="layout-default__main">
			<slot />
		</main>
		<footer class="container layout-default__footer">
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
		display: grid;
		grid-auto-rows: 10% auto 350px;
		width: 100vw;
		height: 100vh;

		&__header {
			position: sticky;
			z-index: 100;
			top: 0; /* прилипает к верхней границе окна */

			display: flex;

			width: 100%;
			height: 100%;
		}

		&__main {
			display: flex;
			width: 100%;
			height: auto;
		}

		&__footer {
			display: flex;
			width: 100%;
			height: 100%;
			max-height: 350px;
		}
	}
</style>
