<script>
    export let handlePage
    let isDisabled = true
    const toggleDisable = () => {
        isDisabled = !isDisabled
    }
</script>

<h2 class="title is-4">Instructions</h2>
<h3 class="is-underlined">Please Read Carefully Before Starting Survey</h3>
<p>Thank you for providing Prosperity Unlimited the opportunity to partner with Cabarrus County and you in reaching your goal for foreclosure prevention, home retention, and/or increasing your long-term financial sustainability.</p>
<p>You have taken the <i>First Step</i> by filling out the Mortgage Assistant Application.</p>

<p>Listed below is the process:</p>
<div class="content">
    <ol>
        <li>Complete Online Application & upload documents..</li>
        <li> E-sign your Authorization & Disclosure that will be sent through SignNow.</li>
    </ol>
</div>

<p>If you cannot upload with the initial application, the following options are also available:</p>
<div class="content">
    <ul>
        <li>Fax: 704-938-7431</li>
        <li>Email: helpdesk@prosperitycdc.org (must be in "PDF" format)</li>
        <li><i>Mailing Address:</i> Prosperity Unlimited, Inc.; P.O. Box 1095; Concord, NC 28026</li>
        <li>Hand delivered by appointment only - <i>Please call 704-933-7405</i></li>
    </ul>
</div>
<div class="columns is-vcentered is-flex is-flex-wrap-wrap">
    <div class="column is-full is-flex is-justify-content-flex-end">
        <label for="acknowledgement" class="checkbox" on:change={toggleDisable}>
            Acknowledgement: 
            <input type="checkbox">
        </label>
    </div>
    <div class="column is-full is-flex is-justify-content-flex-end">
        <button class="button intro-btn" on:click={() => {handlePage(1)}} disabled={isDisabled}>Okay</button>
    </div>
</div>

<style>
    .intro-btn {
        background-color: rgb(0,163,224);
        border-color: rgb(0,163,224);
        color: rgb(255,255,255);
        transition: 0.3s;
    }
    .intro-btn:hover {
        background-color: rgb(0,163,224);
        border-color: rgb(0,163,224);
        color: rgb(255,255,255);
        box-shadow: 2px 2px 3px rgb(0,56,130);
        transform: scale(1.02);
        transition: 0.2s;
    }
</style>