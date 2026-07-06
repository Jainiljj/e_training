
import { useState } from 'react'

export default function Signup({ onClose }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [submitted, setSubmitted] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		console.log('Signup:', { name, email })
		setSubmitted(true)
	}

	return (
		<section id="signup">
			<h1>Sign Up</h1>
			{submitted ? (
				<div>
					<p>Thanks for signing up, {name || 'friend'}!</p>
					<button onClick={onClose}>Close</button>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<label>
						Name
						<input value={name} onChange={(e) => setName(e.target.value)} required />
					</label>
					<label>
						Email
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
					</label>
					<label>
						Password
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
					</label>
					<div style={{ marginTop: 8 }}>
						<button type="submit">Create account</button>
						<button type="button" onClick={onClose} style={{ marginLeft: 8 }}>
							Cancel
						</button>
					</div>
				</form>
			)}
		</section>
	)
}
