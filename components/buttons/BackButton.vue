<template>
	<button class="back-button" @click="goBack">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
			<path
				d="M0.646445 3.64645C0.451183 3.84171 0.451183 4.15829 0.646445 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.73079 0.976311 4.73079 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646445 3.64645ZM16 4V3.5L0.999999 3.5V4V4.5L16 4.5V4Z"
				fill="#353638"
			/>
		</svg>
		<span>вернуться назад</span>
	</button>
</template>

<script setup lang="ts">
	const goBack = () => {
		if (!import.meta.client) return;

		// если есть история — используем window.history.go,
		// так можно вернуться на несколько шагов (delta)
		if (window.history.length > 1) {
			const steps = -Math.max(1, Math.floor(1));
			// window.history.go поддерживается в браузерах
			window.history.go(steps);
			return;
		}

		// иначе — переходим на запасной маршрут '/'
		navigateTo('/');
	};
</script>

<style scoped lang="scss">
	.back-button {
		display: flex;
		grid-gap: 14px;
		align-items: center;
		justify-content: center;

		width: auto;
		height: auto;
		padding: 4px 14px 6px;
		border-radius: 40px;

		font-weight: 400;
		line-height: 16px;
		text-align: center;

		background-color: var(--color-grey-l);

		svg {
			display: flex;
			margin-top: 4px;
		}
	}
</style>
