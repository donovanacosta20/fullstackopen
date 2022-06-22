const PersonalForm = ({ handleChangeNumber, handleChangePerson, handleAddPerson, newName, newNumber }) => {
	return (
		<div>
			<form>
				<div>
					name: <input onChange={handleChangePerson} value={newName} />
				</div>
				<div>
					number: <input onChange={handleChangeNumber} value={newNumber} />
				</div>

				<div>
					<button type="submit" onClick={handleAddPerson} >
						add
					</button>
				</div>
			</form>
		</div>
	)
}

export default PersonalForm;