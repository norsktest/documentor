<script lang="ts">
    let {
        name,
        ...rest
    } = $props()
</script>


{#if name === 'ph:dots-six-vertical-light'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"/></svg>

{:else if name === 'ph:dots-three-outline-vertical-fill'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"/></svg>

{:else if name === 'ph:dots-three-vertical-fill'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M160 16H96a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16m-32 192a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-68a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>

{:else if name === 'ph:dots-three-outline-vertical-fill'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"/></svg>

{:else if name === 'ph:arrows-out-line-horizontal-light'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M134 40v176a6 6 0 0 1-12 0V40a6 6 0 0 1 12 0m-38 82H30.49l21.75-21.76a6 6 0 0 0-8.48-8.48l-32 32a6 6 0 0 0 0 8.48l32 32a6 6 0 0 0 8.48-8.48L30.49 134H96a6 6 0 0 0 0-12h65.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48"/></svg>

{:else if name === 'ph:dots-six-vertical-light'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M102 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m62 10a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-72 48a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-72 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10m72 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"/></svg>

{:else if name === 'ph:dots-three-outline-vertical-fill'}
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest}><path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28"/></svg>

{:else}
    <i class="fa-solid fa-question" {...rest}></i>
{/if}