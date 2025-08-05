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

		display: flex;
		flex-direction: column;

		&__header {
			width: 100vw;
			height: auto;
			max-height: 20vh;
			display: flex;

			background-color: #9fcbd2;
		}

		&__main {
			width: 100vw;
			height: auto;
			min-height: 70%;
			display: flex;

			background-color: #14ae80;
		}

		&__footer {
			width: 100vw;
			height: 30%;
			max-height: 30%;
			display: flex;

			background-color: #76787c;
		}
	}
</style>
