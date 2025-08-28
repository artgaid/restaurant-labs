<template>
	<div class="already-working-block">
		<div class="text-block-title">С кем мы уже работаем</div>
		<div class="already-working-block__companies">
			<div
				v-for="(partner, index) in partnersLogo"
				:key="index"
				class="company-logo"
				:title="partner.title"
				:style="{ backgroundImage: `url(${images[partner.url]})` }"
			/>

			<div class="more-companies">
				+ ещё
				<br />
				30 компаний
				<br />
				по всей стране
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const modules = import.meta.glob('@/assets/imgs/already-working/*.jpg', {
		eager: true,
		as: 'url',
	});
	const images = Object.fromEntries(
		Object.keys(modules).map((k) => [k.split('/').pop(), modules[k]]),
	);

	const partnersLogo = [
		{
			title: 'Starbucks',
			url: 'image-1.jpg',
		},
		{
			title: 'Merck',
			url: 'image-2.jpg',
		},
		{
			title: 'PBS',
			url: 'image-3.jpg',
		},
		{
			title: 'Athena Health',
			url: 'image-4.jpg',
		},
		{
			title: 'NBC',
			url: 'image-5.jpg',
		},
	];
</script>

<style scoped lang="scss">
	.already-working-block {
		display: flex;
		grid-gap: 22px;
		flex-direction: column;

		width: 100%;
		height: auto;

		&__companies {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.company-logo {
				width: 130px;
				height: 130px;

				background-repeat: no-repeat;
				background-position: center;
				background-size: contain;
			}

			.more-companies {
				display: flex;
				align-items: center;
				justify-content: center;

				width: 160px;
				height: 130px;
				border-radius: 14px;

				font: var(--font-body-default-medium);

				background-color: var(--color-grey-l);
				box-shadow: var(--box-shadow-super);
			}
		}
	}
</style>
