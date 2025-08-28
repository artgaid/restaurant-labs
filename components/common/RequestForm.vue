<template>
	<div class="request-form">
		<UIInput v-model="name" :label="'Имя'" />
		<UIInput v-model="email" :label="'Email'" />
		<UIInput v-model="phone" :label="'Телефон'" />
		<UIInput v-model="contactMeType" :label="'Свяжитесь со мной'" />

		<div class="checkboxes">
			<div>Я согласен на получение информационных и рекламных материалов</div>
			<div>
				Я даю согласие на обработку своих персональных данных в соответствии с Политикой обработки
				персональных данных
			</div>
		</div>

		<UIButton :color="'black'">Оставить заявку</UIButton>
	</div>
</template>

<script setup lang="ts">
	import UIButton from '~/components/buttons/UI-Button.vue';
	import UIInput from '~/components/inputs/UI-Input.vue';

	const name = ref('');
	const email = ref('');
	const phone = ref('');
	const contactMeType = ref('');
</script>

<style scoped lang="scss">
	.request-form {
		display: grid;
		grid-gap: 22px 30px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(4, 1fr);

		width: 100%;
		height: auto;

		.checkboxes {
			grid-column: 1/3;
		}

		button {
			width: 50%;
		}
	}
</style>
