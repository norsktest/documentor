// export const prerender = true;

import {component_list} from '$lib/server/components'
import {Component} from '../lib/Component.js'

export const load = event => {
    let res = {}
    const clist = component_list()
    Object.entries(clist).forEach(([key, value]) => {
        const c = new Component(value.default)
        // console.log(c.name, c.age, c.is_new, c.path);
        c.path = key
        if (!res[c.category]) res[c.category] = []
        res[c.category].push(c.toJSON())
    })

    return {
        locals: event.locals,
        categories: res,
        hello: 'world',
    }
}
