<template>
	<div class="our-services">Наши услуги</div>
</template>

<script setup lang="ts">
	import type { ServiceDataType } from '~/types/OurServicesType';

	const props = defineProps<{
		description: string;
		data: ServiceDataType[];
	}>();
</script>

<style scoped lang="scss">
	.our-services {
		width: 100%;
	}
</style>
