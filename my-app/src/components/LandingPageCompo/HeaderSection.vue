<template>
<div class="HeaderSection">
    <div class="logo">Phonie</div>
    <div class="AccessButton">
        <button>Request Early Access</button>   
    </div>
</div>
</template>


<script>
export default{
    name: 'HeaderSection'
}
</script>


<style>
.HeaderSection{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #22253e;
    color: white;
    height: 5rem;
    
}

.logo{
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
}

.AccessButton{
    margin-right: 1rem;
}

.AccessButton button{
    background: white;
    border: none;
    padding: 0.7rem;
    border-radius: 0.4rem;
    
}
</style>