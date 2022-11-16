export const Description = (description) => {
	let descriptionBenefits = String(description).slice(
		description.indexOf('Compensation & Benefits:')
	);
	let descriptionNoEnd = String(description).slice(
		0,
		description.indexOf('Compensation & Benefits:')
	);
	let descriptionReplace = descriptionBenefits
		.replace('Compensation & Benefits:', '')
		.replace(/\n|\r/g, '');
	let descriptionArr = descriptionReplace.split('.');
	let descriptionEnd = `
      <h3>Compensation & Benefits:</h3>
      Our physicians enjoy a wide range of benefits, including:
      <ul>
  
      ${descriptionArr
				.map((item) => {
					if (item) {
						return `<li>${item}</li>`;
					}
				})
				.join(' ')}
      </ul>
      `;
	let test =
		descriptionNoEnd
			.replace(
				'Responsopilities:',
				`
      <h3>Responsopilities:</h3>
      `
			)
			.replace(/\n|\r/g, '') + descriptionEnd.replace(/\n|\r/g, '').trim();

	return <p dangerouslySetInnerHTML={{ __html: test }}></p>;
};
