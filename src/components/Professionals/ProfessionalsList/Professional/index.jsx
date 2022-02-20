const Professional = ({ professional, onSelect }) => {
	const handleProfessionalClick = () => {
		onSelect(professional);
	};
	return <div onClick={handleProfessionalClick}>{professional.name}</div>;
};

export default Professional;
