<script>
    import {questions} from '../utils/questionsConfig'
    import Question from './Question.svelte'
    let cabCoLogo = 'images/cabco-favicon.png'
	let prospUnlLogo = 'images/prosperity-unlimited-logo.png'

    export let page
    export let handlePage
    const questionsArr = Object.keys(questions)
    const part1 = questionsArr.slice(0,32)
    const part2 = questionsArr.slice(32,63)
    const part3 = questionsArr.slice(63, 85)
    const part4 = questionsArr.slice(85, 108)
    const part5 = questionsArr.slice(108, questions.length)

    const handleSubmit = async () => {
        console.log('submit')
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    {#if page === 1}
        {#each part1 as q, i}
            <Question {...questions[q]} index={i}/>
        {/each}

    {:else if page === 2}
        {#each part2 as q, i}
            <Question {...questions[q]} index={i += part1.length}/>
        {/each}

    {:else if page === 3}
    <h2 class="title is-4">2. Elegibility Determination</h2>
        {#each part3 as q, i}
            <Question {...questions[q]} index={i += part1.length + part2.length}/>
        {/each}

    {:else if page === 4}
        {#each part4 as q, i}
            <Question {...questions[q]} index={i += part1.length + part2.length + part3.length}/>
        {/each}

    {:else if page === 5}
    <h2 class="title is-4">3. Monthly Spending</h2>
        {#each part5 as q, i}
            <Question {...questions[q]} index={i += part1.length + part2.length + part3.length + part4.length}/>
        {/each}
    {/if}

    {#if page > 4}
    <div class="columns is-centered column-gap">
        <div class="column has-text-centered">
            <button class="button form-btn" type="submit">Submit</button>
        </div>
    </div>
    {/if}
        
    <div class="columns is-flex justify-content-space-around is-centered column-gap pt-6">
        {#if page > 0}
        <div class="column has-text-centered is-one-quarter-mobile">
            <button type="button" class="button" on:click={() => {handlePage(-1)}}>Prev</button>
        </div>
        {/if}
        <div class="column has-text-centered is-one-quarter-mobile">Page {page}/5</div>
        <div class="column has-text-centered is-one-quarter-mobile">
            {#if page < 5}
            <button type="button" class="button" on:click={() => {handlePage(1)}}>Next</button>
            {/if}
        </div>
    </div>

    <div class="columns is-vcentered">
        <div class="column is-half is-offset-one-quarter is-flex is-justify-content-space-around pt-6">
            <img src={cabCoLogo} alt="cabarrus county government logo" class="cabco-logo">
            <img src={prospUnlLogo} alt="prosperity unlimited logo" class="prosperity-logo">
        </div>
    </div>
</form>

<style>
    .form-btn {
        background-color: rgb(0,163,224);
        border-color: rgb(0,163,224);
        color: rgb(255,255,255);
        transition: 0.3s;
    }
    .form-btn:hover {
        background-color: rgb(0,163,224);
        border-color: rgb(0,163,224);
        color: rgb(255,255,255);
        box-shadow: 2px 2px 2px rgba(0,56,130,0.65);
        transform: scale(1.02);
        transition: 0.2s;
    }
    .cabco-logo {
		height: 60px;
		width: 70px;
	}
	.prosperity-logo {
		height: 70px;
		width: 90px;
	}
</style>