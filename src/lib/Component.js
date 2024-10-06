
function sluggify(str) {
    // convert from camelCase to hyphenated-case
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export class Component {
    constructor({
        name,
        slug,
        category,
        description,
        tags,
        icon,
        status,
        version,
        path,
        args,
        created,
    }) {
        this.name = name;
        this.slug = slug ?? sluggify(name);
        this.category = category;
        this.description = description;
        this.tags = tags ?? [];
        this.icon = icon;
        this.status = status;
        this.version = version;
        this._path = null;
        this.path = path;
        this.args = args;
        this.created = created;
    }

    get age() {
        // days since created
        return ((new Date()) - this?.created) / (1000 * 60 * 60 * 24);
    }

    get is_new() {
        return this.age < 30;
    }

    get path() { return this._path; }
    set path(p) {
        p = p?.replace(/.*routes\//g, '')
        p = p?.replace(/\/component.(yaml|json|js)$/g, '')
        this._path = '/' + p
    }

    toJSON() {
        return {
            name: this.name,
            slug: this.slug,
            path: this.path,
            category: this.category,
            description: this.description,
            tags: this.tags,
            icon: this.icon,
            status: this.status,
            version: this.version,
            args: this.args,
            created: this.created,
            age: this.age,
            is_new: this.is_new,
        };
    }
}

export function get_component(promise) {
    return promise.then(c => new Component(c));
}
