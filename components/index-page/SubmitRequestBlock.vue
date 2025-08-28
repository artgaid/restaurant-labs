<template>
	<div class="request-block">
		<div class="text-block-title">Пора перейти на новый уровень — расскажите о своём проекте</div>
		<div class="request-block__description">Мы свяжемся и предложим персональный план действий</div>

		<RequestForm class="request-block__form" />
	</div>
</template>

<script setup lang="ts">
	import RequestForm from '~/components/common/RequestForm.vue';
</script>

<style scoped lang="scss">
	.request-block {
		display: flex;
		grid-gap: 16px;
		flex-direction: column;

		width: 100%;
		height: auto;
		padding: 40px 60px;
		border-radius: 14px;

		background-color: var(--color-grey-ll);
		box-shadow: var(--box-shadow-super);

		&__description {
			font: var(--font-body-default-medium);
		}

		&__form {
			padding-top: 40px;
		}
	}
</style>
