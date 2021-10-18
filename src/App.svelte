<script>
	import Intro from './Components/Intro.svelte'
	import Form from './Components/Form.svelte'
	import { questions } from './utils/questionsConfig'
	import { blankForm } from './store'
	
	let cabCoLogo = 'images/ccg-logo-2.png'
	let prospUnlLogo = 'images/prosperity-unlimited-logo.png'
	let y

	let page = 1

	const handleKeys = () => {
		if(page === 1) {
			return Object.keys(questions).slice(0,27)
		}
		if(page === 2) {
			return Object.keys(questions).slice(27,49)
		}
		if(page === 3) {
			return Object.keys(questions).slice(49,85)
		}
		if(page === 4) {
			return Object.keys(questions).slice(85,111)
		}
		if(page === 5) {
			return Object.keys(questions).slice(112)
		}
		return
	}

	const handleRequired = (keys) => {
		let inputs = keys.map(k => questions[k].inputs.filter(i => i.required))
		let required = []
		inputs.forEach(a => {
			a.forEach(o => required.push(o))
		})
		return required
	}

	let keys = handleKeys()
	let requiredQuestions
	console.log(requiredQuestions)
	let labels = []

	const handleValidation = () => {
		requiredQuestions = handleRequired(keys)
		requiredQuestions = requiredQuestions.filter(r => !$blankForm[r.bind])
		let bool = true
		let notAnswered = []
		if(requiredQuestions.length > 0) {
			requiredQuestions.forEach(q => {
				if(!$blankForm[q.bind]) {
					console.log(q.bind)
					notAnswered.push(q)
				}
			})
			labels = notAnswered.map(o => o.label)
			bool = false
		} else {
			bool = true
		}
		return bool
	}

	const handlePage = (n) => {
		if(n > 0 && page > 0) {
			if(!handleValidation()) {
				return 
			}
			page += n
			y = 1
			keys = handleKeys()
			labels = []
			requiredQuestions = []
		} else {
			page += n
			y = 1
			keys = handleKeys()
			requiredQuestions = handleRequired(keys)
			console.log(keys)
			console.log(requiredQuestions)
		}
	}

	const clearLocalStorage = () => {
		localStorage.removeItem("mortgageAssistantApplication")
	}

	window.addEventListener("unload", clearLocalStorage())
</script>

<svelte:window bind:scrollY={y}/>
<section class="hero is-bold is-fullheight is">
	<div class="hero-body ccg-bg">
		<div class="container is-fluid">
			<div class="box">
				
				<div class="columns is-flex is-flex-wrap-wrap">
					<div class="column is-two-fifths is-full-mobile">
						<h1 class="title is-3">Cabarrus County Mortgage Assistant Application</h1>
					</div>

					<div class="column is-flex is-three-fifths">
						<div class="columns is-flex is-flex-wrap-wrap">
							<div class="column is-full-mobile">
								<img src={cabCoLogo} alt="cabarrus county government logo" class="image">
							</div>

							<div class="column is-full-mobile">
								<img src={prospUnlLogo} alt="cabarrus county government logo" class="image is-128x128 pt-0">
							</div>
						</div>
					</div>
				</div>

				{#if page < 1}
				<Intro handlePage={handlePage}/>

				{:else}
				<Form page={page} handlePage={handlePage} labels={labels}/>

				{/if}

			</div>
		</div>
	</div>
</section>

<style>
	.ccg-bg {
		background-color: rgb(0,56,130);
	}
</style>