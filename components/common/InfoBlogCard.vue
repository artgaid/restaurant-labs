<template>
	<div class="info-blog-card">
		<div class="tags">
			<div v-for="(tag, index) in props.hashtags" :key="index" class="one-tag">{{ tag }}</div>
		</div>

		<div class="date">{{ props.date }}</div>

		<div class="label">{{ props.label }}</div>

		<div class="description">{{ props.description }}</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		label: string;
		date: string;
		description: string;
		hashtags: string[];
	}>();
</script>

<style scoped lang="scss">
	.info-blog-card {
		cursor: pointer;

		display: flex;
		grid-gap: 8px;
		flex-direction: column;

		width: auto;
		height: auto;
		min-height: 250px;
		padding: 20px;
		border-radius: 14px;

		background:
			linear-gradient(rgb(194, 194, 194, 0.65), rgb(194, 194, 194, 0.85)),
			url('assets/imgs/OneInfoBlog.jpg') no-repeat center;
		background-size: cover;

		transition: box-shadow 0.2s ease;

		&:hover {
			box-shadow: var(--box-shadow-up);
		}

		.tags {
			display: flex;
			grid-gap: 8px;
			width: 100%;
			height: 100%;

			.one-tag {
				width: max-content;
				height: max-content;
				padding: 4px 12px;
				border-radius: 14px;

				font: var(--font-small-caption);
				color: var(--color-white);

				background-color: var(--color-grey-dd);
			}
		}

		.label {
			width: 100%;
			height: auto;
			font: var(--font-body-default-bold);
		}
	}
</style>
