<template>
<div class="HeaderSection">
    <div class="logo">Phonie</div>
    
    <div class="AccessButton rightSideNav">
        <div>Login</div>
        <div><button>Request Early Access</button></div>
           
    </div>
</div>
</template>


<script>
export default{
    name: 'HeaderSection',
}
</script>


<style>
.HeaderSection{
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    color: #22253e;
    height: 10vh;
    
}

.logo{
    font-size: 2rem;
    font-weight: bold;
    margin-left: 1rem;
}

.rightSideNav{
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.AccessButton{
    margin-right: 1rem;
}

.AccessButton button{
    background: white;
    
    padding: 0.7rem;
    border-radius: 0.4rem;
    
}
</style>