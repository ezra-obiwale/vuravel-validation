# Vuravel Validation

Vue validations, the [Laravel](https://laravel.com/docs/9.x/validation#available-validation-rules) way.

This is a wrapper around [laravel-style-validation](https://npmjs.org/@ezraobiwale/laravel-style-validation) for use with Vue.

## Installation

```javascript
yarn add vuravel-validation
// or
npm install vuravel-validation
```

## Usage

```javascript
// Vue 3
import { createApp } from 'vue'
import App from './App.vue'
import VuravelValidation from '@ezraobiwale/vuravel-validation'

const app = createApp(App)
const customRules = {}

app.use(VuravelValidation, customRules)

app.mount("#app")

// Vue 2

import Vue from 'vue'
import VuravelValidation from '@ezraobiwale/vuravel-validation'

const customRules = {}
Vue.use(VuravelValidation, customRules)

export default new Vue({
  // ...
})

// App.vue

this.$validate(...)
this.$validateData(...)
this.$customRule(...)
```

See [https://github.com/ezra-obiwale/laravel-style-validation#usage](https://github.com/ezra-obiwale/laravel-style-validation#usage) for more details.

### Custom rule example

Based on [this example](https://github.com/ezra-obiwale/laravel-style-validation#custom-rules):

```javascript
const allowedOptions = (value, { data, field, message, params, rules }) => {
  const isValid = params.includes(value)

  // valiation passes
  if (isValid) {
    return true
  }

  // validation fails and message is disabled
  if (message === false) {
    return false
  }

  // validation failed and custom message exists
  if (message) {
    return message
  }

  // validation failed: return default message
  return 'Allowed parameters include ' + params.join(', ')
}

// Register
app.use(VuravelValidation, { allowed_options: allowedOptions })

// Usage
this.$validate('yes', 'allowed_options:yes,no,maybe|accepted')

```
