

export class Prop {
    name = $state()
    type = $state()
    widget = $state()
    value = $state()
    values = $state()

    constructor({name, type, widget, value, values}) {
        this.name = name
        this.type = type
        this.widget = widget
        if (value === 'undefined') {
            if (!values) {
                throw new Error(`value for ${name} cannot be undefined`)
            } else {
                value = values[0]
            }
        }
        this.value = value
        this.values = values

    }
    toJSON() {
        return {
            name: this.name,
            type: this.type,
            widget: this.widget,
            value: this.value,
            values: this.values
        }
    }
}

export function prop(name, type, widget, value, values = []) {
    return new Prop({name, type, widget, value, values: values ?? []})
}
