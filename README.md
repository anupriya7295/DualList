# dual-list

> Dual List Component for [Vue.js](https://vuejs.org) with [bootstrap-vue](https://bootstrap-vue.js.org/).

- [Docs](src/components/README.md)
- [Demo]()

## Main

```text
dist/
├── dual-list.js        (UMD)
├── dual-list.min.js    (UMD, compressed)
├── dual-list.common.js (CommonJS, default)
└── dual-list.esm.js    (ES Module)
```
## Getting started

### Installation

```shell
npm install dual-list
```
### Usage

```js
import Vue from 'vue';
import FormDualList from 'dual-list';
```

```html
<template>
    <FormDualList :options="options"/>
</template>

<script>
  export default {
    components: {
      FormDualList
    },
    data() {
      return {
        options:[
        {key: 'Tamil Nadu', value: 'TN'},
        {key: 'Kerala', value: 'KL'},
        {key: 'Karnataka', value: 'KA'},
        {key: 'Maharastra', value: 'MH'},
        {key: 'Delhi', value: 'DL'},
        {key: 'Goa', value: 'GA'},
        {key: 'Punjab', value: 'PB'},
        {key: 'Orissa', value: 'OR'},
        {key: 'Bihar', value: 'BR'},
        ],
        state:['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharastra', 'Delhi', 'Goa', 'Punjab','Orissa','Bihar'] // option can also be like this
      };
    },
  };
</script>
```
## License

[MIT](https://opensource.org/licenses/MIT) © [Anu priya V]