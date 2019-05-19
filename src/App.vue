<template>
  <div id="app">
    <FormDualList
    :label="'Array of String Dual Select'"
    :options="arrayOfStringOptions"
    :selected="arrayOfStringSelected"
    :enableOptionSearch = "true"
    :enableSelectedSearch = "false"
    :moveRightClass="'searchBox'"
    :moveLeftClass="''"
    :optionBoxClass="''"
    :selectedBoxClass="''"
    />
    <label class="ml-3">Selected</label>{{arrayOfStringSelected}}
    <FormDualList :textField="'key'" :options="arrayOfObjectOptions" :selected="arrayOfObjectSelected" :label="'Array of Object Dual Select'"/>
    <label class="ml-3">Selected</label>{{arrayOfObjectSelected}}
  </div>
</template>

<script>
import FormDualList from './components/FormDualList.vue'

export default {
  name: 'app',
  components: {
    FormDualList
  },
  data() {
    return {
    arrayOfStringOptions: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharastra', 'Delhi', 'Goa', 'Punjab','Orissa','Bihar'],
    arrayOfStringSelected: [],
    arrayOfObjectSelected: [],
    arrayOfObjectOptions:[
      {key: 'Tamil Nadu', value: 'TN'},
      {key: 'Kerala', value: 'KL'},
      {key: 'Karnataka', value: 'KA'},
      {key: 'Maharastra', value: 'MH'},
      {key: 'Delhi', value: 'DL'},
      {key: 'Goa', value: 'GA'},
      {key: 'Punjab', value: 'PB'},
      {key: 'Orissa', value: 'OR'},
      {key: 'Bihar', value: 'BR'},
    ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
