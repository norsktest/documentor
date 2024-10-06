<script>
    import * as Tabs from "$lib/components/ui/tabs"
    import CodeSample from './CodeSample.svelte'

    let {
        display,
        code,
    } = $props();
</script>

<Tabs.Root value="account" class="w-[400px]">
    <Tabs.List>
      <Tabs.Trigger value="display">Display</Tabs.Trigger>
      <Tabs.Trigger value="code">Code</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="display">
      {@render display()}
    </Tabs.Content>
    <Tabs.Content value="code">
        <CodeSample>{@render code()}</CodeSample>
    </Tabs.Content>
  </Tabs.Root>

<!-- <Tabs>
    <TabPanel name="display">
        {@render display()}
    </TabPanel>
    <TabPanel name="code" --padding={0}>
        <CodeSample>{@render code()}</CodeSample>
    </TabPanel>
</Tabs> -->
