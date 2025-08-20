<template>
	<div class="home-page">
		<MainBlock />
	</div>
</template>

<script setup lang="ts">
	import MainBlock from '~/components/index-page/MainBlock.vue';
</script>

<style scoped lang="scss">
	.home-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		width: 100%;
		height: 100%;
		padding: 8px;
	}
</style>
