<template>
  <div class="frontPage-container">
    <!--Adopt section-->
    <section class="frontPage-adopt">
      <h3>Nie tylko ludzie potrzebują domu</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, augue non finibus volutpat, risus ipsum tristique nulla, non interdum orci nunc eu velit. Nam eleifend augue arcu, eget eleifend eros scelerisque sed.</p>
      <button class="button is-primary is-medium is-rounded">Adoptuj przyjaciela</button>
    </section>
    <!--About section-->
    <section class="frontPage-about">
      <img class="frontPage-about-dogs" src="./../assets/dogs-three.png">
      <div class="frontPage-about-text">
        <h3>O naszym schronisku</h3>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae tincidunt velit. Praesent accumsan dolor sit amet justo pulvinar, id pharetra tellus rhoncus. Mauris malesuada dui vitae leo vulputate vestibulum. Suspendisse in dignissim ex. Duis cursus est nec odio dictum, nec cursus mi rutrum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ultricies risus, at facilisis nulla vestibulum et. Praesent quis orci sed tortor aliquam maximus eu sit amet metus. Duis congue eleifend maximus. Phasellus et sagittis ex. Aliquam eu est quis ligula vulputate pretium. In placerat nisi sem, in pellentesque enim molestie eu. Suspendisse nibh libero, ultricies eget condimentum vitae, pulvinar eget massa. Cras ullamcorper orci vitae felis congue aliquam.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

section {
  height: 100vh;
}
.frontPage-container {
}
.hero.is-fullheight .hero-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.frontPage-adopt {
  max-width: 45rem;
  margin: 2rem 5rem;
}

.frontPage-about {
  background: $About-background;
  color: $SecondColor;
  padding: 2rem 5rem;
}
.frontPage-about-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  align-self: center;
}

.frontPage-about-dogs {
  align-self: center;
  justify-content: center;
  text-align: center;
}

@media only screen and (min-width: $desktop) {
  .frontPage-about {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  .frontPage-about-text {
    grid-column: 1;
    grid-row: 2;
  }
  .frontPage-about-dogs {
    grid-column: 1;
    grid-row: 1;
  }
  h3,
  p,
  button {
    margin: 0rem;
  }
}
@media only screen and (min-width: $tablet) {
  .frontPage-about {
    display: grid;
    grid-template-columns: 60% auto;
    grid-template-rows: auto;
  }

  .frontPage-about-text {
    grid-column: 2;
    grid-row: 1;
  }
  .frontPage-about-dogs {
    grid-column: 1;
    grid-row: 1;
  }
}
h3,
p,
button {
  margin: 0.5rem;
}
</style>