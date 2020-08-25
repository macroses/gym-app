<script>
    export default {
		preload() {
			
		}
	};
</script>

<script>
    import Info from '../components/alerts/info.svelte';
    import ExerciseItem from '../components/exercise-item/exercise-item.svelte';
    import AddExerciseBtn from '../components/buttons/add-exercise-btn.svelte';
    import InputText from '../components/forms/input.svelte';
    import InputCheck from '../components/forms/input-checkbox.svelte';
    import {generateExercise} from '../service/exercises-mock';

    const exercisesStore = new Array(7).fill().map(generateExercise);

// набор переменных для инпутов
    let exerciseName = '';
    let repeatNum = '';
    let extraWeight = false;
    let extraWeightValue = '';
    let overallVolume = ''; 
    let lastChangeDate = '';
</script>

<svelte:head>
    <title>Упражнения</title>
</svelte:head>

<h2>Упражнения</h2>
<Info className="info">Для отслеживания статистики введите данные упражнения: мышечную группу, количество повторений, рабочий вес и пр.</Info>

<div class="form_new_exercise_item">
    <InputText placeholder="Название упражнения" bind:value={ exerciseName }>Название упражнения</InputText>
    <InputText placeholder="Количество повторений" bind:value={ repeatNum } ></InputText>
    <InputCheck bind:checkResult={ extraWeight }></InputCheck>
    {#if extraWeight}
        <InputText placeholder="Кол-во доп. веса" bind:value={ extraWeightValue }></InputText>
    {/if}
    <InputText placeholder="Общий объем работы, кг" bind:value={ overallVolume } ></InputText>
    <InputText placeholder="Дата последнего изменения" bind:value={ lastChangeDate }></InputText>
    <AddExerciseBtn on:click={ ()=>{} }>+ добавить упражнение</AddExerciseBtn>
</div>

<div class="grid">
    {#each exercisesStore as item (item.id)}
        <a rel=prefetch href='exercise-item/{item.id}'>
            <ExerciseItem {...item}></ExerciseItem>
        </a>  
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        grid-gap: 10px;
    }

    .form_new_exercise_item {
        display: flex;
        flex-direction: column;
    }
</style>