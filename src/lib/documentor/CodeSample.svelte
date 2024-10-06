<script lang="ts">

    let {
        class: className,
        style: inlineStyle,
        children
    } = $props()
    let pre;


    function copyToClipboard() {
        // the copy button is two characters...
        const txt: string = pre.innerText.slice(2)
        navigator.clipboard.writeText(txt);
    }
</script>


<pre bind:this={pre} style={inlineStyle} class={className}
    ><button title="copy to clipboard" type="button"
    onclick={copyToClipboard}
    >📋</button>{@render children?.()}</pre>

<style>
    pre {
        position: relative;
        background-color: var(--yellow-3);
        color: var(--on-yellow-3);
        padding: 1rem;
        border-radius: 0.25rem;
        overflow-x: auto;
        /* margin:1rem; */
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 2px;
        background-color: transparent;
        border: none;
    }
</style>
