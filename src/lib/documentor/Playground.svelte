<!--
@component Playground

Playground component

This component is used to render a playground for the provided children components.
It accepts the following props:

@prop {string} name - The name of the playground.
@prop {object} component_props - The properties to be passed to the child components.
@prop {function} children - A function that returns the child components to be rendered.

-->
<script>
    // import {
    //     // Icon,
    //     // RadioSelect,
    //     Switch
    // } from 'grogui'
    import * as Resizable from "$lib/components/ui/resizable";
    import CodeSample from '$lib/documentor/CodeSample.svelte'
    import { code2html } from '$lib/documentor/utils.ts'
    // import { JsonPre } from "grogui";

    let {
        name,
        component_props = $bindable(),
        component_children = $bindable(),
        // code,
        children
    } = $props()

    // const values = ['home', 'gallery-thumbnails']
    // const types = [
    //     'thin',
    //     'light',
    //     'regular',
    //     'solid',
    //     'sharp',
    //     'duotone',
    // ]

    const propvals = $derived(Object.entries(component_props).map(([prop_name, prop_value]) => {
        return `${prop_name}="${prop_value.value}"`
    }).join('\n    '))
    const child_sample = $derived(component_children ?? '')
    const code_sample = $derived(`<${name} ${propvals} ${child_sample ? `>${child_sample}</${name}>` : '/>'}`)
</script>


<Resizable.PaneGroup direction="horizontal" class="w-full border">
    <Resizable.Pane defaultSize={60} class="p-2">
        
        <div class="component-output">
            <h3>{name}</h3>
            <div class="p-4 m-4 border border-radius-md">
                <div class="mb2">
                    {@render children?.()}
                </div>
            </div>
        </div>

        <div class="component-code mt-3">
            <h3 class="font-bold">Code</h3>
            <!-- eslint-disable-next-line -->
            <CodeSample>{@html code2html(code_sample)}</CodeSample>
        </div>
    </Resizable.Pane>
    
    <Resizable.Handle />
    
    <Resizable.Pane defaultSize={40} minSize={25} class="p-2">
        <fieldset class="component-props container-b bg-secondary p-2 border border-radius-sm">
            <legend class="props-legend text-xl px-2 bg-secondary border border-radius-sm">Props</legend>
            <div class="grid grid-cols-auto grid-cols-2 gap-0">
                {#each Object.entries(component_props) as [prop_name, prop_value]}
                    <div class="propname py-1 flex flex-col content-start gap-2 border-bottom">
                        <span class="name fw9">{prop_name}</span>
                        <small class="type text-slate-500 text-sm block"><br>({prop_value.type})</small>
                    </div>

                    <div class="border-bottom pl-4 py-2">
                        {#if prop_value.widget === 'radio'}
                            {#each prop_value.values as value}
                                <label class="flex gap-2">
                                    <input type="radio" name={prop_name} value={value} bind:group={prop_value.value} />
                                    {value}
                                </label>
                            {/each}
                        
                        {:else if prop_value.widget === 'radio-sample'}
                            {#each prop_value.values as value}
                                <label>
                                    <input type="radio" name={prop_name} value={value} bind:group={prop_value.value} />
                                    {value}
                                </label>
                            {/each}
                            <label class="mt2">
                                <input type="text" name={prop_name} bind:value={prop_value.value}>
                            </label>
                        
                        {:else if prop_value.widget === 'range-degrees'}
                            <input type="range" min="0" max="360" bind:value={prop_value.value}>
                            {prop_value.value}
                        
                        {:else if prop_value.widget === 'switch'}
                            <Switch bind:on={prop_value.value} />
                            {prop_value.value}
                        
                        {:else if prop_value.widget === 'color'}
                            <div class="flex g2">
                                <input type="color" bind:value={prop_value.value} >
                                <input type="text" bind:value={prop_value.value} >
                            </div>
                        
                        {:else if prop_value.widget === 'select'}
                            <select bind:value={prop_value.value}>
                                {#each prop_value.values as value}
                                    <option value={value} selected={value === prop_value.value}>{value}</option>
                                {/each}
                            </select>

                        {:else if prop_value.widget === 'string'}
                            <input type="text" bind:value={prop_value.value} />
                        {:else}
                            widget: {prop_value.widget}
                        {/if}
                    </div>
                {/each}
            </div>
        </fieldset>
    </Resizable.Pane>

</Resizable.PaneGroup>
<!-- <JsonPre {component_props} /> -->

<style lang="scss">
    // .lhs {
    //     flex: 1;
    // }

    // .props-legend {
    //     // background-color: var(--container-b-1);
    //     border: 1px solid #999;
    //     // border-bottom: none;
    // }
</style>
