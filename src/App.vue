<template>
  <div id="app">
      <home />
  </div>
</template>

<script>
import Home from "./views/Home";

export default  {
  components: {
    Home
  }
}
</script>


<style lang="scss">
*,*::after,*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
:root{
  --color-gray: #DDE2E9;
  --modal-border:6px;
}

@mixin viewHeight($value)
{
  height:$value;
}
.-mt-10{
  margin-top: -50px;
}
.bg-gray{
  background-color: var(--color-gray);
}
.h-40{
  height:15rem;
}
.flex{
  display:flex;
}
.grid{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 1em;
  padding: 0 20em;
  grid-template-areas: 
    'm1 m2 m3'
    'm4 m5 m6';
  
  & > div > div{
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    color:#fff;
    cursor: pointer;
  }

  & > div:nth-of-type(1) > div {
    @include viewHeight(32vh);
    grid-area: m1;
  }

  & > div:nth-of-type(2) > div{
    height:40vh;
    grid-area: m2;
  }
  & > div:nth-child(3) > div,div:nth-child(6) > div{
    height:34vh;
    grid-area: m3;
  }
  & > div:nth-of-type(4) > div {
    height:34vh;
    margin-top: -3.5em;
    grid-area: m4;
  }
  & > div:nth-of-type(5)  > div{
    height:40vh;
    grid-area: m5;
  }
  & > div:nth-of-type(6)  > div{
    margin-top: -2.5em;
    grid-area: m6;
  }
}
.items-center{
  align-items:center;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.mb-4{
  margin-bottom: 10rem;
}
.animate-pulse{
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@media only screen and (max-width:1098px) {
  .grid{
    padding:0 10em;
  }
}
@media only screen and (max-width:750px) {
  .grid{
    padding:0 5em;

    & > div:nth-of-type(4) > div {
      margin-top: 0em;
    }
    & > div:nth-of-type(6)  > div{
      margin-top: 0em;
    }
  }
}
@media only screen and (max-width:550px) {
  .grid{
    grid-template-columns: 1fr;
    grid-template-areas: 
    'm1'
    'm2'
    'm3'
    'm4'
    'm5'
    'm6';
    padding:0 2em;
  }
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .7;
  }
} 
</style>
