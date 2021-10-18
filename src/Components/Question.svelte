<script>
    import { blankForm } from "../store"
    export let header
    export let inputs
    export let isCoApplicant
    export let isIncrement
    export let info
    export let index
    export let link
    export let hyperlinkText
    let isDisabled = true

    const toggleDisable = (bool) => {
        isDisabled = bool
    }
    const increment = (arrKey) => {
        $blankForm[arrKey] = [...$blankForm[arrKey], {...isIncrement.template.schema}]
    }
    const decrement = (arrKey, index) => {
        $blankForm[arrKey] = [
			...$blankForm[arrKey].slice(0, index),
			...$blankForm[arrKey].slice(index + 1, $blankForm[arrKey].length)
		];
    }
</script>

<div class="pb-6">
<h3>{index + 1}. {header} <a class="is-link" href={link} target="_blank">{link ? hyperlinkText : ""}</a></h3>
<h2>{info ? info : ""}</h2>
    {#if isIncrement.bool}
        <div class="columns is-flex is-flex-wrap-wrap is-justify-content-space-around is-centered column-gap pt-3">
            <div class="column is-one-quarter">
                <button class="button is-success" on:click|preventDefault={() => {increment(isIncrement.arrKey)}}>
                    {isIncrement.incrementBtn}
                </button>
            </div>
            <div class="column">
                {#if $blankForm[isIncrement.arrKey].length > 0}
                <button class="button is-danger" on:click|preventDefault={() => {decrement(isIncrement.arrKey, $blankForm[isIncrement.arrKey].length - 1)}}>
                    {isIncrement.decrementBtn}
                </button>
                {/if}
            </div>
        </div>
        {#each $blankForm[isIncrement.arrKey] as f, n}
        <div class="pb-2">{isIncrement.template.name} {n + 1}</div>
            <div class="columns is-flex is-flex-wrap-wrap pb-4">
               {#each isIncrement.template.inputs as t, i}
                    {#if t.field === "select"}
                    <div class="column">
                        <label for={t.label} class="label">
                            {t.displayLabel ? t.label : ""}
                            <select
                            type={f.type}
                            class="input"
                            name={f.name}
                            required={f.required}
                            bind:value={$blankForm[isIncrement.arrKey][n][t.bind]}>
                                {#each t.options as o}
                                <option value={o}>{o}</option>
                                {/each}    
                            </select>
                        </label>
                    </div>
                    {:else}
                    <div class="column">
                        <label for={t.label} class="label">
                            {t.displayLabel ? t.label : ""}
                            <input
                            type="text"
                            class="input"
                            bind:value={$blankForm[isIncrement.arrKey][n][t.bind]}>
                        </label>
                    </div>
                    {/if}
               {/each}
            </div>
        {/each}

    {:else}
        {#each inputs as f}

            {#if f.field == "input"}
                {#if f.type === "text"}
                    <label for={f.forName} class="label">
                        {f.displayLabel ? f.label : ""}
                        <input type="text" class="input" name={f.name} required={f.required} bind:value={$blankForm[f.bind]}>
                    </label>
                {:else if f.type === "number"}
                    <label for={f.forName} class="label">
                        {f.displayLabel ? f.label : ""}
                        <input type="number" class="input" name={f.name} required={f.required} bind:value={$blankForm[f.bind]}>
                    </label>
                {/if}

            {:else if f.field === "select"}
            <label for={f.forName} class="label">
                {f.displayLabel ? f.label : ""}
                <select type={f.type} class="input" name={f.name} required={f.required} bind:value={$blankForm[f.bind]}>
                    {#each f.options as o}
                    <option value={o}>{o}</option>
                    {/each}    
                </select>
            </label>

            {:else if f.field === "radio"}
            <div class="control">
                {#if !f.moreAnswer}
                    <label for={f.forName} class="radio">
                        {f.displayLabel ? f.label : ""}
                        <input type="radio" name={f.name} required={f.required} value={f.value}
                        on:change={() => {toggleDisable(true)}}
                        bind:group={$blankForm[f.bind]}
                        >
                        {f.answer}
                    </label>
                
                {:else}
                    <label for={f.forName} class="radio">
                        {f.displayLabel ? f.label : ""}
                        <input type="radio" required={f.required} name={f.name} value={f.value}
                        on:change={() => {toggleDisable(false)}}
                        bind:group={$blankForm[f.bind]}
                        >
                        {f.answer}
                        {#if !isDisabled}
                            {#each f.moreInput as m}
                                <label for={f.moreForName}>
                                    {f.moreLabel ? f.moreLabel : ""}
                                    <input type="text" name={f.moreName} disabled={isDisabled} bind:value={$blankForm[m.bind]}/>
                                </label>
                            {/each}
                        {/if}
                    </label>
                {/if}
            </div>
            {:else if f.field === "date"}
            <div class="columns">
                <div class="column">
                    <label for={f.forName} class="date">
                        {f.displayLabel ? f.label : ""}
                        <input type={f.type} name={f.name} required={f.required}>
                        {f.answer ? f.answer : ""}
                    </label>
                </div>
            </div>


            {:else if f.field === "checkbox"}
                <div>checklist else if</div>
            {:else}
            <div>ELSE</div>
            {/if}
        {/each}
    {/if}
</div>