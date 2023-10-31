<script setup>
import { useAuth } from "@/stores/auth";
import { reactive, ref } from "@vue/reactivity";

const auth = useAuth();

const form = reactive({
  phone: "",
  password: "",
});

const onSubmit = async () => {
  await auth.login(form);
};

const showPassword = ref(false);

const toggleShow = () => {
  console.log('toggleShow function called');
  showPassword.value = !showPassword.value;
};
</script>

<template lang="">
  <div>
    <div>
      <section class="user-form-part">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-6">
              <div class="user-form-card">
                <div class="user-form-title">
                  <h2>Customer Login</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div class="user-form-group" id="axiosForm">
                  <form class="user-form" @submit.prevent="onSubmit">
                    <!--v-if-->
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="phone no"
                        v-model="form.phone"
                      /><!--v-if-->
                    </div>
                    <div class="form-group">
                      <input
                        :type="showPassword ? 'text' : 'password' "
                        class="form-control"
                        placeholder="password"
                        v-model="form.password"
                      />
                      <span class="view-password" @click="toggleShow">
    <i class="fas text-success" :class="{'fa-eye-slash': showPassword, 'fa-eye': !showPassword}"></i>
</span>



                    </div>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="check"
                        value=""
                      /><label class="form-check-label" for="check"
                        >Remember Me</label
                      >
                    </div>
                    <div class="form-button">
                      <button type="submit">Login</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="user-form-remind">
                <p>
                  Don't have any account?<router-link
                    :to="{ name: 'user.register' }"
                    class=""
                    >register here</router-link
                  >
                  >
                </p>
              </div>
              <div class="user-form-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
@import "@/assets/css/user-auth.css";
</style>
