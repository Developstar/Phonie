<template>
    <button class='universalButton'>{{title}}</button>
</template>

<script>
export default{
    name: 'Button',
    props: {"title"}

}
</script>


<style>
.universalButton{
    background: white;
    border: none;
    padding: 0.7rem;
    border-radius: 0.4rem;
}
</style>