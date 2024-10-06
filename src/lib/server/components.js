import fs from 'fs';
import path from 'path';



function* _directories(startdir) {
    const dirs = fs.readdirSync(startdir, { withFileTypes: true });
    for (const d of dirs) {
        if (!d.isDirectory()) continue;
        const curdir = path.join(startdir, d.name);
        if (!d.name.startsWith('.')) {
            yield curdir;
            yield* _directories(curdir);
        }
    }
}

export function component_list() {
    return import.meta.glob(
       '../../routes/components/**/component.yaml', {
        eager: true,
    });
}
