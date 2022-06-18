<template>
  <MainContainer>
    <h1>Content de te revoir !</h1>
    <p>Vous n'avez pas encore de compte ? Inscrivez-vous ici</p>
    <div>
      <GoogleButton />
      <p>Continuer avec l'adresse mail</p>
    </div>
  </MainContainer>
</template>

<script>
import MainContainer from '../Shared/MainContainer.vue';
import GoogleButton from '../Auth/GoogleButton.vue';

// import { Mail } from '@tabler/icons';

export default {
  name: 'Login',
  components: {
    GoogleButton,
    MainContainer,
  },
};
</script>

<style scoped></style>
