<script>
    import InputText from '../forms/input.svelte';
    import InputCheck from '../forms/input-checkbox.svelte';

    export let id;
    export let exerciseName;
    export let repeatNum;
    export let extraWeight;
    export let extraWeightValue;
    export let overallVolume;
    export let lastChangeDate;
</script>

<div class="grid_item" id={id}>
    <div class="exercise_name">{ exerciseName }</div>
    <div class="repeat_number">Кол-во повторений: { repeatNum }</div>
    {#if extraWeight}
        <div class="extra_weight">Дополнительный вес: { extraWeightValue }</div>
    {/if}
    <div class="overall_volume">Общий объем: { overallVolume } кг</div>
    <div class="last_change_date">Последнее изменение: { lastChangeDate }</div>
</div>

<style>
    .grid_item {
        border: 1px solid;
        background: #fff;
    }

    .exercise_name {
        font-weight: bold;
    }
</style>