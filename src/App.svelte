<script>
	import Intro from './Components/Intro.svelte'
	import Form from './Components/Form.svelte'
	let cabCoLogo = 'images/cabco-favicon.png'
	let prospUnlLogo = 'images/prosperity-unlimited-logo.png'

	let page = 1
	const handlePage = (n) => {
			page += n
	}
</script>

<section class="hero is-bold is-fullheight">
	<div class="hero-body ccg-bg">
		<div class="container shadow">
			<div class="box">

				<div class="columns">
					<div class="column is-three-fifths">
						<h1 class="title is-3 text-is-centered">Cabarrus County Mortgage Assistant Application</h1>
					</div>
					<div class="column is-flex is-justify-content-space-around">
						<img class="cabco-logo" src={cabCoLogo} alt="cabarrus county government logo">
						<img class="cabco-logo" src={prospUnlLogo} alt="cabarrus county government logo">
					</div>
				</div>

				{#if page < 1}
				<Intro handlePage={handlePage}/>

				{:else}
				<Form page={page} handlePage={handlePage}/>

				{/if}

			</div>
		</div>
	</div>
</section>

<style>
	.ccg-bg {
		background-color: rgb(0,56,130);
	}

	.shadow {
		box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.65);
	}
	.cabco-logo {
		height: 80px;
		width: 90px;
	}
</style>