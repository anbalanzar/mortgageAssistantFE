<script>
    export let header
    export let inputs
    // export let index
    let isDisabled = true

    const toggleDisable = bool => {
        isDisabled = bool
    }
</script>

<div class="p-4">
<h3>{header}</h3>
    {#each inputs as f}
        {#if f.field == "input"}
        <label for={f.forName} class="label">
            {f.label}
            <input type={f.type} class="input" name={f.name} required={f.required}>
        </label>

        {:else if f.field == "select"}
        <label for={f.forName} class="label">
            {f.label}
            <select type={f.type} class="input" name={f.name} required={f.required}>
                {#each f.options as o}
                <option value={o}>{o}</option>
                {/each}    
            </select>
        </label>

        {:else if f.field == "radio"}

            {#if !f.moreAnswer}
            <div class="control">
                <label for={f.forName} class="radio">
                    {f.label}
                    <input type={f.type} name={f.name} required={f.required}
                    on:change={() => {toggleDisable(true)}}>
                    {f.answer}
                </label>
            </div>
            {:else}
            <div class="control">
                <label for={f.forName} class="radio">
                    {f.label}
                    <input type={f.type} required={f.required} name={f.name}
                    on:change={() => {toggleDisable(false)}}>
                    {f.answer}
                    <div>
                        <div>{f.moreLabel ? f.moreLabel : ""}</div>
                        <input type="text" name={f.name} disabled={isDisabled}/>
                    </div>
                </label>
            </div>
            {/if}

        {:else if f.field == "date"}
        <label for={f.forName} class="date">
            {f.label}
            <input type={f.type} name={f.name} required={f.required}>
            {f.answer}
        </label>

        {:else}
        <div>ELSE</div>
        {/if}
    {/each}
</div>