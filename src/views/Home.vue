<template>
    <span>
        <home-hero></home-hero>
        <home-plans></home-plans>
        <home-details></home-details>
        <home-footer></home-footer>


    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
import HomeFooter from '@/components/HomeFooter';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans,
        HomeFooter,
    }
};
</script>
