<template>
  <MainContainer>
    <h1>Content de te revoir !</h1>
    <p>Vous n'avez pas encore de compte ? Inscrivez-vous ici</p>
    <div>
      <GoogleButton />
      <p>Continuer avec l'adresse mail</p>
    </div>
    <TextInput id="tmp" placeholder="Email" />
  </MainContainer>
</template>

<script>
import MainContainer from '../Shared/MainContainer.vue';
import GoogleButton from '../Auth/GoogleButton.vue';
import TextInput from '@/components/TextInput.vue';

export default {
  name: 'Login',
  components: {
    GoogleButton,
    MainContainer,
    TextInput,
  },
};
</script>

<style scoped>
#tmp {
  margin: 20px;
}
</style>
