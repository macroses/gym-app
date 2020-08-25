<script>
    export let className;
</script>

<style>
    .info {
        background: #007bff;
        color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.125);
        
    }

    .warning {
        background: #ffc107;
        color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.125);
    }
</style>

<div class={className}>
    <slot></slot>
</div>