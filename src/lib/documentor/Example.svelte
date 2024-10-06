<script>
    import {code2html} from './utils.ts'

    let {
        src,
        component,
        path = '',
        big = false,
        vertical = false,
        children,
    } = $props();

    const docroot_url = 'vscode://file/srv/lib/tilly/apps/docsite/src/routes/components/' + (component ? component.name.toLowerCase() + '/' : '')

    const opts = {};
    if (big) {
        opts.style = '--code-size: 30%';
    }
</script>

<div class="example" class:vertical={vertical} {...opts}>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex --> <!-- see: https://github.com/sveltejs/svelte/issues/11885 -->
    <div class="code" tabindex="0">
        <!-- eslint-disable-next-line -->
        <pre>{@html code2html(src)}</pre>
    </div>
    <div class="component">
        {@render children?.()}
    </div>
</div>
<a href="{docroot_url}{path}" class="path">{path}</a>

<style lang="scss">
    .example {
        --code-size: 55%;
        --component-size: 1fr;
        background-color: var(--surface-1);
        border: 1px solid #ccc;
        padding: 1rem;
        margin: 1rem 0 0;
        display: grid;
        grid-template-columns: var(--code-size) minmax(0, var(--component-size));
        gap: 1rem;
    }

    .vertical {
        display: flex;
        flex-direction: column;
    }

    .code {
        /* max-width: 500px; */
        overflow-x: auto;
        // make scrollbar thinner
        scrollbar-width: thin;
        background-color: var(--surface-3);
        padding: var(--p1);
    }

    .vertical .code{
        order: 2;
    }

    pre {
        margin: 0;
        line-height: 1.2
    }

    .path {
        display:block;
        font-size: 0.8rem;
        color: #666;
        text-align: right;
    }
</style>
