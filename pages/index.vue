<template>
	<div class="home-page">
		<MainBlock />
		<OfferBlock />
		<AboutUsBlock />
		<AlreadyWorkingBlock />
		<HowWeWorkBlock />
	</div>
</template>

<script setup lang="ts">
	import AboutUsBlock from '~/components/index-page/AboutUsBlock.vue';
	import AlreadyWorkingBlock from '~/components/index-page/AlreadyWorkingBlock.vue';
	import HowWeWorkBlock from '~/components/index-page/HowWeWorkBlock.vue';
	import MainBlock from '~/components/index-page/MainBlock.vue';
	import OfferBlock from '~/components/index-page/OfferBlock.vue';
</script>

<style scoped lang="scss">
	.home-page {
		display: flex;
		grid-gap: 62px;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;

		width: 100%;
		height: 100%;
		padding: 8px;
	}
</style>
