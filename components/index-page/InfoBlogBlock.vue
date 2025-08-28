<template>
	<div class="info-blog">
		<div class="info-blog__title text-block-title">Блог</div>
		<div class="info-blog__content">
			<InfoBlogCard
				v-for="(blog, index) in infoBlogList"
				:key="index"
				:label="blog.label"
				:date="blog.date"
				:description="blog.description"
				:hashtags="blog.hashtags"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import InfoBlogCard from '~/components/common/InfoBlogCard.vue';

	const infoBlogList = [
		{
			label: 'Как не угодить в яму при кадровом голоде',
			date: '01 Март 2025',
			description: 'Почему текучка — это не норма...',
			hashtags: ['#рекрутинг', '#сервис'],
		},
		{
			label: 'Название статьи',
			date: '01 Март 2025',
			description: 'Почему текучка — это не норма...',
			hashtags: ['#рекрутинг', '#сервис'],
		},
		{
			label: 'Название статьи',
			date: '01 Март 2025',
			description: 'Почему текучка — это не норма...',
			hashtags: ['#маркетинг', '#управление'],
		},
		{
			label: 'Название статьи',
			date: '01 Март 2025',
			description: 'Краткое описание',
			hashtags: ['#сервис'],
		},
		{
			label: 'Название статьи',
			date: '01 Март 2025',
			description: 'Краткое описание',
			hashtags: ['#обучение', '#персонал'],
		},
		{
			label: 'Название статьи',
			date: '01 Март 2025',
			description: 'Краткое описание',
			hashtags: ['#кейсы', '#сервис'],
		},
	];
</script>

<style scoped lang="scss">
	.info-blog {
		display: flex;
		grid-gap: 20px;
		flex-direction: column;
		width: 100%;

		&__title {
			margin-left: 24px;
		}

		&__content {
			display: grid;
			grid-gap: 20px;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr 1fr;

			width: 100%;
		}
	}
</style>
