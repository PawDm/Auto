<template>
  <q-form class="create-form column  q-pb-sm" @submit.prevent="onSubmit">
   <q-input
        outlined
        type="text"
        v-model="firstName"
        label="first name"
        dense
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'empty',
        ]"
      />
    <q-input
        outlined
        dense
        type="text"
        v-model="lastName"
        label="last name"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'empty',
        ]"
      />
    <q-input
        outlined
        dense
        type="text"
        v-model="email"
        label="email"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'empty',
        ]"
      />
    <q-btn type="submit" class="create-form__btn self-center" dense label="create"/>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'create-profile-form',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  methods: {
    ...mapActions({
      createProfile : 'test/createProfile'
    }),
    onSubmit () {
      this.createProfile({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.create-form {
  max-width: 300px;
  width: 100%;
  &__btn {
    width: 100px
  }
}
</style>