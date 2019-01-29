<template>
  <div class="frontPage-container">
    <!--Adopt section-->
    <section class="frontPage-adopt fullscreen">
      <h3>Nie tylko ludzie potrzebują domu</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, augue non finibus volutpat, risus ipsum tristique nulla, non interdum orci nunc eu velit. Nam eleifend augue arcu, eget eleifend eros scelerisque sed.</p>
      <button class="full-button">Adoptuj przyjaciela</button>
    </section>
    <!--About section-->
    <section class="frontPage-about fullscreen">
      <img class="frontPage-about-dogs" src="./../assets/dogs-three.png">
      <div class="frontPage-about-text">
        <h3>O naszym schronisku</h3>
        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae tincidunt velit. Praesent accumsan dolor sit amet justo pulvinar, id pharetra tellus rhoncus. Mauris malesuada dui vitae leo vulputate vestibulum. Suspendisse in dignissim ex. Duis cursus est nec odio dictum, nec cursus mi rutrum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum ultricies risus, at facilisis nulla vestibulum et. Praesent quis orci sed tortor aliquam maximus eu sit amet metus. Duis congue eleifend maximus. Phasellus et sagittis ex. Aliquam eu est quis ligula vulputate pretium. In placerat nisi sem, in pellentesque enim molestie eu. Suspendisse nibh libero, ultricies eget condimentum vitae, pulvinar eget massa. Cras ullamcorper orci vitae felis congue aliquam.</p>
      </div>
    </section>
    <!--How can you help-->
    <section class="frontPage-help">
      <h3>Jak możesz nam pomóc</h3>
      <div class="frontPage-help-icons">
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="syringe"
          text="Leki"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="hands-helping"
          text="wolontariat"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="baseball-ball"
          text="zabawki"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="pills"
          text="witaminy"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="bone"
          text="Pokarm"
        ></IconAndText>
      </div>
    </section>
    <section class="frontPage-pets fullscreen">
      <FrontPagePetsSection></FrontPagePetsSection>
    </section>
  </div>
</template>

<script>
import IconAndText from "./../components/IconAndText";
import FrontPagePetsSection from "./FrontPagePetsSection";
export default {
  components: {
    IconAndText,
    FrontPagePetsSection
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

section {
  color: $SecondColor;
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
  color: $Color;
}

.frontPage-about {
  background: $MainBackground;
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
.frontPage-help {
  background: $MainBackground;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 5rem;
}
.frontPage-help-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
}
.frontPage-help-icon {
  padding: 2rem;
}
.frontPage-pets {
  background: $SecondBackground;
}
@media (max-width: $tablet) {
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
@media (min-width: $desktop) {
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