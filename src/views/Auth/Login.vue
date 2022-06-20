<template>
  <MainContainer>
    <div id="Login">
      <h1 class="smallMarginBottom">Content de vous revoir !</h1>
      <p class="marginBottom">
        Vous n'avez pas encore de compte ?
        <a href="" class="highlightText">S'inscrire ici</a>
      </p>
      <div id="LoginContainer">
        <GoogleButton class="marginBottom" />
        <Separator class="marginBottom"
          >Ou continuer avec l'adresse mail</Separator
        >
        <div class="marginBottom parentWidth">
          <MustBeCompleteText class="smallMarginBottom"
            >Email</MustBeCompleteText
          >
          <CustomInput placeholder="Votre email" :icon="mailIcon" />
        </div>
        <div class="marginBottom parentWidth">
          <MustBeCompleteText class="smallMarginBottom"
            >Mot de passe</MustBeCompleteText
          >
          <CustomInput
            type="password"
            placeholder="Votre mot de passe"
            :icon="lockIcon"
          />
        </div>
        <div class="displayGrid marginBottom parentWidth">
          <div class="displayInline">
            <input type="checkbox" />
            <div>Se souvenir</div>
          </div>
          <div class="highlightText alignEnd">Mot de passe oublié ?</div>
        </div>
        <CustomButton>Se connecter</CustomButton>
        <CustomInput
          type="password"
          placeholder="Votre mot de passe"
          :icon="lockIcon"
        >
        </CustomInput>
      </div>
    </div>
  </MainContainer>
</template>

<script>
import MainContainer from '../Shared/MainContainer.vue';
import GoogleButton from '../Auth/GoogleButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import MustBeCompleteText from '@/components/MustBeCompleteText.vue';
import Separator from '@/components/Separator.vue';
import CustomButton from '@/components/CustomButton.vue';

import MailIcon from '@/components/TablerIcons/MailIcon.vue';
import LockIcon from '@/components/TablerIcons/LockIcon.vue';

export default {
  name: 'Login',
  components: {
    GoogleButton,
    MainContainer,
    CustomInput,
    MustBeCompleteText,
    Separator,
    CustomButton,
    MailIcon,
    LockIcon,
  },
  data() {
    return {
      lockIcon: <LockIcon style="color: gray" />,
      mailIcon: <MailIcon style="color: gray" />,
    };
  },
};
</script>

<style scoped>
#Login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  margin-top: 25px;
  margin-bottom: 25px;
}

#LoginContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  border: 2px solid var(--low-border-color);
  box-shadow: 1px 11px 18px 4px rgba(0, 0, 0, 0.1);
  padding: 50px;
}

h1 {
  margin: 0;
}

.marginBottom {
  margin-bottom: 30px;
}

.parentWidth {
  width: 100%;
}

.smallMarginBottom {
  margin-bottom: 10px;
}

.displayGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.displayInline {
  display: flex;
  align-items: center;
}

.highlightText {
  color: var(--highlight-text-color);
  text-decoration: none;
}

.alignEnd {
  text-align: end;
}

p {
  margin: 0;
  color: var(--second-text-color);
}
</style>
