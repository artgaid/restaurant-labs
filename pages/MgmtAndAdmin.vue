<template>
	<div class="mgmt-admin-page">
		<BackButton />

		<MainServiceBlock
			:label="'Менеджмент и управление'"
			:description="serviceDescription"
			:grey-description="serviceGreyDescription"
			:img-url="'images/MgmtAndAdmin-img1.jpg'"
			:button-text="'Выбрать формат обучения'"
		/>

		<div class="our-services-wrapper">
			<OurServicesBlock
				:title="'Наши услуги'"
				:description="'Настраиваем управление, которое держит команду, финансы и сервис под контролем.'"
				:data="ourServicesList"
			/>
		</div>

		<div class="experts-wrapper">
			<ExpertsBlock :experts="MGMT_AND_ADMIN_EXPERTS" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import BackButton from '~/components/buttons/BackButton.vue';
	import { MGMT_AND_ADMIN_EXPERTS } from '~/constants/mgmt-and-admin';
	import type { ServiceDataType } from '~/types/OurServicesType';

	const serviceDescription =
		'Операционное управление, выручка, команда — без этого не работает ни один ресторан.\n' +
		'Менеджмент — это не про «быть на месте», а про выстроенные процессы,\n' +
		'чёткие показатели и уверенность в завтрашнем дне.\n\n' +
		'На платформе собраны эксперты с реальным опытом управления — от известных ресторанов до\n' +
		'федеральных сетей.';

	const serviceGreyDescription =
		'Форматы взаимодействия:\n' +
		'— очные и онлайн-сессии\n' +
		'— стратегические сессии и аудит текущей системы\n' +
		'— точечная консультация или долгосрочное сопровождение\n' +
		'\n' +
		'Подбираем специалистов под задачи:\n' +
		'— внедрение системы управления\n' +
		'— антикризис и перезапуск\n' +
		'— рост финансовой эффективности\n' +
		'— построение команды и корпоративной культуры\n' +
		'— масштабирование и делегирование\n' +
		'\n' +
		'Выбирайте нужного эксперта и стройте ресторан, в котором управлять — значит не тушить пожары, а развивать бизнес.';

	const ourServicesList: ServiceDataType[] = [
		{
			id: '1',
			name: 'Анализ операционной деятельности',
			description: 'Изучим процессы, найдем узкие места, покажем, где утекают ресурсы и выручка.',
			url: '#',
		},
		{
			id: '2',
			name: 'Финансовый аудит ресторана',
			description:
				'Разберем, как заведению зарабатывать больше: себестоимость, фонд оплаты труда, выручка и расходы.',
			url: '#',
		},

		{
			id: '3',
			name: 'Антикризисный менеджмент',
			description:
				'Если бизнес «горит» — стабилизируем, пересоберём процессы и предложим план спасения.',
			url: '#',
		},

		{
			id: '4',
			name: 'Построение операционной системы',
			description: 'Стандарты, регламенты, KPI и отчётность — чтобы команда работала как часы.',
			url: '#',
		},
		{
			id: '5',
			name: 'Анализ PnL и финансовой модели',
			description:
				'Детальный разбор прибыли, убытков и точек роста. Объясним сложное — простыми словами.',
			url: '#',
		},
		{
			id: '6',
			name: 'Внедрение KPI и системы мотивации',
			description:
				'Показатели, по которым работает команда, и прозрачная система бонусов за результат.',
			url: '#',
		},
		{
			id: '7',
			name: 'Временное управление (crisis team)',
			description:
				'Подключаемся как команда антикризисных управляющих — берём операционку в свои руки.',
			url: '#',
		},
		{
			id: '8',
			name: 'Настройка бизнес-процессов «под ключ»',
			description:
				'Разберем, оптимизируем и настроим ключевые процессы: закупки, кухня, зал, бар, бухгалтерия.',
			url: '#',
		},
		{
			id: '9',
			name: 'Систематизация работы управляющего',
			description: 'Поможем владельцу и управляющему выйти из «текучки» и заняться ростом.',
			url: '#',
		},
		{
			id: '10',
			name: 'Анализ клиентского пути (Customer Journey)',
			description:
				' Как гость проходит весь путь — от брони до расчета. Где теряются деньги и впечатления.',
			url: '#',
		},
	];
</script>

<style scoped lang="scss">
	.mgmt-admin-page {
		display: flex;
		grid-gap: 22px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		width: 100%;
		height: 100%;
		padding: 22px 2%;

		font-weight: 500;

		.main-block {
			display: flex;
			grid-gap: 24px;
			flex-direction: column;
			align-self: center;

			width: 100%;
			max-width: 1700px;
			height: 800px;

			.text-block-title {
				padding: 0 40px;
			}

			&__wrapper {
				display: grid;
				grid-gap: 3%;
				grid-template-columns: 1fr 0.6fr;

				width: 100%;
				height: 100%;
				max-height: 600px;
			}

			&__content {
				display: flex;
				grid-gap: 24px;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;

				width: 100%;
				height: 100%;

				font-size: 18px;
			}

			&__text-1 {
				padding: 0 40px;
				color: var(--color-grey-111);
			}

			&__text-2 {
				display: flex;
				grid-gap: 18px;
				flex-direction: column;

				width: 100%;
				height: max-content;
				padding: 20px 40px;
				border-radius: 14px;

				color: var(--color-grey-111);

				background-color: var(--color-grey-240);
				box-shadow: var(--box-shadow-up);
			}

			&__img {
				display: flex;
				align-items: flex-end;
				justify-content: flex-end;

				width: 100%;
				height: 100%;
				padding: 20px;
				border-radius: 14px;

				background-image: url('public/images/MgmtAndAdmin-img1.jpg');
				background-repeat: no-repeat;
				background-position: top;
				background-size: cover;
			}
		}

		.our-services-wrapper {
			display: flex;

			width: 100%;
			height: auto;
			padding: 40px 60px;
			border-radius: 14px;

			background-color: var(--color-grey-248);
		}

		.experts-wrapper {
			display: flex;
			width: 100%;
			height: auto;
			padding: 40px 0;
		}
	}
</style>
