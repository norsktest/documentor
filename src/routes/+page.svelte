<script>
    // import {getContext} from 'svelte'
    import {highlight} from '$lib/documentor'
    // import { PaneGroup, Pane, PaneResizer } from "paneforge";
    import * as Resizable from "$lib/components/ui/resizable";
    import { dedent } from '$lib/documentor/utils.ts'

    // const main_menu = getContext('main_menu');
    // main_menu.active = ''
</script>

<Resizable.PaneGroup direction="horizontal" class="h-screen w-full">
    <Resizable.Pane defaultSize={90}>
        <div class="breadcrumbs text-gray-600 mx-4">breadcrumbs</div>

        <main class="documentor m-4">
            <header class="mb-4">
                <h1 class="text-2xl font-bold">documentor</h1>
                <h2 class="text-xl">tagline</h2>
            </header>

            <p>There is a <tt>documentor</tt> command to help document components.</p>

            <!-- eslint-disable-next-line -->
            <pre class="bash">{@html highlight('adoc', dedent`
                
                🏠 srv/lib/tilly❱ documentor -h
                Usage: y doc [options] <component>

                document a component

                Options:
                -c, --category <string>  Category of component (The headings on the left).
                -s, --summary <string>   A one sentecy summary of the component.
                -t, --tags <string>      Tags for component, can be ommitted (e.g. -t "fancy,aria:ok").
                -i, --icon <string>      Icon for component (name of fontawesome icon)
                -h, --help               display help for command

            `)}
            </pre>
            <p>
                The category is for future grouping of left menu. The description is shown in the left menu.
                Icon is for the left menu icon here and should be a fontawsome name.
            </p>

            <p>Example:</p>
            <!-- eslint-disable-next-line -->
            <pre class="bash">{@html highlight('adoc', `
                > documentor -c "container" -s "A card component" -t new -i "box" Card
            `)}
            </pre>

            <p>Afterwards, just edit the <code>examples/Example01.svelte</code> file in the
            generated component directory.</p>

        </main>
    </Resizable.Pane>

    <Resizable.Handle withHandle />

    <Resizable.Pane defaultSize={20}>
        <h1>ToC</h1>
    </Resizable.Pane>
</Resizable.PaneGroup>



<style>

    .bash {
        @apply bg-yellow-100 p-2 m-2 rounded overflow-x-auto;
    }
</style>
