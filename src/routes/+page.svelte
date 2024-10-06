<script>
    // import {getContext} from 'svelte'
    import {highlight} from '$lib/documentor'
    import { PaneGroup, Pane, PaneResizer } from "paneforge";

    // const main_menu = getContext('main_menu');
    // main_menu.active = ''
</script>


 <main class="documentor p-4 bg-indigo-800;">
    <header class="mb-4">
        <h1 class="text-2xl font-bold border-2 border-rose-600 ">documentor</h1>
        <h2 class="text-xl">tagline</h2>
    </header>

    <!-- <PaneGroup direction="horizontal"> -->

        <!-- <PaneResizer style="width:.5rem;vertical-align: middle;align-items: center;justify-content: center;display: flex; flex-direction: column;font-size:1.5rem;z-index:999;background-color: #666;color:white;text-align: center;"> -->
            <!-- ph:arrows-out-line-horizontal-light -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m-38 82H30.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L30.49 134H96a6 6 0 0 0 0-12m148.24 1.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 122H160a6 6 0 0 0 0 12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"/></svg> -->
            <!-- ph:dots-six-vertical-light -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"/></svg> -->
            <!-- ph:dots-three-outline-vertical-fill -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"/></svg> -->

            <!-- ph:dots-three-vertical-fill -->
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M160 16H96a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-32 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg> -->

        <!-- </PaneResizer> -->
 
        <!-- <Pane defaultSize={50} style="background-color: lightblue;">
            Pane 2
        </Pane>
    </PaneGroup> -->
</main>

<!-- ph:dots-three-vertical-fill -->
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M160 16H96a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-32 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>



<p>There is a <tt>y</tt> command to help document grogui components.</p>

<!-- eslint-disable-next-line -->
<pre class="bash">{@html highlight('adoc', `
🏠 srv/lib/tilly❱ y doc -h
Usage: y doc [options] <component>

document a grogui component

Options:
  -c, --category <string>  Category of component (The headings on the left).
  -s, --summary <string>   A one sentecy summary of the component.
  -t, --tags <string>      Tags for component, can be ommitted (e.g. -t "fancy,aria:ok").
  -i, --icon <string>      Icon for component (name of fontawesome icon)
  -h, --help               display help for command

`)}
</pre>
<p>The category is for future grouping of left menu. The description is shown in the left menu.
    Icon is for the left menu icon here and should be a fontawsome name.
</p>

<p>Example:</p>
<!-- eslint-disable-next-line -->
<pre class="bash">{@html highlight('adoc', `
    > y doc -c "container" -s "A card component" -t new -i "box" Card
  `)}
</pre>

<p>Afterwards, just edit the <code>examples/Example01.svelte</code> file in the
generated component directory.</p>

<!-- circled vertical dots -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0-44a12 12 0 1 1-12-12a12 12 0 0 1 12 12m0 88a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg> -->

<!-- ph:dots-six-vertical-light -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"/></svg> -->

<!-- ph:dots-three-outline-vertical-fill -->
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...$$props}><path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"/></svg>

<style>
    .documentor {
        
    }

    .bash {
        background-color: var(--yellow-3);
        color: var(--on-yellow-3);
        padding: 1rem;
        border-radius: 0.25rem;
        overflow-x: auto;
        /* margin:1rem; */
        border: 1px solid var(--yellow-4);
    }
</style>
