<script>
    export let placeholder = "";
    export let value = "";
</script>

<style>
    ::placeholder {
        font-style: italic;
    }
</style>

<label>
    <input type="text" {placeholder} bind:value={value}>
    <slot><!-- optional fallback --></slot>
</label>