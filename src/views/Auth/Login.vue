<template>
  <Container>
    <h1>Content de te revoir !</h1>
    <p>Vous n'avez pas encore de compte ? Inscrivez-vous ici</p>
    <div>
      <GoogleButton />
      <p>Continuer avec l'addresse mail</p>
    </div>
  </Container>
</template>

<script>
import Container from '../Shared/Container.vue';
import GoogleButton from '../Auth/GoogleButton.vue';

export default {
  name: 'Login',
  components: {
    GoogleButton,
    Container,
  },
};
</script>

<style scoped></style>
