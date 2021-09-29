<script>
    export let handlePage
    let cabCoLogo = 'images/cabco-favicon.png'
	let prospUnlLogo = 'images/prosperity-unlimited-logo.png'
</script>

<h2 class="title is-4">Instructions</h2>
<h3 class="is-underlined">Please Read Carefully Before Starting Survey</h3>
<p>Thank you for providing Prosperity Unlimited the opportunity to partner with Habitat for Humanity and you in reaching your goal for foreclosure prevention, home retention, and/or increasing your long-term financial sustainability.</p>
<p>You have taken the <i>First Step</i> by requesting the Enrollment Application Package.</p>

<p>Listed below is the process:</p>
<div class="content">
    <ol>
        <li>Complete Online Application.</li>
        <li>E-sign your Authorization & Disclousure that will be sent through SignNow.</li>
        <li>Provide the required documents that was emailed to you. <i>They are needed to complete your assessment.</i></li>
    </ol>
</div>

<p>Please read carefully the instructions on the delivery of the required documents to Prosperity.</p>
<div class="content">
    <ul>
        <p>Documents can be delivered via:</p>
        <li>Fax: 704-938-7431</li>
        <li>Email: helpdesk@prosperitycdc.org (must be in "PDF" format <i>Do not</i> send pictures, zipped files or use Google Docs or Dropbox</li>
        <li><i>Mailing Address: </i>Prosperity Unlimited, Inc.; P.O. Box 1095; Concord, NC 28026</li>
        <li>Hand delivered by appointment only - <i>Please call 704-933-7405</i></li>
    </ul>
</div>
<div class="columns is-vcentered">
    <div class="column">
        <button class="button intro-btn" on:click={() => {handlePage(1)}}>Okay</button>
    </div>
    <!-- <div class="column is-one-quarter is-flex is-justify-content-space-between">
        <img src={cabCoLogo} alt="cabarrus county government logo" class="cabco-logo">
        <img src={prospUnlLogo} alt="prosperity unlimited logo" class="prosperity-logo">
    </div> -->
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
    .cabco-logo {
		height: 80px;
		width: 90px;
	}
	.prosperity-logo {
		height: 90px;
		width: 110px;
	}
</style>