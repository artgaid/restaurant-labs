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
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;

		&__header {
			display: flex;

			width: 100vw;
			height: 100%;
			min-height: 5%;
			max-height: 10%;
		}

		&__main {
			display: flex;

			width: 100vw;
			height: auto;
			min-height: 70%;

			background-color: #14ae80;
		}

		&__footer {
			display: flex;

			width: 100vw;
			height: 30%;
			max-height: 30%;

			background-color: #76787c;
		}
	}
</style>
