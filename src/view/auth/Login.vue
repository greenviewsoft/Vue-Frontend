<script setup>
import { useAuth } from "@/stores/auth";
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { Form, Field } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  phone: yup.string().required("Phone  is required"),
  password: yup.string().required().min(8),
});

const auth = useAuth();
const { errors } = storeToRefs(auth);

// const form = reactive({
//   phone: "",
//   password: "",
// });

const onSubmit = async (values, { setErrors }) => {
  const res = await auth.login(values);
  if (res.data) {
    alert("login success");
  } else {
    setErrors(res);
  }
};

const showPassword = ref(false);

const toggleShow = () => {
  console.log("toggleShow function called");
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
                  <Form
                    class="user-form"
                    @submit="onSubmit"
                    :validation-schema="schema"
                    v-slot="{ errors, isSubmitting }"
                  >
                    <!--v-if-->
                    <div class="form-group">
                      <Field
                        name="phone"
                        type="text"
                        class="form-control"
                        placeholder="phone no"
                        :class="{ 'is-invalid': errors.phone }"
                      /><!--v-if-->

                      <!-- <ErrorMessage name="phone" class="text-danger"/> -->
                      <span class="text-danger" v-if="errors.phone">
                        {{ errors.phone }}</span
                      >
                    </div>
                    <div class="form-group">
                      <Field
                        name="password"
                        :type="showPassword ? 'text' : 'password'"
                        class="form-control"
                        placeholder="password"
                        :class="{ 'is-invalid': errors.password }"
                      />

                      <!-- <ErrorMessage name="password" class="text-danger" /> -->

                      <span class="text-danger" v-if="errors.password">
                        {{ errors.password }}</span
                      >
                      <span class="view-password" @click="toggleShow">
                        <i
                          class="fas text-success"
                          :class="{
                            'fa-eye-slash': showPassword,
                            'fa-eye': !showPassword,
                          }"
                        ></i>
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
                      <button type="submit" :disabled="isSubmitting">
                        Login
                        <span
                          v-show="isSubmitting"
                          class="spinner-border spinner-border-sm mr-1"
                        ></span>
                      </button>
                    </div>
                  </Form>
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
