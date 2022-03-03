import * as lsv from "@ezraobiwale/laravel-style-validation"
import { isObject } from "@ezraobiwale/laravel-style-validation/dist/utils"

export default {
    install (app, customRules = {}) {
        if (!isObject(customRules)) {
            throw new Error('Options must be an object of custom rules')
        }

        for (let name in customRules) {
            lsv.customRule(name, customRules[name])
        }

        if (app.config?.globalProperties) {
            app.config.globalProperties.$lsv = lsv
        } else {
            app.$lsv = lsv
        }
    }
}