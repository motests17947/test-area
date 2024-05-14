<template>
  <div>
    <h1 class="login-title">404<span> Page Not Found.</span></h1>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.cursor-pointer {
  cursor: pointer;
}

.v-selection-control__input {
  justify-content: flex-start !important;
}

.gradient-button {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  border-radius: 4px;
  background: linear-gradient(91deg, #0162e0 2.62%, #0122bf 72.77%);
}

.gradient-button:hover {
  border-radius: 4px;
  background: linear-gradient(91deg, #019de0 2.62%, #153bef 72.77%);
}

.pressed-button {
  border-radius: 4px;
  background: linear-gradient(91deg, #0162e0 2.62%, #0122bf 72.77%);
}
.error-message {
  color: #b80105;
  margin-left: 8px;
}

.forget-message {
  color: #2371d6;
  margin-left: 8px;
}

.form-width {
  max-width: 645px;
}

.login-title {
  color: #0a375e;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 66px;
}

.login-title span {
  color: #0075ff;
}
</style>
