<template>
	<div class="layout-default">
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
		grid-auto-rows: 10% 1fr 350px;
		width: 100vw;
		height: 100vh;

		&__header {
			display: flex;
			width: 100%;
			height: 100%;
		}

		&__main {
			display: flex;
			width: 100%;
			height: auto;
			background-color: #14ae80;
		}

		&__footer {
			display: flex;
			width: 100%;
			height: 100%;
			max-height: 350px;
		}
	}
</style>
