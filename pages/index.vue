<template>
	<div class="home-page">
		<MainBlock />

		<div class="container home-page__content">
			<OfferBlock />
			<AboutUsBlock />
			<AlreadyWorkingBlock />
			<HowWeWorkBlock />
			<ReferralProgramBlock />
			<InfoBlogBlock />
			<SubmitRequestBlock />
			<RewiesBlock />
		</div>
	</div>
</template>

<script setup lang="ts">
	import AboutUsBlock from '~/components/index-page/AboutUsBlock.vue';
	import AlreadyWorkingBlock from '~/components/index-page/AlreadyWorkingBlock.vue';
	import HowWeWorkBlock from '~/components/index-page/HowWeWorkBlock.vue';
	import InfoBlogBlock from '~/components/index-page/InfoBlogBlock.vue';
	import MainBlock from '~/components/index-page/MainBlock.vue';
	import OfferBlock from '~/components/index-page/OfferBlock.vue';
	import ReferralProgramBlock from '~/components/index-page/ReferralProgramBlock.vue';
	import SubmitRequestBlock from '~/components/index-page/SubmitRequestBlock.vue';
	import RewiesBlock from '~/components/index-page/RewiesBlock.vue';
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

		&__content {
			display: flex;
			grid-gap: 62px;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;

			width: 100%;
			height: 100%;
		}
	}
</style>
