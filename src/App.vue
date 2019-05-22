<template>
  <div>
    <div>
      <h3>默认按钮</h3>
      <my-button>默认按钮</my-button>
      <my-button type="primary">主要按钮</my-button>
      <my-button type="info">信息按钮</my-button>
      <my-button type="warning">警告按钮</my-button>
      <my-button type="success">成功按钮</my-button>
      <my-button type="danger">危险按钮</my-button>
      <my-button type="primary" :disabled="true">禁止按钮</my-button>
    </div>
    <div>
      <h3>圆角按钮</h3>
      <my-button round>默认按钮</my-button>
      <my-button type="primary" round>主要按钮</my-button>
      <my-button type="info" round>信息按钮</my-button>
      <my-button type="warning" round>警告按钮</my-button>
      <my-button type="success" round>成功按钮</my-button>
      <my-button type="danger" round>危险按钮</my-button>
      <my-button type="primary" :disabled="true" round>禁止按钮</my-button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
