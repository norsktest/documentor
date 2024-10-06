<script>
    import {code2html, Example} from "$lib/documentor";
    import { Badge } from "$lib/components/ui/badge";
    import DocShell from "$lib/docshell/DocShell.svelte";
    import component from "./component.yaml";
    import Playground from '$lib/components/documentor/Playground.svelte'
    import { prop } from '$lib/components/documentor/playground-props.svelte.js'


    import BadgeVariants from "./examples/BadgeVariants.svelte";
    import BadgeVariants_src from "./examples/BadgeVariants.svelte?raw";

    let playground_props = $state({
        text: prop('text', 'string', 'string', 'hello:world'),
        variant: prop('variant', 'string', 'radio', 'info', [
            'error', 'info', 'warning', 'primary', 'secondary', 'outline', 'light', 'dark'
        ]),
        size: prop('size', 'string', 'radio', 'xl', [
            'xs', 'sm', 'lg', 'xl'
        ]),
    })
</script>


<DocShell {component}>
    <p>Badges are used to display a small amount of information in a visual way.</p>

    <h3>Syntax</h3>
    <!-- eslint-disable-next-line -->
    <pre>{@html code2html(`\
        <Badge
            {error|info|warning|primary|secondary|outline|light|dark}
            {small|xs|lg|xl}/>

        <Badge>hello</Badge>

        <Badge text="hello:world" />

        `)}</pre>

    <Playground name="Badge" bind:component_props={playground_props}>
        <Badge bind:variant={playground_props.variant.value}
               bind:text={playground_props.text.value} 
               bind:size={playground_props.size.value} />
    </Playground>

    <h3>Examples</h3>

    <Example src={BadgeVariants_src} {component} path="examples/BadgeVariants.svelte">
        <BadgeVariants />
    </Example>

    <div class="center">

    </div>


</DocShell>
