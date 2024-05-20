<template>
    <div class="col-2" style="background-color: darkslateblue; height: 100vh; border-right: 1px solid black; margin-right: 2rem; padding: 1rem;">
    <div class="sidebar-header">
        <h1 class="sidebar-title">Data table Topics</h1>
    </div>
        <br />
        <div class="d-flex " style="padding-left: 2rem;" >
            <router-link :to="{ name: 'Pe' }" class="custom-button">People</router-link>
        </div>
        <div class="d-flex " style="padding-left: 2rem;" >
            <router-link :to="{ name: 'Com' }" class="custom-button">Company</router-link>
        </div>
        <div class="d-flex " style="padding-left: 2rem;" >
            <router-link :to="{ name: 'Uni' }" class="custom-button">University</router-link>
        </div>
    </div>
  </template>
<script>

</script>

<style>
.col-2 {
    background-color: darkslateblue;
    height: 100vh;
    border-right: 1px solid blue;
    margin-right: 2rem;
    padding: 1rem;
}

.sidebar-header {
    text-align: center;
    margin-bottom: 1rem;
}

.sidebar-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: white;
}

.sidebar-links {
    display: flex;
    flex-direction: column;
}

.custom-button {
  text-decoration: none;
  color: white;
  font-size: large;
  font-weight: bold;
  background-color: grey;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease;
  display: block; 
  width: 80%; 
  box-sizing: border-box; 
  margin: 5px auto;
}

.custom-button:hover {
  background-color: greenyellow;
}

.custom-button:active {
  background-color: greenyellow;
}

</style>