<script>
    import {browser} from '$app/environment'
    // import {getContext} from 'svelte'
    import {Icon, Badge} from 'grogui'
    import {Component} from '$lib/Component.js'
    // import Arguments from '$lib/Arguments.svelte'
    // import {Args} from '$lib/Args.svelte.js'

    let {
        component,
        children
    } = $props()
    let toggle_aside = $state(false)

    const comp = new Component(component)
    // const args = $derived(new Args(component.args))

    // const main_menu = getContext('main_menu')
    // main_menu.active = component.name

    const slugify = (...args) => args.join(' ').toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '')

    const find_headings = () => {
        // console.log("BROWSER", browser)
        if (!browser) return [];
        const dom_headings = []
        // Create a table of contents for the page by scanning the headings
        const content = document.querySelector(`#content-${comp.slug}`)
        // console.log("CONTENT", content)
        const headings = content?.querySelectorAll('h2, h3, h4')
        const toc = document.getElementById('toc')

        // console.log("HEADINGS", headings)
        
        // only return the heading text before the first tag
        /** @type {(text: string) => string} */
        const parse_heading = text => text.slice(
            0, text.indexOf('<') < 0 ? text.length : text.indexOf('<')
        )

        if (!toc || !headings) return;
        headings.forEach(heading => {
            if (!heading.id) heading.id = slugify(heading.tagName, heading.textContent) // heading.tagName + '-' + heading.textContent.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '')  // slugify
            // Determine the heading level based on the tag name
            const level = parseInt(heading.tagName.slice(1)) - 2;
            dom_headings.push([level, heading.id, parse_heading(heading.innerHTML ?? '')])
            // console.log("DOM HEADINGS", JSON.stringify(dom_headings))

        })
        // console.log("DOM HEADINGS", JSON.stringify(dom_headings))
        return dom_headings;
    }

    let toclist = $state([]);

    $effect(() => {
        toclist = find_headings()
    })


</script>

<div id="top" class="docshell">
    <div id="content-{comp.slug}" class="container">
        <h1 class="mb2" style="border-bottom: 5px solid red;">
            <Icon value={comp.icon} thin />
            {comp.name}
            {#each comp.tags as tag}
                {#if typeof tag === 'string'}
                    <Badge sm text={tag} />
                {/if}
            {/each}
        </h1>

        {@render children?.()}

    </div>

    <!-- <div class="args">
        <h2>Arguments</h2>
        <pre>{JSON.stringify(component.args, null, 4)}</pre>
        <Arguments args={args} />
    </div> -->
</div>

<aside class:collapsed={toggle_aside}>
    <button class="toggle" onclick={() => toggle_aside = !toggle_aside} aria-label="collapse">
        <Icon value="chevron-right"/>
    </button>
    <div class="content">
        <h3><a href="#top">On this page</a></h3>
        <ul id="toc" data-testid="toc" class="toc" data-level="1">
            {#each toclist as [level, id, text]}
                <li>
                    <a style="margin-left: {level * 20}px;" href={`#${id}`}>{text}</a>
                </li>
            {/each}
        </ul>
    </div>
</aside>

<style lang="scss">
    :root {
        box-sizing: border-box;
    }

    .docshell {
        // outline: 1px solid red;
        height: calc(200vh - 2 * 8px - 2 * 2rem - 3px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem 0;
    }
    //.args {
    //    border-top: 3px solid rebeccapurple;
    //    min-height: 30vh;
    //}
    aside {
        position: fixed;
        top: 0;
        right: 0;
        min-width: 200px;
        width: 20vw;            // must be coordinated with the padding-right in ++layout.svelte
        height: 100vh;
        background-color: #f8f8f8;
        border-left: 1px solid #e0e0e0;
        padding: 1rem;
        transition: .5s;
        transition-behavior: allow-discrete;

        .content {
            opacity: 1;
            font-size: 1rem;
            transition: .5s;
            transition-behavior: allow-discrete;
            overflow-x: hidden;
        }

        .toggle {
            border: 1px solid red;
            border-radius: 50%;
            position: absolute;
            padding: 0;
            font-size: 8px;
            background-color: white;
            aspect-ratio: 1;
            width: 16px;
            height: 16px;
            left: 0;
            top: 1rem;
            translate: -50%;
        }

        &.collapsed {
            width: 1rem;
            min-width: 1rem;
            padding: 0;
            font-size: 0;
            //transition: 3.5s;
            :global(.icon) {
                rotate: 180deg;
            }

            .content {
                display: none;
                opacity: 0;
            }
        }

        a {
            // color: var(--blue-5);
            text-decoration: none !important;
        }

        .toc {
            padding-inline: 0;
            margin-inline: .5rem;
            list-style-type: none;

            li {
                margin-block: 0;
                padding-block: 0px 4px;
                // border-bottom: 1px solid var(--border-color);
                &:hover {
                    background-color: #f0f0f0;

                }
            }
        }
    }



    //.tag {
    //    font-size: 12px;
    //    height: 20px;
    //    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    //    background-color: #741cbd;
    //    color: #f0eeee;
    //    padding: 3px 4px;
    //    border-radius: 0;
    //    margin-left: 0.5rem;
    //    outline: 1px solid red;
    //}
    //
    //.tag:has(.post) {
    //    display: inline-grid;
    //    grid-template-columns: auto auto;
    //    gap: 0;
    //    padding: 0;
    //    background-color: transparent;
    //
    //    .pre {
    //        background-color: #741cbd;
    //        height: 20px;
    //        color: #f0eeee;
    //        padding: 2px 4px;
    //    }
    //    .post {
    //        background-color: white;
    //        color:#741cbd;
    //        border: 1px solid #741cbd;
    //        padding: 2px 4px;
    //    }
    //}
</style>
