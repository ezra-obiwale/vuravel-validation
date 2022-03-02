import { customRule, validate, validateData } from "@ezraobiwale/laravel-style-validation"
import { isObject } from "@ezraobiwale/laravel-style-validation/dist/utils"

export default {
    install (app, customRules = {}) {
        if (!isObject(customRules)) {
            throw new Error('Options must be an object of custom rules')
        }

        for (let name in customRules) {
            customRule(name, customRules[name])
        }

        if (app.config?.globalProperties) {
            app.config.globalProperties.$customRule = customRule
            app.config.globalProperties.$validate = validate
            app.config.globalProperties.$validateData = validateData
        } else {
            app.$customRule = $customRule
            app.$validate = validate
            app.$validateData = validateData
        }
    }
}