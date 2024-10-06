<script>
    import {code2html, Example} from "$lib/documentor";
    import { Badge } from "$lib/components/ui/badge";
    import DocShell from "$lib/documentor/docshell/DocShell.svelte";
    import component from "./component.yaml";
    import Playground from '$lib/documentor/Playground.svelte'
    import { prop } from '$lib/documentor/playground-props.svelte.ts'


    import BadgeVariants from "./examples/BadgeVariants.svelte";
    import BadgeVariants_src from "./examples/BadgeVariants.svelte?raw";

    let playground_props = $state({
        text: prop('text', 'string', 'string', 'hello:world'),
        variant: prop('variant', 'string', 'radio', 'default', [
            'default', 'primary', 'secondary', 'outline', 'destructive'
        ]),
        // size: prop('size', 'string', 'radio', 'xl', [
        //     'xs', 'sm', 'lg', 'xl'
        // ]),
    })
</script>


<DocShell {component}>
    <p>Badges are used to display a small amount of information in a visual way.</p>

    <h3 class="mt-4">Syntax</h3>
    <!-- eslint-disable-next-line -->
    <pre class="code p-3 text-sm">{@html code2html(`\
        import { Badge } from "$lib/components/ui/badge";

        <Badge variant={defaul|primary|secondary|outline|destructive}>
            {text}
        </Badge>

        `)}</pre>

    <Playground name="Badge" bind:component_props={playground_props}>
        <Badge bind:variant={playground_props.variant.value}>
               {playground_props.text.value}
        </Badge>
    </Playground>

    <h3>Examples</h3>

    <!-- <Example src={BadgeVariants_src} {component} path="examples/BadgeVariants.svelte">
        <BadgeVariants />
    </Example>

    <div class="center">

    </div>
 -->

</DocShell>
