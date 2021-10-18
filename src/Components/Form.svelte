<script>
    import { questions } from '../utils/questionsConfig'
    import { blankForm } from '../store'
    import Question from './Question.svelte';
    export let page
    export let handlePage
    export let labels
    let files
    let cabCoLogo = 'images/ccg-logo-2.png'
	let prospLogo = 'images/prosperity-unlimited-logo.png'

    let questionsArr = Object.keys(questions)
    let hasCoApplicant = false
    
    
    const handleCoApplicantFilter = (bool) => {
        if(bool) {
            hasCoApplicant = true
            questionsArr = Object.keys(questions)
        } else {
            hasCoApplicant = false
            questionsArr = questionsArr.filter(k => !questions[k].isCoApplicant)
        }
    }

    if(!hasCoApplicant) {
        handleCoApplicantFilter(hasCoApplicant)
    }

    const handleSubmit = async () => {
        const config = {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify($blankForm)
        }
        const res = await fetch("http://localhost:8000/test", config)
        console.log("Response: ", await res.json())
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    {#if page === 1}
    <h3 class="subtitle is-4">Applicant</h3>
        {#each questionsArr.slice(0,27) as q, i}
                <Question {...questions[q]} index={i}/>
        {/each}
    {:else if page === 2}
        {#each questionsArr.slice(27, 49) as q, i}
            <Question {...questions[q]} index={i += 27}/>
        {/each}
    {:else if page === 3}
        {#each questionsArr.slice(49, 85) as q, i}
            <Question {...questions[q]} index={i += 49}/>
        {/each}
    {:else if page === 4}
        {#each questionsArr.slice(85,111) as q, i}
            <Question {...questions[q]} index={i += 89}/>
        {/each}
    {:else if page === 5}
        <div class="columns is-flex is-flex-wrap-wrap">
            <div class="column is-full is-full-mobile">
                <h3>{questions["isThereCoApplicant"].header}</h3>
            </div>
            <div class="column is-full is-full-mobile">
                {#each questions["isThereCoApplicant"].inputs as q}
                <label for={q.forName} class="radio">
                    {q.label}
                    <input
                    type={q.type}
                    name={q.name}
                    required={q.required}
                    checked={q.checked}
                    on:change={() => {handleCoApplicantFilter(q.value)}}>
                    {q.answer}
                </label>
                {/each}
            </div>
        </div>
        {#if hasCoApplicant}
            <h3 class="subtitle is-4">Co-Applicant</h3>
        {/if}
        {#each questionsArr.slice(112) as q, i}
            <Question {...questions[q]} index={i += 119}/>
        {/each}
    {/if}

    {#if page > 4}  
        <div class="columns is-flex is-flex-wrap-wrap">

            <div class="column is-full is-flex-wrap-wrap has-text-centered">
                <div class="columns content is-flex is-flex-wrap-wrap">
                    <div class="column is-full flex-basis pb-0">
                        <h4 class="title is-5 mb-0">Document Uploads:  Please upload the following documents as</h4>
                    </div>
                    <div class="column is-full is-flex is-justify-content-space-around pt-0 mb-4">
                        <ul class="is-inline-flex is-flex-direction-column">
                            <li class="has-text-left"> 30 days recent paystubs (additional may be required)</li>
                            <li class="has-text-left">Child Support (12-month payment history)</li>
                            <li class="has-text-left">Alimony (12-month payment history)</li>
                            <li class="has-text-left">Social Security Income </li>
                            <li class="has-text-left">Self-employment (2018 through 2020 Federal tax returns - tax transcripts are acceptable).</li>
                            <li class="has-text-left">Award letters – Social Security, Disability, etc.</li>
                            <li class="has-text-left">Retirement Income</li>
                            <li class="has-text-left">Other sources that support current income.</li>
                        </ul>
                    </div>
                </div>

                <div class="columns content is-flex is-flex-wrap-wrap">
                    <div class="column is-full flex-basis">
                        <h4 class="mb-0 title is-6">Required to have documented proof of source of funds to have the ability to resume any regular payments after account is reinstated.</h4>
                    </div>
                    <div class="column is-full is-flex is-justify-content-space-around mb-4">
                        <div class="columns is-flex-wrap-wrap">
                            <div class="column is-full pb-0">
                                <h4 class="title is-5 is-full mb-0">Documentation need as proof of source of funds:</h4>
                            </div>
                            <div class="column is-full pt-0">
                                <ul class="is-inline-flex is-flex-direction-column">
                                    <li class="has-text-left">Bank statements (checking or saving)</li>
                                    <li class="has-text-left">Money Market</li>
                                    <li class="has-text-left">Gift Letter with source of funds</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="columns content is-flex is-flex-wrap-wrap">
                    <div class="column is-full is-flex is-justify-content-space-around">
                        <div class="columns is-flex-wrap-wrap">
                            <div class="column is-full pb-0">
                                <h4 class="title is-5 is-full mb-0">Proof of COVID-19 Impact:</h4>
                            </div>
                            <div class="column is-full pt-0">
                                <ul class="is-inline-flex is-flex-direction-column">
                                    <li class="has-text-left">Letter from employer showing reduction in hours or income</li>
                                    <li class="has-text-left">Doctor note showing COVID-19 diagnosis</li>
                                    <li class="has-text-left">COVID-19 Unemployment Letter</li>
                                    <li class="has-text-left">Death Certificate of a co-borrower with COVID-19 cause.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column is-full is-flex is-flex-wrap-wrap is-justify-content-space-around pt-6">
                    <label class="file-label">
                        <input class="file-input" type="file" name="resume" bind:files>
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Upload documents…
                        </span>
                        </span>
                    </label>
                </div>
                <div class="column is-full is-flex is-justify-content-space-around">
                    <button class="button form-btn" type="submit">Submit</button>
                </div>
            </div>
        </div>
    {/if}
    {#if files && files[0]}
	<p>
		{files[0].name}
	</p>
    {/if}

    <div class="columns is-full is-flex  is-flex-wrap-wrap is-justify-content-space-around">
        <div class="column is-full">
            {#if labels.length > 0}
                <h4 class="title is-5 has-text-centered has-text-danger">The following questions require an answer before proceeding:</h4>
            {/if}
        </div>
        <div class="column is-full">
            <ul>
                {#each labels as l}
                    <li class="has-text-centered">{l}</li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="columns is-flex justify-content-space-between is-centered pt-6">
        {#if page > 0}
        <div class="column has-text-centered is-one-third-mobile">
            <button type="button" class="button" on:click={() => {handlePage(-1)}}>Prev</button>
        </div>
        {/if}
        <div class="column has-text-centered is-one-third-mobile">Page {page}/5</div>
        <div class="column has-text-centered is-one-third-mobile">
            {#if page < 5}
            <button type="button" class="button" on:click={() => {handlePage(1)}}>Next</button>
            {/if}
        </div>
    </div>

    <div class="columns is-vcentered">
        <div class="column is-half is-offset-one-quarter is-flex is-justify-content-space-around pt-6">
            <div class="columns">
                <div class="column is-two-thirds is-full-mobile">
                    <img src={cabCoLogo} alt="cabarrus county government logo" class="image">
                </div>
                <div class="column is-one-third is-full-mobile is-flex">
                    <img src={prospLogo} alt="prosperity unlimited logo" class="image is-128x128 pt-0">
                </div>
            </div>
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
        box-shadow: 2px 2px 3px rgb(0,56,130);
        transform: scale(1.02);
        transition: 0.2s;
    }

    .flex-basis {
        flex-basis:inherit;
    }
</style>